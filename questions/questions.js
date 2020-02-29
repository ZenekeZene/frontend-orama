export default [
  {
    declare: "¿Qué es la tag <a>?",
    img: "https://picsum.photos/300/300",
    options: [
      "Representa un elemento cliqueable de tipo botón",
      "Un HTMLLinkElement",
      "Un elemento HTML que crea un enlace",
      "Un elemento puramente estético"
    ],
    correctIndex: 2,
    author: "@zenekezene",
    categories: ["css"]
  },
  {
    declare: "Calcula la especificidad de este selector CSS:",
    declare2: {
      type: "code",
      lang: "css",
      value: `.settings p {
  margin: 1rem;
}`
    },
    options: ["21", "10", "11", "1"],
    correctIndex: 2,
    author: "@jorgefuente",
    categories: ["css"]
  },
  {
    declare: "¿Qué indica el atributo hreflang?",
    options: [
      "El lenguaje de la página actual",
      "El lenguaje humano del recurso al que se enlaza",
      "El idioma alternativo para lectores de webs"
    ],
    correctIndex: 1,
    author: "@zenekezene",
    categories: ["html"]
  },
  {
    declare:
      "Enseña en el alert el literal 'Jhon' extrayendo información del objeto `person`:",
    declare2: {
      type: "code",
      lang: "javascript",
      value: `const person = {
  firstName: "John",
  lastName: "Doe"
};

alert(          );`
    },
    options: ["person.firstName", "person", 'person["lasName"]', '"John"'],
    categories: ["js"],
    correctIndex: 0,
    seconds: 15
  }
];
