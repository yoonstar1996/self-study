// 환율 캐싱 시스템
class ExchangeRateCache {
  private cache: Map<string, { rate: number; timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 1000 * 60 * 60; // 1시간 캐시

  async getRate(fromCurrency: string, toCurrency: string): Promise<number> {
    const cacheKey = `${fromCurrency}-${toCurrency}`;
    const cached = this.cache.get(cacheKey);

    // 캐시가 유효한 경우
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.rate;
    }

    // API에서 새로운 환율 가져오기
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[toCurrency];

      // 캐시에 저장
      this.cache.set(cacheKey, {
        rate,
        timestamp: Date.now(),
      });

      return rate;
    } catch (error) {
      console.error("환율 API 호출 실패:", error);
      // 에러 시 기본 환율 반환 (fallback)
      return this.getFallbackRate(fromCurrency, toCurrency);
    }
  }

  private getFallbackRate(fromCurrency: string, toCurrency: string): number {
    // 기본 환율 (API 실패 시 사용)
    const fallbackRates: Record<string, Record<string, number>> = {
      KRW: { USD: 0.00076, JPY: 0.11, EUR: 0.0007 },
      USD: { KRW: 1315.79, JPY: 148.5, EUR: 0.92 },
    };

    return fallbackRates[fromCurrency]?.[toCurrency] || 1;
  }
}

// 싱글톤 인스턴스
export const exchangeRateCache = new ExchangeRateCache();

// 캐싱을 사용한 통화 포맷팅
export const formatCurrencyWithCache = async (
  amount: number,
  fromCurrency: "KRW" | "USD",
  toCurrency: "KRW" | "USD" | "JPY" | "EUR"
) => {
  // 환율 계산
  let convertedAmount = amount;
  if (fromCurrency !== toCurrency) {
    const rate = await exchangeRateCache.getRate(fromCurrency, toCurrency);
    convertedAmount = amount * rate;
  }

  // 포맷팅
  const localeMap = {
    KRW: "ko-KR",
    USD: "en-US",
    JPY: "ja-JP",
    EUR: "de-DE",
  } as const;

  const locale = localeMap[toCurrency] || "en-US";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: toCurrency,
  }).format(convertedAmount);
};
