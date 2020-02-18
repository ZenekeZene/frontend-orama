export default [
  {
    title: "¿Qué lenguaje toca todo txus pero no lo sabe usar ni Perry?",
    options: ["XML", "CSS", "HTML", "JS"],
    correctIndex: 3,
    note: {
      description:
        "Es porque la gente denosta este lenguaje: <a href='http://www.google.es/' target='_BLANK'>Link</a>",
      embeds: [
        {
          type: "code",
          value: `
const foo = (a, b) => {
	return a + b;
}
				`
        }
      ]
    }
  },
  {
    title:
      "¿Qué lenguaje toca todo txus pero no lo sabe usar ni Perry? Ahora sin explicación",
    options: ["XML", "CSS", "HTML", "JS"],
    correctIndex: 1
  }
];
