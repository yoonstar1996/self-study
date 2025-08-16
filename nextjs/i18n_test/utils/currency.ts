export const formatCurrency = (amount: number, locale: string) => {
  const currencyMap = {
    'ko': 'KRW',
    'en': 'USD'
  };
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyMap[locale as keyof typeof currencyMap],
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
};

export const formatNumber = (number: number, locale: string) => {
  return new Intl.NumberFormat(locale).format(number);
};

export const formatPercentage = (value: number, locale: string) => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }).format(value / 100);
};
