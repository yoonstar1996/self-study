"use client";

import { formatCurrencyWithExchange } from "@/utils/currency-fixed";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  // 기본 가격 (원화 기준)
  const basePrice = 15000; // 15,000원

  // 할인율과 세율 설정
  const discountRate = 15; // 15% 할인
  const taxRate = 10; // 10% 세금
  const shippingCost = 3000; // 3,000원 배송비

  // 실제 계산
  const discount = Math.round(basePrice * (discountRate / 100)); // 할인 금액
  const priceAfterDiscount = basePrice - discount; // 할인 후 가격
  const tax = Math.round(priceAfterDiscount * (taxRate / 100)); // 세금
  const subtotal = priceAfterDiscount; // 소계 (할인 후 가격)
  const total = subtotal + tax + shippingCost; // 총액 (소계 + 세금 + 배송비)

  // 로케일에 따른 통화 결정
  const getCurrency = (locale: string) => {
    return locale === "ko" ? "KRW" : "USD";
  };

  const targetCurrency = getCurrency(locale);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">{t("welcome")}</h1>

        <p className="text-lg text-gray-700 leading-relaxed">{t("hello")}</p>

        {/* 환율을 고려한 금액 포맷팅 예시 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            환율을 고려한 금액 포맷팅 / Currency Formatting with Exchange Rate
          </h2>

          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>기준 통화:</strong> ₩15,000 (KRW)
              <br />
              <strong>표시 통화:</strong>{" "}
              {targetCurrency === "KRW" ? "₩ (KRW)" : "$ (USD)"}
              <br />
              <strong>할인율:</strong> {discountRate}%, <strong>세율:</strong>{" "}
              {taxRate}%
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">{t("price_label")}:</span>
                <span className="font-medium">
                  {formatCurrencyWithExchange(basePrice, "KRW", targetCurrency)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t("discount_label")}:</span>
                <span className="font-medium text-red-600">
                  -{formatCurrencyWithExchange(discount, "KRW", targetCurrency)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t("tax_label")}:</span>
                <span className="font-medium">
                  {formatCurrencyWithExchange(tax, "KRW", targetCurrency)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t("shipping_label")}:</span>
                <span className="font-medium">
                  {formatCurrencyWithExchange(
                    shippingCost,
                    "KRW",
                    targetCurrency
                  )}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">{t("subtotal_label")}:</span>
                <span className="font-medium">
                  {formatCurrencyWithExchange(subtotal, "KRW", targetCurrency)}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-600 font-semibold">
                  {t("total_label")}:
                </span>
                <span className="font-bold text-lg">
                  {formatCurrencyWithExchange(total, "KRW", targetCurrency)}
                </span>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded">
                <div className="text-sm text-green-700">
                  할인율 / Discount Rate: {discountRate}%
                  <br />
                  세율 / Tax Rate: {taxRate}%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            테스트 방법 / How to Test
          </h3>
          <p className="text-blue-700">
            상단 네비게이션 바의 언어 선택 셀렉트박스를 클릭하여 한국어와 영어를
            전환해보세요.
            <br />
            한국어: ₩15,000, 영어: $11.39 (실제 환율 적용)
            <br />
            Click the language selector in the top navigation bar to switch
            between Korean and English.
          </p>
        </div>
      </div>
    </main>
  );
}
