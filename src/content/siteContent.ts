export type Locale = 'pl' | 'ru' | 'ua' | 'en';

export const locales: Locale[] = ['pl', 'ru', 'ua', 'en'];
export const defaultLocale: Locale = 'pl';

export interface SiteContent {
  h1: string;
  concept: string;
  note: string;
  hours: string;
  address: string;
  phone: string;
  buttons: {
    order: string;
    delivery: string;
    maps: string;
    call: string;
    deliveryModalTitle: string;
    deliveryModalClose: string;
  };
  gallery: {
    title: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const siteContent: Record<Locale, SiteContent> = {
  pl: {
    h1: 'Murena — restauracja seafood w Warszawie',
    concept: 'Dostawa i odbiór osobisty',
    note: 'Rezerwacja stolika 🥢',
    hours: 'Nd–Czw: 17:00–23:00 • Pt–Sb: 17:00–00:00',
    address: 'Solec 46, 00-384 Warszawa, Polska',
    phone: '+48 732 607 102',
    buttons: {
      order: 'ZAMÓW ONLINE',
      delivery: 'DOSTAWA (UBER / BOLT)',
      maps: 'Otwórz w Google Maps',
      call: 'Zadzwoń',
      deliveryModalTitle: 'Opcje dostawy',
      deliveryModalClose: 'Zamknij',
    },
    gallery: {
      title: 'Galeria',
    },
    seo: {
      title: 'Murena — Restauracja Seafood w Warszawie | Sushi & Nigiri',
      description: 'Murena — restauracja seafood w Warszawie. Sushi, nigiri, świeże owoce morza, Sushi & Nigiri. Solec 46, Warszawa.',
      keywords: [
        'Murena',
        'restauracja seafood Warszawa',
        'raw bar Warszawa',
        'dania do dzielenia Warszawa',
        'owoce morza Warszawa',
        'Sushi',
        'Nigiri',
        'seafood restaurant Warsaw',
        'Murena Warszawa',
      ],
    },
  },
  ru: {
    h1: 'Murena - ресторан морепродуктов в Варшаве',
    concept: 'Доставка и самовывоз',
    note: 'Бронирование столика 🥢',
    hours: 'Вс–Чт: 17:00–23:00 • Пт–Сб: 17:00–00:00',
    address: 'Solec 46, 00-384 Варшава, Польша',
    phone: '+48 732 607 102',
    buttons: {
      order: 'ЗАКАЗАТЬ ОНЛАЙН',
      delivery: 'ДОСТАВКА (UBER / BOLT)',
      maps: 'Открыть в Google Maps',
      call: 'Позвонить',
      deliveryModalTitle: 'Варианты доставки',
      deliveryModalClose: 'Закрыть',
    },
    gallery: {
      title: 'Галерея',
    },
    seo: {
      title: 'Murena — Ресторан морепродуктов в Варшаве | Суши | Нигири',
      description: 'Murena — ресторан морепродуктов в Варшаве. Суши, нигири, свежие морепродукты. Бронирование по ссылке в bio. Solec 46, Варшава.',
      keywords: [
        'Murena',
        'ресторан морепродуктов Варшава',
        'raw bar Варшава',
        'блюда для компании Варшава',
        'морепродукты Варшава',
        'ресторан Solec',
        'seafood restaurant Warsaw',
        'Murena Варшава',
        'Суши',
        'Нигири',
      ],
    },
  },
  ua: {
    h1: 'Murena — ресторан морепродуктів у Варшаві',
    concept: 'Доставка та самовивіз',
    note: 'Бронювання столика 🥢',
    hours: 'Нд–Чт: 17:00–23:00 • Пт–Сб: 17:00–00:00',
    address: 'Solec 46, 00-384 Варшава, Польща',
    phone: '+48 732 607 102',
    buttons: {
      order: 'ЗАМОВИТИ ОНЛАЙН',
      delivery: 'ДОСТАВКА (UBER / BOLT)',
      maps: 'Відкрити в Google Maps',
      call: 'Подзвонити',
      deliveryModalTitle: 'Варіанти доставки',
      deliveryModalClose: 'Закрити',
    },
    gallery: {
      title: 'Галерея',
    },
    seo: {
      title: 'Murena — Ресторан морепродуктів у Варшаві | Суші, нігірі',
      description: 'Murena — ресторан морепродуктів у Варшаві. Суші, нігірі, свіжі морепродукти. Бронювання за посиланням у bio. Solec 46, Варшава.',
      keywords: [
        'Murena',
        'ресторан морепродуктів Варшава',
        'raw bar Варшава',
        'страви для компанії Варшава',
        'морепродукти Варшава',
        'ресторан Solec',
        'seafood restaurant Warsaw',
        'Murena Варшава',
        'Суші',
        'Нігірі',
      ],
    },
  },
  en: {
    h1: 'Murena Seafood Restaurant in Warsaw',
    concept: 'Delivery and pickup',
    note: 'Table reservation 🥢',
    hours: 'Sun–Thu: 17:00–23:00 • Fri–Sat: 17:00–00:00',
    address: 'Solec 46, Warsaw, Poland 00-384',
    phone: '+48 732 607 102',
    buttons: {
      order: 'ORDER ONLINE',
      delivery: 'DELIVERY (UBER / BOLT)',
      maps: 'Open in Google Maps',
      call: 'Call',
      deliveryModalTitle: 'Delivery Options',
      deliveryModalClose: 'Close',
    },
    gallery: {
      title: 'Gallery',
    },
    seo: {
      title: 'Murena Seafood Restaurant in Warsaw | Sushi, nigiri',
      description: 'Murena Seafood Restaurant in Warsaw. Sushi, nigiri, fresh seafood. Reservations via link in bio. Solec 46, Warsaw.',
      keywords: [
        'Murena',
        'seafood restaurant Warsaw',
        'raw bar Warsaw',
        'sharing plates Warsaw',
        'seafood Warsaw',
        'restaurant Solec',
        'Murena Warsaw',
        'seafood restaurant Poland',
        'Sushi',
        'Nigiri',
      ],
    },
  },
};

export const getGoogleMapsUrl = (address: string): string => {
  const encoded = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=Murena%20%E2%80%93%20Seafood%20in%20Warsaw`;
};

export const instagramUrl = 'https://www.instagram.com/murena.warsaw';
export const choiceQrUrl = 'https://seagull.choiceqr.com/section:murena-christmas-sets/new-years-set';
export const reservationUrl = 'https://mojstolik.pl/restauracja/MURENA/336821ac3c41e0605390031537e06964';

