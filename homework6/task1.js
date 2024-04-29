const translations = {
  en: {
    greet: "Hello",
    intro: "Welcome to our website"
  },
  fr: {
    greet: "Bonjour",
    intro: "Bienvenue sur notre site web"
  },
  es: {
    greet: "Hola",
    intro: "Bienvenido a nuestro sitio web"
  },
  de: {
    greet: "Hallo",
    intro: "Willkommen auf unserer Webseite"
  },
  pt: {
    greet: "Olá",
    intro: "Bem-vindo ao nosso site"
  },
  pl: {
    greet: "Cześć",
    intro: "Witaj na naszej stronie internetowej"
  }
};

function localize(strings, ...values) {
  const [lang,arg] = values
  return translations[lang][arg];
}

const language = 'pl';
const greeting = 'greet';
const introduction = 'intro';

const localizedGreeting = localize`${language}, ${greeting}`
const localizedIntroduction = localize`${language}, ${introduction}`

console.log(`${localizedGreeting}, ${localizedIntroduction}`)

