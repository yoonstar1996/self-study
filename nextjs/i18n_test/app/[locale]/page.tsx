"use client";

import { useTranslations } from "next-intl";
import { formatCurrency, formatNumber, formatPercentage } from "@/utils/currency";
import { useParams } from "next/navigation";

export default function HomePage() {
    const t = useTranslations();
    const params = useParams();
    const locale = params.locale as string;

    // 샘플 데이터
    const sampleData = {
        price: 15000,
        total: 45000,
        discount: 5000,
        tax: 2250,
        shipping: 3000,
        percentage: 15
    };

    return (
        <main className="max-w-4xl mx-auto p-8">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    {t("welcome")}
                </h1>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                    {t("hello")}
                </p>
                
                {/* 금액 포맷팅 예시 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        금액 포맷팅 예시 / Currency Formatting Examples
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("price_label")}:</span>
                                <span className="font-medium">{formatCurrency(sampleData.price, locale)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("discount_label")}:</span>
                                <span className="font-medium text-red-600">-{formatCurrency(sampleData.discount, locale)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("tax_label")}:</span>
                                <span className="font-medium">{formatCurrency(sampleData.tax, locale)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("shipping_label")}:</span>
                                <span className="font-medium">{formatCurrency(sampleData.shipping, locale)}</span>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("subtotal_label")}:</span>
                                <span className="font-medium">{formatCurrency(sampleData.price, locale)}</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                                <span className="text-gray-600 font-semibold">{t("total_label")}:</span>
                                <span className="font-bold text-lg">{formatCurrency(sampleData.total, locale)}</span>
                            </div>
                            <div className="mt-4 p-3 bg-blue-50 rounded">
                                <div className="text-sm text-blue-700">
                                    할인율 / Discount Rate: {formatPercentage(sampleData.percentage, locale)}
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
                        상단 네비게이션 바의 언어 선택 셀렉트박스를 클릭하여 한국어와 영어를 전환해보세요.
                        <br />
                        Click the language selector in the top navigation bar to switch between Korean and English.
                    </p>
                </div>
            </div>
        </main>
    );
}
