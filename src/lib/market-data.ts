import { format, subMinutes } from 'date-fns';
import i18n from '../i18n/i18n';

export interface MarketData {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface PredictionResult {
  probability: number;
  recommendedAction: 'BUY' | 'SELL' | 'WAIT';
  marketCondition: string;
  tradingOpportunity: string;
  technicalFactors: string[];
  fundamentalFactors: string[];
}

export interface MarketAnalysis {
  marketData: MarketData[];
  emaValues: number[];
  prediction: PredictionResult;
}

function generateRandomPrice(basePrice: number, volatility: number): number {
  const change = (Math.random() - 0.5) * 2 * volatility;
  return Number((basePrice + change).toFixed(5));
}

function generateMarketData(
  symbol: string,
  interval: string,
  count: number = 100
): MarketData[] {
  const basePrices: { [key: string]: number } = {
    'EUR/USD': 1.10525,
    'GBP/USD': 1.26734,
    'USD/JPY': 151.324,
    'USD/CHF': 0.89234,
    'AUD/USD': 0.65843,
    'USD/CAD': 1.35234
  };

  const basePrice = basePrices[symbol] || 1.0000;
  const volatility = basePrice * 0.0002;
  const data: MarketData[] = [];
  let currentPrice = basePrice;

  for (let i = count - 1; i >= 0; i--) {
    const timestamp = format(subMinutes(new Date(), i), "yyyy-MM-dd'T'HH:mm:ss'Z'");
    currentPrice = generateRandomPrice(currentPrice, volatility);
    const high = generateRandomPrice(currentPrice, volatility * 0.5);
    const low = generateRandomPrice(currentPrice, volatility * 0.5);

    data.push({
      timestamp,
      open: Number(currentPrice.toFixed(5)),
      high: Number(Math.max(high, currentPrice).toFixed(5)),
      low: Number(Math.min(low, currentPrice).toFixed(5)),
      close: Number(currentPrice.toFixed(5)),
      volume: Math.floor(Math.random() * 1000) + 500
    });
  }

  return data;
}

function calculateEMA(data: MarketData[], period: number): number[] {
  const multiplier = 2 / (period + 1);
  const emaValues: number[] = [];
  
  let sma = data.slice(0, period).reduce((sum, price) => sum + price.close, 0) / period;
  emaValues.push(sma);
  
  for (let i = period; i < data.length; i++) {
    const ema = (data[i].close - emaValues[emaValues.length - 1]) * multiplier + emaValues[emaValues.length - 1];
    emaValues.push(Number(ema.toFixed(5)));
  }
  
  return emaValues;
}

const marketConditions = {
  en: [
    'Strong upward trend with increasing momentum',
    'Consolidation phase with potential breakout',
    'Bearish pressure with high volume',
    'Range-bound trading with low volatility',
    'Bullish reversal pattern forming',
    'Bearish continuation pattern detected'
  ],
  ar: [
    'اتجاه صعودي قوي مع زخم متزايد',
    'مرحلة تجميع مع احتمال اختراق',
    'ضغط هبوطي مع حجم تداول مرتفع',
    'تداول ضمن نطاق مع تقلبات منخفضة',
    'تشكل نموذج انعكاس صعودي',
    'اكتشاف نموذج استمرار هبوطي'
  ],
  es: [
    'Fuerte tendencia alcista con impulso creciente',
    'Fase de consolidación con posible ruptura',
    'Presión bajista con alto volumen',
    'Operativa en rango con baja volatilidad',
    'Formación de patrón de reversión alcista',
    'Patrón de continuación bajista detectado'
  ],
  fr: [
    'Forte tendance haussière avec momentum croissant',
    'Phase de consolidation avec breakout potentiel',
    'Pression baissière avec volume élevé',
    'Trading en range avec faible volatilité',
    'Formation de pattern de renversement haussier',
    'Pattern de continuation baissier détecté'
  ]
};

const technicalFactors = {
  en: [
    'EMA crossover signals bullish momentum',
    'Price action shows strong support level',
    'Momentum indicators suggest oversold conditions',
    'Volume analysis indicates accumulation phase',
    'Multiple timeframe analysis confirms trend',
    'Key resistance level breakthrough imminent'
  ],
  ar: [
    'تقاطع المتوسط المتحرك يشير إلى زخم صعودي',
    'حركة السعر تظهر مستوى دعم قوي',
    'مؤشرات الزخم تشير إلى ظروف ذروة البيع',
    'تحليل الحجم يشير إلى مرحلة تجميع',
    'تحليل الإطارات الزمنية المتعددة يؤكد الاتجاه',
    'اختراق وشيك لمستوى المقاومة الرئيسي'
  ],
  es: [
    'Cruce de EMA señala momentum alcista',
    'Acción del precio muestra nivel de soporte fuerte',
    'Indicadores de momentum sugieren condiciones sobrevendidas',
    'Análisis de volumen indica fase de acumulación',
    'Análisis multitemporal confirma tendencia',
    'Ruptura inminente de nivel de resistencia clave'
  ],
  fr: [
    'Le croisement EMA signale un momentum haussier',
    'L\'action des prix montre un niveau de support solide',
    'Les indicateurs de momentum suggèrent des conditions de survente',
    'L\'analyse des volumes indique une phase d\'accumulation',
    'L\'analyse multi-temporelle confirme la tendance',
    'Rupture imminente du niveau de résistance clé'
  ]
};

const fundamentalFactors = {
  en: [
    'Economic data releases support bullish outlook',
    'Central bank policy favors currency strength',
    'Market sentiment shows increasing confidence',
    'Geopolitical factors suggest risk-off environment',
    'Interest rate differentials support currency pair',
    'Trade balance data indicates positive momentum'
  ],
  ar: [
    'البيانات الاقتصادية تدعم النظرة الصعودية',
    'سياسة البنك المركزي تفضل قوة العملة',
    'معنويات السوق تظهر ثقة متزايدة',
    'العوامل الجيوسياسية تشير إلى بيئة تجنب المخاطر',
    'فروق أسعار الفائدة تدعم زوج العملات',
    'بيانات الميزان التجاري تشير إلى زخم إيجابي'
  ],
  es: [
    'Datos económicos respaldan perspectiva alcista',
    'Política del banco central favorece fortaleza de la moneda',
    'Sentimiento del mercado muestra confianza creciente',
    'Factores geopolíticos sugieren entorno de aversión al riesgo',
    'Diferenciales de tasas de interés apoyan el par de divisas',
    'Datos de balanza comercial indican momentum positivo'
  ],
  fr: [
    'Les données économiques soutiennent les perspectives haussières',
    'La politique de la banque centrale favorise la force de la devise',
    'Le sentiment du marché montre une confiance croissante',
    'Les facteurs géopolitiques suggèrent un environnement risk-off',
    'Les différentiels de taux d\'intérêt soutiennent la paire de devises',
    'Les données de balance commerciale indiquent un momentum positif'
  ]
};

function generatePrediction(): PredictionResult {
  const currentLang = i18n.language as keyof typeof marketConditions;
  const fallbackLang = 'en';
  
  const randomFactor = Math.random();
  let recommendedAction: 'BUY' | 'SELL' | 'WAIT';
  let probability: number;

  if (randomFactor > 0.7) {
    recommendedAction = Math.random() > 0.5 ? 'BUY' : 'SELL';
    probability = 0.7 + Math.random() * 0.25;
  } else {
    recommendedAction = 'WAIT';
    probability = 0.3 + Math.random() * 0.4;
  }

  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const lang = marketConditions[currentLang] ? currentLang : fallbackLang;

  const tradingOpportunity = {
    en: {
      WAIT: 'Awaiting better trading conditions',
      BUY: 'Long opportunity with favorable risk-reward ratio',
      SELL: 'Short opportunity with favorable risk-reward ratio'
    },
    ar: {
      WAIT: 'انتظار ظروف تداول أفضل',
      BUY: 'فرصة شراء مع نسبة مخاطر/عائد مواتية',
      SELL: 'فرصة بيع مع نسبة مخاطر/عائد مواتية'
    },
    es: {
      WAIT: 'Esperando mejores condiciones de trading',
      BUY: 'Oportunidad larga con ratio riesgo-beneficio favorable',
      SELL: 'Oportunidad corta con ratio riesgo-beneficio favorable'
    },
    fr: {
      WAIT: 'En attente de meilleures conditions de trading',
      BUY: 'Opportunité longue avec ratio risque/récompense favorable',
      SELL: 'Opportunité courte avec ratio risque/récompense favorable'
    }
  };

  return {
    probability,
    recommendedAction,
    marketCondition: marketConditions[lang][Math.floor(Math.random() * marketConditions[lang].length)],
    tradingOpportunity: tradingOpportunity[lang][recommendedAction],
    technicalFactors: shuffleArray(technicalFactors[lang]).slice(0, 3),
    fundamentalFactors: shuffleArray(fundamentalFactors[lang]).slice(0, 2)
  };
}

export async function getMarketAnalysis(
  symbol: string,
  interval: string,
  levelMultiplier: number
): Promise<MarketAnalysis> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const marketData = generateMarketData(symbol, interval);
  const emaValues = calculateEMA(marketData, 40);
  const prediction = generatePrediction();

  return {
    marketData,
    emaValues,
    prediction
  };
}

export async function startTradingSession(
  symbol: string,
  interval: string,
  levelMultiplier: number
): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 1000));
}