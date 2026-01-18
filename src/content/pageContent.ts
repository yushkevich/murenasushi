import type { Locale } from './siteContent';

interface PageContent {
  terms: {
    title: string;
    sections: Array<{
      heading: string;
      content: string[];
    }>;
  };
  regulamin: {
    title: string;
    sections: Array<{
      heading: string;
      content: string[];
    }>;
  };
  delivery: {
    title: string;
    sections: Array<{
      heading: string;
      content: string[];
    }>;
  };
}

export const pageContent: Record<Locale, PageContent> = {
  pl: {
    terms: {
      title: 'Polityka Prywatności',
      sections: [
        {
          heading: 'Informacje ogólne',
          content: [
            'Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług poprzez Stronę Internetową Murena Seafood Restaurant.',
            'Administratorem danych osobowych zbieranych za pośrednictwem Strony Internetowej jest Murena Seafood Restaurant z siedzibą przy Solec 46, 00-384 Warszawa.',
           'Z Administratorem można skontaktować się poprzez e-mail: kontakt@murenasushi.pl lub telefonicznie pod numerem +48 732 607 102.',
          ],
        },
        {
          heading: 'Rodzaj przetwarzanych danych',
          content: [
            'Administrator przetwarza następujące kategorie danych osobowych Użytkowników:',
            '• Dane identyfikacyjne (imię, nazwisko)',
            '• Dane kontaktowe (adres e-mail, numer telefonu)',
            '• Dane adresowe (adres dostawy)',
            '• Dane dotyczące zamówień i historii zakupów',
            '• Dane dotyczące korzystania ze Strony (pliki cookies)',
          ],
        },
        {
          heading: 'Cele i podstawy prawne przetwarzania',
          content: [
            'Dane osobowe Użytkowników przetwarzane są w celu:',
            '1. Realizacji zamówień złożonych przez Stronę Internetową (podstawa prawna: wykonanie umowy)',
            '2. Prowadzenia korespondencji z Użytkownikami (podstawa prawna: prawnie uzasadniony interes Administratora)',
            '3. Marketingu bezpośredniego produktów i usług (podstawa prawna: prawnie uzasadniony interes Administratora lub zgoda)',
            '4. Dochodzenia roszczeń lub obrony przed roszczeniami (podstawa prawna: prawnie uzasadniony interes Administratora)',
            '5. Spełnienia obowiązków prawnych ciążących na Administratorze (podstawa prawna: obowiązek prawny)',
          ],
        },
        {
          heading: 'Udostępnianie danych',
          content: [
            'Dane osobowe mogą być przekazywane następującym kategoriom odbiorców:',
            '• Dostawcom usług kurierskich i transportowych',
            '• Dostawcom systemów płatności elektronicznych',
            '• Dostawcom usług IT i hostingu',
            '• Organom państwowym na podstawie obowiązujących przepisów prawa',
          ],
        },
        {
          heading: 'Okres przechowywania danych',
          content: [
            'Dane osobowe przechowywane są przez okres niezbędny do realizacji celów określonych powyżej, a po tym czasie przez okres oraz w zakresie wymaganym przez przepisy prawa.',
          ],
        },
        {
          heading: 'Prawa Użytkownika',
          content: [
            'Użytkownikowi przysługuje prawo do:',
            '• Dostępu do swoich danych osobowych',
            '• Sprostowania danych',
            '• Usunięcia danych',
            '• Ograniczenia przetwarzania',
            '• Przenoszenia danych',
            '• Wniesienia sprzeciwu wobec przetwarzania',
            '• Cofnięcia zgody w dowolnym momencie',
            '• Wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych)',
          ],
        },
        {
          heading: 'Pliki Cookies',
          content: [
            'Strona Internetowa wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania strony oraz poprawy jakości świadczonych usług.',
            'Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej.',
          ],
        },
      ],
    },
    regulamin: {
      title: 'Regulamin',
      sections: [
        {
          heading: '§1 Postanowienia ogólne',
          content: [
            '1. Niniejszy Regulamin określa zasady korzystania ze Strony Internetowej oraz zasady składania zamówień w Restauracji Murena Seafood Restaurant.',
            '2. Administratorem Strony Internetowej i Usługodawcą jest Murena Seafood Restaurant z siedzibą przy Solec 46, 00-384 Warszawa.',
            '3. Kontakt z Restauracją możliwy jest pod numerem telefonu +48 732 607 102 lub adresem e-mail: kontakt@murenasushi.pl.',
            '4. Warunkiem korzystania ze Strony Internetowej jest zapoznanie się z niniejszym Regulaminem i jego akceptacja.',
          ],
        },
        {
          heading: '§2 Definicje',
          content: [
            '• Strona Internetowa – serwis internetowy dostępny pod adresem murenasushi.pl',
            '• Użytkownik – osoba korzystająca ze Strony Internetowej',
            '• Klient – osoba składająca zamówienie',
            '• Zamówienie – oświadczenie woli Klienta zmierzające do zawarcia umowy sprzedaży',
            '• Umowa – umowa sprzedaży zawarta pomiędzy Klientem a Restauracją',
            '• Towar – produkty oferowane przez Restaurację',
          ],
        },
        {
          heading: '§3 Składanie zamówień',
          content: [
            '1. Zamówienia można składać:',
            '• Telefonicznie pod numerem +48 732 607 102',
            '• Poprzez Stronę Internetową',
            '• Poprzez platformy partnerskie (Wolt, Glovo)',
            '2. Wszystkie ceny podane na Stronie Internetowej są cenami brutto w złotych polskich.',
            '3. Restauracja zastrzega sobie prawo do odmowy realizacji zamówienia w przypadku braku możliwości jego wykonania.',
            '4. Czas realizacji zamówienia jest każdorazowo ustalany indywidualnie i komunikowany Klientowi.',
          ],
        },
        {
          heading: '§4 Płatności',
          content: [
            '1. Klient może dokonać płatności:',
            '• Gotówką przy odbiorze',
            '• Kartą płatniczą przy odbiorze',
            '• Przelewem elektronicznym online',
            '2. Restauracja wystawia paragon fiskalny lub fakturę VAT na życzenie Klienta.',
          ],
        },
        {
          heading: '§5 Dostawa',
          content: [
            '1. Restauracja oferuje dostawę zamówień na terenie Warszawy.',
            '2. Koszty i warunki dostawy określone są w zakładce "Dostawa".',
            '3. Odbiór osobisty zamówień możliwy jest w lokalu Restauracji przy Solec 46.',
          ],
        },
        {
          heading: '§6 Odstąpienie od umowy',
          content: [
            '1. Ze względu na specyfikę oferowanych produktów (żywność), prawo odstąpienia od umowy nie przysługuje.',
            '2. Klient może anulować zamówienie przed rozpoczęciem jego realizacji, kontaktując się z Restauracją.',
          ],
        },
        {
          heading: '§7 Reklamacje',
          content: [
            '1. Reklamacje dotyczące jakości Towarów należy zgłaszać niezwłocznie po ich otrzymaniu.',
            '2. Reklamacje można składać:',
            '• Telefonicznie: +48 732 607 102',
            '• E-mailowo: kontakt@murenasushi.pl',
            '3. Restauracja rozpatruje reklamacje w ciągu 14 dni od daty jej otrzymania.',
          ],
        },
        {
          heading: '§8 Postanowienia końcowe',
          content: [
            '1. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności Kodeksu Cywilnego.',
            '2. Restauracja zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie po upływie 14 dni od daty ich publikacji na Stronie Internetowej.',
            '3. Wszelkie spory wynikające z realizacji postanowień niniejszego Regulaminu będą rozstrzygane przez sąd właściwy dla siedziby Restauracji.',
          ],
        },
      ],
    },
    delivery: {
      title: 'Dostawa',
      sections: [
        {
          heading: 'Strefy dostawy',
          content: [
            'Dostawa Murena Seafood Restaurant obejmuje następujące obszary w Warszawie:',
            '• Śródmieście',
            '• Mokotów',
            '• Ochota',
            '• Wola',
            '• Żoliborz',
            'Dokładną dostępność dostawy pod konkretny adres można sprawdzić kontaktując się z nami telefonicznie lub poprzez platformy partnerskie.',
          ],
        },
        {
          heading: 'Koszty dostawy',
          content: [
            'Koszt dostawy regulowany przez dostawców lub odbiór osobisty',
          ],
        },
        {
          heading: 'Godziny dostaw',
          content: [
            'Dostawy realizujemy w następujących godzinach:',
            '• Niedziela – Czwartek: 17:00 – 22:00',
            '• Piątek – Sobota: 17:00 – 22:00',
            'Zamówienia przyjmujemy do godziny 22:00.',
            'Czas dostawy wynosi zwykle 45-60 minut od momentu potwierdzenia zamówienia.',
          ],
        },
        {
          heading: 'Jak zamówić',
          content: [
            'Zamówienie z dostawą można złożyć na kilka sposobów:',
            '1. Przez telefon: +48 732 607 102',
            '2. Przez naszą stronę internetową: murenasushi.pl',
            '3. Przez aplikacje partnerskie:',
            '   • Wolt',
            '   • Glovo',
          ],
        },
        {
          heading: 'Metody płatności',
          content: [
            'Przy dostawie akceptujemy następujące formy płatności:',
            '• Gotówka przy odbiorze',
            '• Karta płatnicza u kuriera (terminal płatniczy)',
            '• Płatność online (przedpłata)',
            'Przy zamówieniach przez platformy partnerskie – płatność zgodnie z zasadami danej platformy.',
          ],
        },
        {
          heading: 'Odbiór osobisty',
          content: [
            'Oferujemy również możliwość odbioru osobistego zamówienia w naszej restauracji:',
            'Adres: Solec 46, 00-384 Warszawa',
            'Odbiór osobisty zamówień jest bezpłatny.',
            'Przy odbiorze osobistym prosimy o potwierdzenie gotowości zamówienia telefonicznie lub poprzez wiadomość.',
          ],
        },
        {
          heading: 'Pakowanie i transport',
          content: [
            'Wszystkie nasze potrawy są starannie pakowane w specjalistyczne opakowania zapewniające:',
            '• Zachowanie odpowiedniej temperatury',
            '• Estetyczny wygląd dań',
            '• Bezpieczeństwo podczas transportu',
            'Do każdego zamówienia dołączamy komplet sztućców jednorazowych, pałeczki, wasabi, imbir oraz sos sojowy.',
          ],
        },
      ],
    },
  },
  en: {
    terms: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: 'General Information',
          content: [
            'This Privacy Policy sets out the rules for processing and protection of personal data provided by Users in connection with their use of services through the Murena Seafood Restaurant Website.',
            'The controller of personal data collected through the Website is Murena Seafood Restaurant with its registered office at Solec 46, 00-384 Warsaw.',
            'The Administrator can be contacted via e-mail: admin@solec46.com or by phone at +48 732 607 102.',
          ],
        },
        {
          heading: 'Types of Data Processed',
          content: [
            'The Administrator processes the following categories of Users\' personal data:',
            '• Identification data (name, surname)',
            '• Contact details (e-mail address, telephone number)',
            '• Address data (delivery address)',
            '• Data concerning orders and purchase history',
            '• Data relating to the use of the Site (cookies)',
          ],
        },
        {
          heading: 'Purposes and Legal Bases for Processing',
          content: [
            'Users\' personal data are processed for the purpose of:',
            '1. Fulfillment of orders placed through the Website (legal basis: performance of a contract)',
            '2. Correspondence with Users (legal basis: legitimate interest of the Administrator)',
            '3. Direct marketing of products and services (legal basis: legitimate interest of the Administrator or consent)',
            '4. Pursuing claims or defending against claims (legal basis: legitimate interest of the Administrator)',
            '5. Fulfillment of legal obligations incumbent on the Administrator (legal basis: legal obligation)',
          ],
        },
        {
          heading: 'Data Sharing',
          content: [
            'Personal data may be transferred to the following categories of recipients:',
            '• Courier and transport service providers',
            '• Electronic payment system providers',
            '• IT and hosting service providers',
            '• State authorities on the basis of applicable laws',
          ],
        },
        {
          heading: 'Data Retention Period',
          content: [
            'Personal data are stored for the period necessary to achieve the purposes specified above, and thereafter for the period and to the extent required by law.',
          ],
        },
        {
          heading: 'User Rights',
          content: [
            'The User has the right to:',
            '• Access their personal data',
            '• Rectification of data',
            '• Erasure of data',
            '• Restriction of processing',
            '• Data portability',
            '• Object to processing',
            '• Withdraw consent at any time',
            '• Lodge a complaint with a supervisory authority (President of the Personal Data Protection Office)',
          ],
        },
        {
          heading: 'Cookies',
          content: [
            'The Website uses cookies to ensure proper functioning of the site and improve the quality of services provided.',
            'The User may at any time change cookie settings in their web browser.',
          ],
        },
      ],
    },
    regulamin: {
      title: 'Terms and Conditions',
      sections: [
        {
          heading: '§1 General Provisions',
          content: [
            '1. These Terms and Conditions govern the use of the Website and the rules for placing orders at Murena Seafood Restaurant.',
            '2. The administrator of the Website and the Service Provider is Murena Seafood Restaurant with its registered office at Solec 46, 00-384 Warsaw.',
            '3. Contact with the Restaurant is possible by phone at +48 732 607 102 or email: admin@solec46.com.',
            '4. A condition for using the Website is reading and accepting these Terms and Conditions.',
          ],
        },
        {
          heading: '§2 Definitions',
          content: [
            '• Website – the internet service available at murenasushi.pl',
            '• User – a person using the Website',
            '• Customer – a person placing an order',
            '• Order – a declaration of intent by the Customer aimed at concluding a sales contract',
            '• Contract – a sales contract concluded between the Customer and the Restaurant',
            '• Goods – products offered by the Restaurant',
          ],
        },
        {
          heading: '§3 Placing Orders',
          content: [
            '1. Orders can be placed:',
            '• By phone at +48 732 607 102',
            '• Through the Website',
            '• Through partner platforms (Wolt, Glovo)',
            '2. All prices on the Website are gross prices in Polish zlotys.',
            '3. The Restaurant reserves the right to refuse to fulfill an order if it cannot be executed.',
            '4. Order fulfillment time is determined individually each time and communicated to the Customer.',
          ],
        },
        {
          heading: '§4 Payment',
          content: [
            '1. The Customer can make payment:',
            '• Cash on delivery',
            '• Card payment on delivery',
            '• Online bank transfer',
            '2. The Restaurant issues a fiscal receipt or VAT invoice at the Customer\'s request.',
          ],
        },
        {
          heading: '§5 Delivery',
          content: [
            '1. The Restaurant offers delivery of orders in Warsaw.',
            '2. Delivery costs and conditions are specified in the "Delivery" section.',
            '3. Personal pickup of orders is possible at the Restaurant at Solec 46.',
          ],
        },
        {
          heading: '§6 Withdrawal from Contract',
          content: [
            '1. Due to the nature of the products offered (food), the right to withdraw from the contract does not apply.',
            '2. The Customer may cancel the order before its execution begins by contacting the Restaurant.',
          ],
        },
        {
          heading: '§7 Complaints',
          content: [
            '1. Complaints regarding the quality of Goods should be reported immediately after receipt.',
            '2. Complaints can be submitted:',
            '• By phone: +48 732 607 102',
            '• By email: admin@solec46.com',
            '3. The Restaurant processes complaints within 14 days from the date of receipt.',
          ],
        },
        {
          heading: '§8 Final Provisions',
          content: [
            '1. In matters not regulated by these Terms and Conditions, Polish law applies, in particular the Civil Code.',
            '2. The Restaurant reserves the right to change the Terms and Conditions. Changes take effect 14 days after their publication on the Website.',
            '3. Any disputes arising from the implementation of the provisions of these Terms and Conditions shall be resolved by the court having jurisdiction over the Restaurant\'s registered office.',
          ],
        },
      ],
    },
    delivery: {
      title: 'Delivery',
      sections: [
        {
          heading: 'Delivery Zones',
          content: [
            'Murena Seafood Restaurant delivery covers the following areas in Warsaw:',
            '• City Center (Śródmieście)',
            '• Mokotów',
            '• Ochota',
            '• Wola',
            '• Żoliborz',
            'You can check delivery availability for your specific address by contacting us by phone or through partner platforms.',
          ],
        },
        {
          heading: 'Delivery Costs',
          content: [
            'Delivery cost regulates by Delivery providers or self-pickup',
          ],
        },
        {
          heading: 'Delivery Hours',
          content: [
            'We deliver during the following hours:',
            '• Sunday – Thursday: 17:00 – 22:00',
            '• Friday – Saturday: 17:00 – 22:00',
            'We accept orders until 22:00.',
            'Delivery time is usually 45-60 minutes from order confirmation.',
          ],
        },
        {
          heading: 'How to Order',
          content: [
            'You can place a delivery order in several ways:',
            '1. By phone: +48 732 607 102',
            '2. Through our website: murenasushi.pl',
            '3. Through partner apps:',
            '   • Wolt',
            '   • Glovo',
          ],
        },
        {
          heading: 'Payment Methods',
          content: [
            'For delivery, we accept the following forms of payment:',
            '• Cash on delivery',
            '• Card payment with courier (payment terminal)',
            '• Online payment (prepayment)',
            'For orders through partner platforms – payment according to the platform\'s rules.',
          ],
        },
        {
          heading: 'Pickup',
          content: [
            'We also offer the possibility of personal pickup at our restaurant:',
            'Address: Solec 46, 00-384 Warsaw',
            'Personal pickup of orders is free of charge.',
            'For personal pickup, please confirm order readiness by phone or message.',
          ],
        },
        {
          heading: 'Packaging and Transport',
          content: [
            'All our dishes are carefully packed in specialized packaging ensuring:',
            '• Maintenance of proper temperature',
            '• Aesthetic appearance of dishes',
            '• Safety during transport',
            'Each order includes a set of disposable cutlery, chopsticks, wasabi, ginger, and soy sauce.',
          ],
        },
      ],
    },
  },
  ua: {
    terms: {
      title: 'Політика конфіденційності',
      sections: [
        {
          heading: 'Загальна інформація',
          content: [
            'Ця Політика конфіденційності визначає правила обробки та захисту персональних даних, наданих Користувачами у зв\'язку з використанням послуг через веб-сайт Murena Seafood Restaurant.',
            'Адміністратором персональних даних, зібраних через веб-сайт, є Murena Seafood Restaurant за адресою: Solec 46, 00-384 Варшава.',
            'З Адміністратором можна зв\'язатися електронною поштою: admin@solec46.com або по телефону +48 732 607 102.',
          ],
        },
        {
          heading: 'Види оброблюваних даних',
          content: [
            'Адміністратор обробляє такі категорії персональних даних Користувачів:',
            '• Ідентифікаційні дані (ім\'я, прізвище)',
            '• Контактні дані (адреса електронної пошти, номер телефону)',
            '• Адресні дані (адреса доставки)',
            '• Дані про замовлення та історію покупок',
            '• Дані про використання Сайту (файли cookies)',
          ],
        },
        {
          heading: 'Цілі та правові підстави обробки',
          content: [
            'Персональні дані Користувачів обробляються з метою:',
            '1. Виконання замовлень, розміщених через веб-сайт (правова підстава: виконання договору)',
            '2. Ведення кореспонденції з Користувачами (правова підстава: законний інтерес Адміністратора)',
            '3. Прямий маркетинг продуктів і послуг (правова підстава: законний інтерес Адміністратора або згода)',
            '4. Пред\'явлення претензій або захист від претензій (правова підстава: законний інтерес Адміністратора)',
            '5. Виконання юридичних зобов\'язань Адміністратора (правова підстава: юридичне зобов\'язання)',
          ],
        },
        {
          heading: 'Передача даних',
          content: [
            'Персональні дані можуть передаватися таким категоріям одержувачів:',
            '• Постачальникам кур\'єрських та транспортних послуг',
            '• Постачальникам систем електронних платежів',
            '• Постачальникам IT-послуг та хостингу',
            '• Державним органам на підставі чинного законодавства',
          ],
        },
        {
          heading: 'Термін зберігання даних',
          content: [
            'Персональні дані зберігаються протягом періоду, необхідного для досягнення вищезазначених цілей, а після цього протягом періоду та в обсязі, передбаченому законом.',
          ],
        },
        {
          heading: 'Права Користувача',
          content: [
            'Користувач має право:',
            '• Доступу до своїх персональних даних',
            '• Виправлення даних',
            '• Видалення даних',
            '• Обмеження обробки',
            '• Переносимості даних',
            '• Заперечення проти обробки',
            '• Відкликання згоди у будь-який момент',
            '• Подання скарги до наглядового органу (Голова Управління захисту персональних даних)',
          ],
        },
        {
          heading: 'Файли Cookies',
          content: [
            'Веб-сайт використовує файли cookies для забезпечення належного функціонування сайту та покращення якості послуг.',
            'Користувач може в будь-який момент змінити налаштування щодо файлів cookies у своєму веб-браузері.',
          ],
        },
      ],
    },
    regulamin: {
      title: 'Правила',
      sections: [
        {
          heading: '§1 Загальні положення',
          content: [
            '1. Ці Правила регулюють використання веб-сайту та правила розміщення замовлень у Murena Seafood Restaurant.',
            '2. Адміністратором веб-сайту та постачальником послуг є Murena Seafood Restaurant за адресою: Solec 46, 00-384 Варшава.',
            '3. Зв\'язатися з рестораном можна по телефону +48 732 607 102 або електронною поштою: admin@solec46.com.',
            '4. Умовою використання веб-сайту є ознайомлення з цими Правилами та їх прийняття.',
          ],
        },
        {
          heading: '§2 Визначення',
          content: [
            '• Веб-сайт – інтернет-сервіс, доступний за адресою murenasushi.pl',
            '• Користувач – особа, яка використовує веб-сайт',
            '• Клієнт – особа, яка розміщує замовлення',
            '• Замовлення – заява про наміри Клієнта, спрямована на укладення договору купівлі-продажу',
            '• Договір – договір купівлі-продажу, укладений між Клієнтом та Рестораном',
            '• Товар – продукція, яку пропонує Ресторан',
          ],
        },
        {
          heading: '§3 Розміщення замовлень',
          content: [
            '1. Замовлення можна розмістити:',
            '• По телефону +48 732 607 102',
            '• Через веб-сайт',
            '• Через платформи партнерів (Wolt, Glovo)',
            '2. Усі ціни на веб-сайті є брутто-цінами в польських злотих.',
            '3. Ресторан залишає за собою право відмовити у виконанні замовлення, якщо його неможливо виконати.',
            '4. Час виконання замовлення визначається індивідуально кожного разу та повідомляється Клієнту.',
          ],
        },
        {
          heading: '§4 Оплата',
          content: [
            '1. Клієнт може здійснити оплату:',
            '• Готівкою при отриманні',
            '• Карткою при отриманні',
            '• Банківським переказом онлайн',
            '2. Ресторан видає фіскальний чек або рахунок-фактуру ПДВ на прохання Клієнта.',
          ],
        },
        {
          heading: '§5 Доставка',
          content: [
            '1. Ресторан пропонує доставку замовлень у Варшаві.',
            '2. Вартість та умови доставки вказані в розділі "Доставка".',
            '3. Особисте отримання замовлень можливе у ресторані за адресою Solec 46.',
          ],
        },
        {
          heading: '§6 Відмова від договору',
          content: [
            '1. У зв\'язку з характером продукції, що пропонується (харчові продукти), право на відмову від договору не поширюється.',
            '2. Клієнт може скасувати замовлення до початку його виконання, зв\'язавшись з Рестораном.',
          ],
        },
        {
          heading: '§7 Скарги',
          content: [
            '1. Скарги щодо якості Товарів слід подавати негайно після їх отримання.',
            '2. Скарги можна подати:',
            '• По телефону: +48 732 607 102',
            '• Електронною поштою: admin@solec46.com',
            '3. Ресторан розглядає скарги протягом 14 днів з дати їх отримання.',
          ],
        },
        {
          heading: '§8 Заключні положення',
          content: [
            '1. У питаннях, не врегульованих цими Правилами, застосовується польське законодавство, зокрема Цивільний кодекс.',
            '2. Ресторан залишає за собою право змінювати Правила. Зміни набувають чинності через 14 днів після їх публікації на веб-сайті.',
            '3. Будь-які спори, що виникають у результаті виконання положень цих Правил, вирішуються судом за місцезнаходженням зареєстрованого офісу Ресторану.',
          ],
        },
      ],
    },
    delivery: {
      title: 'Доставка',
      sections: [
        {
          heading: 'Зони доставки',
          content: [
            'Доставка Murena Seafood Restaurant охоплює наступні райони Варшави:',
            '• Центр міста (Śródmieście)',
            '• Мокотів',
            '• Охота',
            '• Воля',
            '• Жолібож',
            'Ви можете перевірити наявність доставки за вашою конкретною адресою, зв\'язавшись з нами по телефону або через платформи партнерів.',
          ],
        },
        {
          heading: 'Вартість доставки',
          content: [
            'Вартість доставки регулюється постачальниками доставки або самовивезенням',
          ],
        },
        {
          heading: 'Години доставки',
          content: [
            'Ми доставляємо у наступні години:',
            '• Неділя – Четвер: 17:00 – 22:00',
            '• П\'ятниця – Субота: 17:00 – 22:00',
            'Приймаємо замовлення до 22:00.',
            'Час доставки зазвичай становить 45-60 хвилин з моменту підтвердження замовлення.',
          ],
        },
        {
          heading: 'Як замовити',
          content: [
            'Ви можете зробити замовлення з доставкою кількома способами:',
            '1. По телефону: +48 732 607 102',
            '2. Через наш веб-сайт: murenasushi.pl',
            '3. Через додатки партнерів:',
            '   • Wolt',
            '   • Glovo',
          ],
        },
        {
          heading: 'Способи оплати',
          content: [
            'При доставці ми приймаємо наступні форми оплати:',
            '• Готівка при отриманні',
            '• Оплата карткою у кур\'єра (платіжний термінал)',
            '• Онлайн-оплата (передоплата)',
            'При замовленнях через платформи партнерів – оплата відповідно до правил платформи.',
          ],
        },
        {
          heading: 'Самовивіз',
          content: [
            'Ми також пропонуємо можливість особистого отримання замовлення в нашому ресторані:',
            'Адреса: Solec 46, 00-384 Варшава',
            'Особисте отримання замовлень безкоштовне.',
            'При особистому отриманні просимо підтвердити готовність замовлення по телефону або повідомленням.',
          ],
        },
        {
          heading: 'Упаковка та транспортування',
          content: [
            'Усі наші страви ретельно упаковані у спеціалізовану упаковку, що забезпечує:',
            '• Підтримку належної температури',
            '• Естетичний вигляд страв',
            '• Безпеку під час транспортування',
            'До кожного замовлення додається набір одноразового посуду, палички, васабі, імбир та соєвий соус.',
          ],
        },
      ],
    },
  },
  ru: {
    terms: {
      title: 'Политика конфиденциальности',
      sections: [
        {
          heading: 'Общая информация',
          content: [
            'Настоящая Политика конфиденциальности определяет правила обработки и защиты персональных данных, предоставленных Пользователями в связи с использованием услуг через веб-сайт Murena Seafood Restaurant.',
            'Администратором персональных данных, собранных через веб-сайт, является Murena Seafood Restaurant по адресу: Solec 46, 00-384 Варшава.',
            'С Администратором можно связаться по электронной почте: admin@solec46.com или по телефону +48 732 607 102.',
          ],
        },
        {
          heading: 'Виды обрабатываемых данных',
          content: [
            'Администратор обрабатывает следующие категории персональных данных Пользователей:',
            '• Идентификационные данные (имя, фамилия)',
            '• Контактные данные (адрес электронной почты, номер телефона)',
            '• Адресные данные (адрес доставки)',
            '• Данные о заказах и истории покупок',
            '• Данные об использовании Сайта (файлы cookies)',
          ],
        },
        {
          heading: 'Цели и правовые основания обработки',
          content: [
            'Персональные данные Пользователей обрабатываются с целью:',
            '1. Выполнения заказов, размещенных через веб-сайт (правовое основание: исполнение договора)',
            '2. Ведения переписки с Пользователями (правовое основание: законный интерес Администратора)',
            '3. Прямого маркетинга продуктов и услуг (правовое основание: законный интерес Администратора или согласие)',
            '4. Предъявления претензий или защиты от претензий (правовое основание: законный интерес Администратора)',
            '5. Выполнения юридических обязательств Администратора (правовое основание: юридическое обязательство)',
          ],
        },
        {
          heading: 'Передача данных',
          content: [
            'Персональные данные могут передаваться следующим категориям получателей:',
            '• Поставщикам курьерских и транспортных услуг',
            '• Поставщикам систем электронных платежей',
            '• Поставщикам IT-услуг и хостинга',
            '• Государственным органам на основании действующего законодательства',
          ],
        },
        {
          heading: 'Срок хранения данных',
          content: [
            'Персональные данные хранятся в течение периода, необходимого для достижения вышеуказанных целей, а после этого в течение периода и в объеме, предусмотренном законом.',
          ],
        },
        {
          heading: 'Права Пользователя',
          content: [
            'Пользователь имеет право:',
            '• Доступа к своим персональным данным',
            '• Исправления данных',
            '• Удаления данных',
            '• Ограничения обработки',
            '• Переносимости данных',
            '• Возражения против обработки',
            '• Отзыва согласия в любое время',
            '• Подачи жалобы в надзорный орган (Председатель Управления защиты персональных данных)',
          ],
        },
        {
          heading: 'Файлы Cookies',
          content: [
            'Веб-сайт использует файлы cookies для обеспечения надлежащего функционирования сайта и улучшения качества услуг.',
            'Пользователь может в любое время изменить настройки относительно файлов cookies в своем веб-браузере.',
          ],
        },
      ],
    },
    regulamin: {
      title: 'Правила',
      sections: [
        {
          heading: '§1 Общие положения',
          content: [
            '1. Настоящие Правила регулируют использование веб-сайта и правила размещения заказов в Murena Seafood Restaurant.',
            '2. Администратором веб-сайта и поставщиком услуг является Murena Seafood Restaurant по адресу: Solec 46, 00-384 Варшава.',
            '3. Связаться с рестораном можно по телефону +48 732 607 102 или электронной почте: admin@solec46.com.',
            '4. Условием использования веб-сайта является ознакомление с настоящими Правилами и их принятие.',
          ],
        },
        {
          heading: '§2 Определения',
          content: [
            '• Веб-сайт – интернет-сервис, доступный по адресу murenasushi.pl',
            '• Пользователь – лицо, использующее веб-сайт',
            '• Клиент – лицо, размещающее заказ',
            '• Заказ – заявление о намерениях Клиента, направленное на заключение договора купли-продажи',
            '• Договор – договор купли-продажи, заключенный между Клиентом и Рестораном',
            '• Товар – продукция, предлагаемая Рестораном',
          ],
        },
        {
          heading: '§3 Размещение заказов',
          content: [
            '1. Заказы можно разместить:',
            '• По телефону +48 732 607 102',
            '• Через веб-сайт',
            '• Через платформы партнеров (Wolt, Glovo)',
            '2. Все цены на веб-сайте являются брутто-ценами в польских злотых.',
            '3. Ресторан оставляет за собой право отказать в выполнении заказа, если его невозможно выполнить.',
            '4. Время выполнения заказа определяется индивидуально каждый раз и сообщается Клиенту.',
          ],
        },
        {
          heading: '§4 Оплата',
          content: [
            '1. Клиент может осуществить оплату:',
            '• Наличными при получении',
            '• Картой при получении',
            '• Банковским переводом онлайн',
            '2. Ресторан выдает фискальный чек или счет-фактуру НДС по просьбе Клиента.',
          ],
        },
        {
          heading: '§5 Доставка',
          content: [
            '1. Ресторан предлагает доставку заказов в Варшаве.',
            '2. Стоимость и условия доставки указаны в разделе "Доставка".',
            '3. Личное получение заказов возможно в ресторане по адресу Solec 46.',
          ],
        },
        {
          heading: '§6 Отказ от договора',
          content: [
            '1. В связи с характером предлагаемой продукции (пищевые продукты), право на отказ от договора не распространяется.',
            '2. Клиент может отменить заказ до начала его выполнения, связавшись с Рестораном.',
          ],
        },
        {
          heading: '§7 Жалобы',
          content: [
            '1. Жалобы относительно качества Товаров следует подавать немедленно после их получения.',
            '2. Жалобы можно подать:',
            '• По телефону: +48 732 607 102',
            '• По электронной почте: admin@solec46.com',
            '3. Ресторан рассматривает жалобы в течение 14 дней с даты их получения.',
          ],
        },
        {
          heading: '§8 Заключительные положения',
          content: [
            '1. В вопросах, не урегулированных настоящими Правилами, применяется польское законодательство, в частности Гражданский кодекс.',
            '2. Ресторан оставляет за собой право изменять Правила. Изменения вступают в силу через 14 дней после их публикации на веб-сайте.',
            '3. Любые споры, возникающие в результате выполнения положений настоящих Правил, разрешаются судом по месту нахождения зарегистрированного офиса Ресторана.',
          ],
        },
      ],
    },
    delivery: {
      title: 'Доставка',
      sections: [
        {
          heading: 'Зоны доставки',
          content: [
            'Доставка Murena Seafood Restaurant охватывает следующие районы Варшавы:',
            '• Центр города (Śródmieście)',
            '• Мокотув',
            '• Охота',
            '• Воля',
            '• Жолибож',
            'Вы можете проверить наличие доставки по вашему конкретному адресу, связавшись с нами по телефону или через платформы партнеров.',
          ],
        },
        {
          heading: 'Стоимость доставки',
          content: [
            'Стоимость доставки регулируется поставщиками доставки или самовывозом',
          ],
        },
        {
          heading: 'Часы доставки',
          content: [
            'Мы доставляем в следующие часы:',
            '• Воскресенье – Четверг: 17:00 – 22:00',
            '• Пятница – Суббота: 17:00 – 22:00',
            'Принимаем заказы до 22:00.',
            'Время доставки обычно составляет 45-60 минут с момента подтверждения заказа.',
          ],
        },
        {
          heading: 'Как заказать',
          content: [
            'Вы можете сделать заказ с доставкой несколькими способами:',
            '1. По телефону: +48 732 607 102',
            '2. Через наш веб-сайт: murenasushi.pl',
            '3. Через приложения партнеров:',
            '   • Wolt',
            '   • Glovo',
          ],
        },
        {
          heading: 'Способы оплаты',
          content: [
            'При доставке мы принимаем следующие формы оплаты:',
            '• Наличные при получении',
            '• Оплата картой у курьера (платежный терминал)',
            '• Онлайн-оплата (предоплата)',
            'При заказах через платформы партнеров – оплата согласно правилам платформы.',
          ],
        },
        {
          heading: 'Самовывоз',
          content: [
            'Мы также предлагаем возможность личного получения заказа в нашем ресторане:',
            'Адрес: Solec 46, 00-384 Варшава',
            'Личное получение заказов бесплатное.',
            'При личном получении просим подтвердить готовность заказа по телефону или сообщением.',
          ],
        },
        {
          heading: 'Упаковка и транспортировка',
          content: [
            'Все наши блюда тщательно упакованы в специализированную упаковку, обеспечивающую:',
            '• Поддержание надлежащей температуры',
            '• Эстетичный вид блюд',
            '• Безопасность во время транспортировки',
            'К каждому заказу прилагается набор одноразовой посуды, палочки, васаби, имбирь и соевый соус.',
          ],
        },
      ],
    },
  },
};
