export type Locale = 'pl' | 'en' | 'ua' | 'ru';

export const locales: Locale[] = ['pl', 'en', 'ua', 'ru'];
export const defaultLocale: Locale = 'pl';

export interface SiteContent {
  h1: string;
  concept: string;
  note: string;
  hours: string;
  hoursDelivery: string;
  address: string;
  phone: string;
  phoneDelivery: string;
  buttons: {
    order: string;
    delivery: string;
    maps: string;
    call: string;
    deliveryModalTitle: string;
    deliveryModalClose: string;
    reservation: string;
    woltGlovo: string;
    instagram: string;
  };
  labels: {
    dostawa: string;
    restaurantHours: string;
    deliveryHours: string;
    delivery: string;
    hours: string;
    followUs: string;
    restaurant: string;
  };
  gallery: {
    title: string;
  };
  footer: {
    links: string;
    terms: string;
    regulamin: string;
    deliveryPage: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const siteContent: Record<Locale, SiteContent> = {
  pl: {
    h1: 'Murena — inspirowana Japonią restauracja & dostawa',
    concept: 'Dostawa i odbiór osobisty',
    note: 'Rezerwacja stolika 🥢',
    hours: 'Nd–Czw: 17:00–23:00 • Pt–Sb: 17:00–00:00',
    hoursDelivery: '16:00–21:30',
    address: 'Solec 46, 00-384 Warszawa, Polska',
    phone: '+48 732 607 102',
    phoneDelivery: '+48 791 607 102',
    buttons: {
      order: 'ZAMÓW ONLINE',
      delivery: 'DOSTAWA',
      maps: 'Otwórz w Google Maps',
      call: 'Zadzwoń',
      deliveryModalTitle: 'Opcje dostawy',
      deliveryModalClose: 'Zamknij',
      reservation: 'REZERWACJA',
      woltGlovo: 'WOLT / GLOVO',
      instagram: 'Instagram',
    },
    labels: {
      dostawa: 'Dostawa',
      restaurantHours: 'Godziny restauracji',
      deliveryHours: 'Godziny dostawy',
      delivery: 'Dostawa',
      hours: 'Godziny',
      followUs: 'Śledź nas',
      restaurant: 'Restauracja',
    },
    gallery: {
      title: 'Galeria',
    },
    footer: {
      links: 'Linki',
      terms: 'Regulamin serwisu',
      regulamin: 'Regulamin restauracji',
      deliveryPage: 'Dostawa',
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
    h1: 'Murena — ресторан и доставка, вдохновленные Японией',
    concept: 'Доставка и самовывоз',
    note: 'Бронирование столика 🥢',
    hours: 'Вс–Чт: 17:00–23:00 • Пт–Сб: 17:00–00:00',
    hoursDelivery: '16:00–21:30',
    address: 'Solec 46, 00-384 Варшава, Польша',
    phone: '+48 732 607 102',
    phoneDelivery: '+48 791 607 102',
    buttons: {
      order: 'ЗАКАЗАТЬ ОНЛАЙН',
      delivery: 'ДОСТАВКА',
      maps: 'Открыть в Google Maps',
      call: 'Позвонить',
      deliveryModalTitle: 'Варианты доставки',
      deliveryModalClose: 'Закрыть',
      reservation: 'БРОНИРОВАНИЕ',
      woltGlovo: 'WOLT / GLOVO',
      instagram: 'Instagram',
    },
    labels: {
      dostawa: 'Доставка',
      restaurantHours: 'Часы ресторана',
      deliveryHours: 'Часы доставки',
      delivery: 'Доставка',
      hours: 'Часы',
      followUs: 'Следите за нами',
      restaurant: 'Ресторан',
    },
    gallery: {
      title: 'Галерея',
    },
    footer: {
      links: 'Ссылки',
      terms: 'Правила пользования',
      regulamin: 'Правила ресторана',
      deliveryPage: 'Доставка',
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
    h1: 'Murena — ресторан та доставка натхненні Японією',
    concept: 'Доставка та самовивіз',
    note: 'Бронювання столика 🥢',
    hours: 'Нд–Чт: 17:00–23:00 • Пт–Сб: 17:00–00:00',
    hoursDelivery: '16:00–21:30',
    address: 'Solec 46, 00-384 Варшава, Польща',
    phone: '+48 732 607 102',
    phoneDelivery: '+48 791 607 102',
    buttons: {
      order: 'ЗАМОВИТИ ОНЛАЙН',
      delivery: 'ДОСТАВКА',
      maps: 'Відкрити в Google Maps',
      call: 'Подзвонити',
      deliveryModalTitle: 'Варіанти доставки',
      deliveryModalClose: 'Закрити',
      reservation: 'БРОНЮВАННЯ',
      woltGlovo: 'WOLT / GLOVO',
      instagram: 'Instagram',
    },
    labels: {
      dostawa: 'Доставка',
      restaurantHours: 'Години ресторану',
      deliveryHours: 'Години доставки',
      delivery: 'Доставка',
      hours: 'Години',
      followUs: 'Слідкуйте за нами',
      restaurant: 'Ресторан',
    },
    gallery: {
      title: 'Галерея',
    },
    footer: {
      links: 'Посилання',
      terms: 'Правила користування',
      regulamin: 'Правила ресторану',
      deliveryPage: 'Доставка',
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
    h1: "Murena — Japan's inspired restaurant & delivery",
    concept: 'Delivery and pickup',
    note: 'Table reservation 🥢',
    hours: 'Sun–Thu: 17:00–23:00 • Fri–Sat: 17:00–00:00',
    hoursDelivery: '16:00–21:30',
    address: 'Solec 46, Warsaw, Poland 00-384',
    phone: '+48 732 607 102',
    phoneDelivery: '+48 791 607 102',
    buttons: {
      order: 'ORDER ONLINE',
      delivery: 'DELIVERY',
      maps: 'Open in Google Maps',
      call: 'Call',
      deliveryModalTitle: 'Delivery Options',
      deliveryModalClose: 'Close',
      reservation: 'RESERVATION',
      woltGlovo: 'WOLT / GLOVO',
      instagram: 'Instagram',
    },
    labels: {
      dostawa: 'Delivery',
      restaurantHours: 'Restaurant Hours',
      deliveryHours: 'Delivery Hours',
      delivery: 'Delivery',
      hours: 'Hours',
      followUs: 'Follow Us',
      restaurant: 'Restaurant',
    },
    gallery: {
      title: 'Gallery',
    },
    footer: {
      links: 'Links',
      terms: 'Terms of Service',
      regulamin: 'Restaurant Regulations',
      deliveryPage: 'Delivery',
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

