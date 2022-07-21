

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Storage from './global/storage';
// import global from './global/config'

// import commonRu from './assets/locales/en.json'
// import commonEn from './assets/locales/en.json'

export const COOKIES_LANGUAGE = 'cookies_language';
const resources = {
  en: {
    translation: {
      "Coin": "FIO",
      "PartnerName": "fio",
      "MainCrypto": "Buy $t(Coin) with Credit or Debit Card",
      "MainTroubles": "In case you face any troubles please send a message to our",
      "MainSupport": "live support",
      "MainSupportOne": "* The rate shown is just an approximation and it is slightly less than what is actually sent.",
      "MainSupportTwo": "Therefore, most likely the amount received will be higher than what is disclosed in this field",
      "MainSupportTree": "** Please note we do not allow purchases from USA and other restricted countries",
      "InfoTextOne": "The first transaction should not exceed $500",
      "InfoTextTwo": "You must pass verification on your first purchase, including Selfie, picture of document and proof of address",
      "InfoTextTree": "Make sure your bank card support 3D-secure",
      "Buy": "Buy",
      "BuyFrom": "From",
      "BuyTo": "To",
      "BuyAmount": "Amount",
      "BuyYouGet": "You Get",
      "BuyAddress": "address",
      "BuyEnterAddress": "Please Enter Your $t(Coin) wallet address.",
      "BuyEnterEmail": "Please Enter Your Email.",
      "BuyIncorrectEmail": "Incorrect Email.",
      "BuyAmountMore": "The amount must be more than 50 $",
      "BuyYouEmail": "Your real email address.",
      "BuyYouAddress": "Your $t(Coin) wallet address",
    }
  },
  ru: {
    translation: {
      "Coin": "FIO",
      "PartnerName": "fio",
      "MainCrypto": "Купите $t(Coin) с помощью банковской карты",
      "MainTroubles": "Если у вас возникнут проблемы, отправьте сообщение в нашу",
      "MainSupport": "службу поддержки",
      "MainSupportOne": "* Указанная скорость является приблизительной и немного меньше фактически отправленной.",
      "MainSupportTwo": "Поэтому, скорее всего, полученная сумма будет выше, чем указано в этом поле.",
      "MainSupportTree": "** Обратите внимание, что мы не принимаем покупки из США и других стран с ограниченным доступом.",
      "InfoTextOne": "Первая транзакция не должна превышать 500 долларов.",
      "InfoTextTwo": "При первой покупке вы должны пройти верификацию, включая селфи, фотографию документа и подтверждение адреса.",
      "InfoTextTree": "Убедитесь, что ваша банковская карта поддерживает 3D-secure",
      "Buy": "Купить",
      "BuyFrom": "Из",
      "BuyTo": "В",
      "BuyAmount": "Количество",
      "BuyYouGet": "Вы получите",
      "BuyAddress": "адрес",
      "BuyEnterAddress": "Пожалуйста, введите адрес вашего кошелька $t(Coin).",
      "BuyEnterEmail": "Пожалуйста, введите свой адрес электронной почты.",
      "BuyIncorrectEmail": "Неверный почтовый ящик.",
      "BuyAmountMore": "Сумма должна быть больше 50 $",
      "BuyYouEmail": "Ваша электронная почта",
      "BuyYouAddress": "Адрес вашего кошелька $t(Coin)",
    }
  },
  it: {
    translation: {
      "Coin": "FIO",
      "PartnerName": "fio",
      "MainCrypto": "Acquista $t(Coin) con carta di credito o di debito",
      "MainTroubles": "In caso di problemi si prega di inviare un messaggio al nostro",
      "MainSupport": "supporto dal vivo",
      "MainSupportOne": "* La tariffa mostrata è solo un'approssimazione ed è leggermente inferiore a quella effettivamente inviata.",
      "MainSupportTwo": "Pertanto, molto probabilmente l'importo ricevuto sarà superiore a quanto divulgato in questo campo",
      "MainSupportTree": "** Si prega di notare che non sono consentiti acquisti dagli Stati Uniti e da altri paesi soggetti a restrizioni",
      "InfoTextOne": "La prima transazione non deve superare i $500",
      "InfoTextTwo": "Devi superare la verifica sul tuo primo acquisto, inclusi selfie, foto del documento e prova di indirizzo",
      "InfoTextTree": "Assicurati che la tua carta di credito supporti 3D-secure",
      "Buy": "Acquistare",
      "BuyFrom": "A partire dal",
      "BuyTo": "Per",
      "BuyAmount": "Quantità",
      "BuyYouGet": "Ottieni",
      "BuyAddress": "indirizzo",
      "BuyEnterAddress": "Inserisci l'indirizzo del tuo portafoglio $t(Coin).",
      "BuyEnterEmail": "Inserisci la tua email.",
      "BuyIncorrectEmail": "Email errata.",
      "BuyAmountMore": "L'importo deve essere superiore a 50 $",
      "BuyYouEmail": "Il tuo vero indirizzo email.",
      "BuyYouAddress": "Il tuo indirizzo di portafoglio $t(Coin)",
    }
  },
  es: {
    translation: {
      "Coin": "FIO",
      "PartnerName": "fio",
      "MainCrypto": "Compre $t(Coin) con tarjeta de crédito o débito",
      "MainTroubles": "En caso de que tenga algún problema, envíe un mensaje a nuestro",
      "MainSupport": "soporte vital",
      "MainSupportOne": "* La tasa que se muestra es solo una aproximación y es un poco menor que la que se envía realmente",
      "MainSupportTwo": "Por tanto, lo más probable es que la cantidad recibida sea superior a la divulgada en este campo",
      "MainSupportTree": "** Tenga en cuenta que no permitimos compras en EE. UU. Y otros países restringidos",
      "InfoTextOne": "La primera transacción no debe exceder los $ 500",
      "InfoTextTwo": "Debes aprobar la verificación en tu primera compra, incluida una selfie, una foto del documento y un comprobante de domicilio",
      "InfoTextTree": "Asegúrese de que su tarjeta bancaria sea compatible con 3D-secure",
      "Buy": "Comprar",
      "BuyFrom": "De",
      "BuyTo": "Para",
      "BuyAmount": "Monto",
      "BuyYouGet": "Usted obtiene",
      "BuyAddress": "Dirección",
      "BuyEnterAddress": "Ingrese la dirección de su billetera $t(Coin).",
      "BuyEnterEmail": "Por favor introduzca su correo electrónico.",
      "BuyIncorrectEmail": "Email incorrecto.",
      "BuyAmountMore": "La cantidad debe ser superior a 50 $",
      "BuyYouEmail": "Tu dirección de correo electrónico real.",
      "BuyYouAddress": "Su dirección de billetera $t(Coin)",
    }
  },
  pt: {
    translation: {
      "Coin": "FIO",
      "PartnerName": "fio",
      "MainCrypto": "Compre $t(Coin) com cartão de crédito ou débito",
      "MainTroubles": "Caso você enfrente algum problema envie uma mensagem para o nosso",
      "MainSupport": "suporte ao vivo",
      "MainSupportOne": "* A taxa mostrada é apenas uma aproximação e é um pouco menor do que o que é realmente enviado.",      
      "MainSupportTwo": "Portanto, muito provavelmente o valor recebido será superior ao divulgado neste campo",      
      "MainSupportTree": "** Observe que não permitimos compras dos EUA e de outros países restritos", 
      "InfoTextOne": "A primeira transação não deve ultrapassar US $ 500",
      "InfoTextTwo": "Você deve passar na verificação em sua primeira compra, incluindo selfie, foto do documento e comprovante de endereço",      
      "InfoTextTree": "Certifique-se de que seu cartão bancário seja compatível com 3D-Secure",
      "Buy": "Comprar",
      "BuyFrom": "A partir de",
      "BuyTo": "Para",
      "BuyAmount": "Quantia",
      "BuyYouGet": "You Get",
      "BuyAddress": "Morada",
      "BuyEnterAddress": "Digite o endereço da carteira $t(Coin).",      
      "BuyEnterEmail": "Por favor introduza o seu e-mail.",      
      "BuyIncorrectEmail": "E-mail incorreto.",      
      "BuyAmountMore":"O valor deve ser superior a 50 $",      
      "BuyYouEmail": "Seu endereço de e-mail real.",      
      "BuyYouAddress": "Seu endereço de carteira $t(Coin)",  
    }
  },
  cz: {
    translation: {
      "Coin": "FIO",
      "PartnerName": "fio",
      "MainCrypto": "Nakupte $t(Coin) kreditní nebo debetní kartou",
      "MainTroubles": "Pokud narazíte na nějaké potíže, pošlete zprávu na naše",
      "MainSupport": "živá podpora",
      "MainSupportOne": "* Uvedená sazba je pouze přibližná a je o něco nižší než skutečně zasílaná.",
      "MainSupportTwo": "Proto bude přijatá částka s největší pravděpodobností vyšší než částka uvedená v tomto poli",
      "MainSupportTree": "** Upozorňujeme, že nepovolujeme nákupy z USA a dalších omezených zemí",
      "InfoTextOne": "První transakce by neměla přesáhnout 500 $",
      "InfoTextTwo": "Při prvním nákupu musíte projít ověřením, včetně selfie, obrázku dokumentu a dokladu o adrese",
      "InfoTextTree": "Ujistěte se, že vaše bankovní karta podporuje 3D-secure",
      "Buy": "Koupit",
      "BuyFrom": "Od",
      "BuyTo": "Komu",
      "BuyAmount": "Částka",
      "BuyYouGet": "Dostanete",
      "BuyAddress": "adresa",
      "BuyEnterAddress": "Zadejte adresu své peněženky $t(Coin).",
      "BuyEnterEmail": "Zadejte svůj e-mail.",
      "BuyIncorrectEmail": "Nesprávný e-mail.",
      "BuyAmountMore": "Částka musí být vyšší než 50 $",
      "BuyYouEmail": "Vaše skutečná e-mailová adresa.",
      "BuyYouAddress": "Adresa vaší peněženky $t(Coin)",
    }
  },
  fr: {
    translation: {
      "Coin": "FIO",
      "PartnerName": "fio",
      "MainCrypto": "Acheter $t(Coin) avec carte de crédit ou de débit",
      "MainTroubles": "Si vous rencontrez des problèmes, veuillez envoyer un message à notre",
      "MainSupport": "assistance en direct",
      "MainSupportOne": "* Le taux indiqué n'est qu'une approximation et il est légèrement inférieur à ce qui est réellement envoyé.",
      "MainSupportTwo": "Par conséquent, le montant reçu sera très probablement supérieur à ce qui est divulgué dans ce champ",
      "MainSupportTree": "** Veuillez noter que nous n'autorisons pas les achats depuis les États-Unis et d'autres pays restreints",
      "InfoTextOne": "La première transaction ne doit pas dépasser 500 $",
      "InfoTextTwo": "Vous devez réussir la vérification de votre premier achat, y compris Selfie, photo du document et justificatif de domicile",
      "InfoTextTree": "Assurez-vous que votre carte bancaire supporte le 3D-secure",
      "Buy":"Acheter",
      "BuyFrom": "De",
      "BuyTo": "À",
      "BuyAmount": "Montant",
      "BuyYouGet": "Vous obtenez",
      "BuyAddress": "adresse",
      "BuyEnterAddress": "Veuillez entrer votre adresse de portefeuille $t(Coin).",
      "BuyEnterEmail": "Veuillez entrer votre email.",
      "BuyIncorrectEmail": "Email incorrect.",
      "BuyAmountMore": "Le montant doit être supérieur à 50 $",
      "BuyYouEmail": "Votre véritable adresse e-mail.",
      "BuyYouAddress": "Votre adresse de portefeuille $t(Coin)",
    }
  },
  ro: {
    translation: {
      "Coin": "FIO",
      "PartnerName": "fio",
      "MainCrypto": "Cumpărați $t(Coin) cu card de credit sau debit",
      "MainTroubles": "În cazul în care întâmpinați probleme, vă rugăm să trimiteți un mesaj la noi",
      "MainSupport": "asistență live",
      "MainSupportOne": "* Rata afișată este doar o aproximare și este puțin mai mică decât cea trimisă de fapt.",
      "MainSupportTwo": "Prin urmare, cel mai probabil, suma primită va fi mai mare decât cea dezvăluită în acest câmp",
      "MainSupportTree": "** Vă rugăm să rețineți că nu permitem achiziții din SUA și alte țări cu restricții",
      "InfoTextOne": "Prima tranzacție nu trebuie să depășească 500 USD",
      "InfoTextTwo": "Trebuie să treci verificarea la prima achiziție, inclusiv Selfie, poza documentului și dovada adresei",
      "InfoTextTree": "Asigurați-vă că cardul dvs. bancar acceptă 3D-secure",
      "Buy": "Cumpără",
      "BuyFrom": "Din",
      "BuyTo": "La",
      "BuyAmount": "Cantitate",
      "BuyYouGet": "Primesti",
      "BuyAddress": "abordare",
      "BuyEnterAddress": "Vă rugăm să introduceți adresa portofelului dvs. $t(Coin).",
      "BuyEnterEmail": "Vă rugăm să introduceți adresa dvs. de e-mail.",
      "BuyIncorrectEmail": "E-mail incorect.",
      "BuyAmountMore": "Suma trebuie să fie mai mare de 50 USD",
      "BuyYouEmail": "Adresa ta de e-mail reală.",
      "BuyYouAddress": "Adresa portofelului dvs. $t(Coin)",
    }
  },
  de: {
    translation: {
      "Coin": "FIO",
      "PartnerName": "fio",
      "MainCrypto": "$t(Coin) mit Kredit- oder Debitkarte kaufen",
      "MainTroubles": "Bei Problemen senden Sie bitte eine Nachricht an unser",
      "MainSupport": "Live-Support",
      "MainSupportOne": "* Die angezeigte Rate ist nur ein Näherungswert und liegt etwas unter dem, was tatsächlich gesendet wird.",
      "MainSupportTwo": "Daher wird der erhaltene Betrag höchstwahrscheinlich höher sein als in diesem Feld angegeben",
      "MainSupportTree": "** Bitte beachten Sie, dass wir keine Einkäufe aus den USA und anderen eingeschränkten Ländern zulassen",
      "InfoTextOne": "Die erste Transaktion sollte $500 nicht überschreiten",
      "InfoTextTwo": "Sie müssen bei Ihrem ersten Einkauf die Verifizierung bestehen, einschließlich Selfie, Bild des Dokuments und Adressnachweis",
      "InfoTextTree": "Stellen Sie sicher, dass Ihre Bankkarte 3D-sicher unterstützt",
      "Buy": "Besorgen",
      "BuyFrom": "Von",
      "BuyTo": "Zu",
      "BuyAmount": "Betrag",
      "BuyYouGet": "Sie erhalten",
      "BuyAddress": "die Anschrift",
      "BuyEnterAddress": "Bitte geben Sie Ihre $t(Coin)-Wallet-Adresse ein.",
      "BuyEnterEmail": "Bitte geben Sie Ihre E-Mail ein.",
      "BuyIncorrectEmail": "Falsche E-Mail.",
      "BuyAmountMore": "Der Betrag muss mehr als 50 $ betragen",
      "BuyYouEmail": "Ihre echte E-Mail-Adresse.",
      "BuyYouAddress": "Ihre $t(Coin)-Wallet-Adresse",
    }
  },
};
const brouserLanguage = window.navigator.language.split('-')[0]
const acceptLanguage = ["en", "ru", "it", "es", "pt", "cz", "fr", "ro", "de"]
const storage = Storage.getInstance()
if (!storage.get(COOKIES_LANGUAGE)) {
  let lang = acceptLanguage.find((el) => {
    if (brouserLanguage == el) return true
    return false
  })
  storage.set(COOKIES_LANGUAGE, lang || "en");
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: storage.get(COOKIES_LANGUAGE),
    interpolation: {
      escapeValue: false
    }
  });
  export default i18n;