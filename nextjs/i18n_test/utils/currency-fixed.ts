// 환율을 고려한 올바른 통화 포맷팅
export const formatCurrencyWithExchange = (
  amount: number,
  fromCurrency: "KRW" | "USD",
  toCurrency: "KRW" | "USD" | "JPY" | "EUR"
) => {
  // 환율 정보 (실제로는 API에서 가져와야 함)
  const exchangeRates = {
    KRW: {
      USD: 0.00076, // 1원 = 0.00076달러
      JPY: 0.11, // 1원 = 0.11엔
      EUR: 0.0007, // 1원 = 0.00070유로
    },
    USD: {
      KRW: 1315.79, // 1달러 = 1315.79원
      JPY: 148.5, // 1달러 = 148.50엔
      EUR: 0.92, // 1달러 = 0.92유로
    },
  };

  // 통화별 로케일 매핑
  const currencyToLocale = {
    KRW: "ko-KR",
    USD: "en-US",
    JPY: "ja-JP",
    EUR: "de-DE",
  } as const;

  // 1. 환율 계산
  let convertedAmount = amount;
  if (fromCurrency !== toCurrency) {
    const rate =
      exchangeRates[fromCurrency]?.[
        toCurrency as keyof (typeof exchangeRates)[typeof fromCurrency]
      ];
    if (rate) {
      convertedAmount = amount * rate;
    }
  }

  // 2. 포맷팅
  const locale = currencyToLocale[toCurrency] || toCurrency;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: toCurrency,
  }).format(convertedAmount);
};

// 사용 예시
// formatCurrencyWithExchange(15000, 'KRW', 'USD') → "$11.39"
// formatCurrencyWithExchange(15000, 'KRW', 'JPY') → "¥1,650"
// formatCurrencyWithExchange(15000, 'KRW', 'KRW') → "₩15,000"
