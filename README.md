# Front-end-ORAMA

Juego que consiste en responder a preguntas relacionadas con el desarrollo de software a nivel Front-End.

## Objetivos:

1. **Competitivo**: CUÁNTO sabes de esta materia.
2. **Viralidad**: compartir tu resultado.
3. Inmediatez.

## TODO:

- [x] Las explicaciones de las preguntas no tienen sentido si nuestro objetivo principal es la competitividad. Quitarlo.
- [x] Quitar el botón de 'Contestar'. Una vez que tocas, respondes. Queremos agilidad e inmediatez. No tiene sentido darle al usuario la capacidad de corregiar una respuesta. Quitarlo.
- [x] Hacer el ciclo correcto. Ruleta -> Pregunta -> Ruleta -> Pregunta -> N veces -> Resultado -> Compartir.
- [x] Quitar botón de Siguiente.
- [ ] Repasar el sideMenu component, pero esta lo suficientemente abstraido como para publicar un paquete con él. Puedo concatenar cosas en el \$el.style (asi no repetimos el transition)? Añadir tambien left y right. Y sobre la pagina o pulleado como ahora. Edit: He implementado lógica para estado inicial de colapsado (wasSidebarOpened, que persisten en local). Repensarlo para no comprometer la abstracción del component.
- [x] Integrar Firebase.
- [x] Firestore.
- [ ] Validar las props (empezar por RankingTable - numPlayers).
- [ ] Planteamiento de arquitectura con nuestro BASS (Firebase).
- [ ] Manipular el code que viene de Firebase para que se tabule correctamente.
- [ ] Traernos 50 preguntas (de todas las categorias) al principio? Traernos 5 de cada? Como hacer cuando se agoten de una categoria en concreto? ¿Cómo evitar que se repitan a lo largo del tiempo?

## Notas:

- Añadir código a 'Nueva pregunta' probablemente exiga Codemirror (Vue versión). [Ver referencia](https://github.com/gluons/vue-highlight.js/blob/docs/src/views/home/Demo.vue). Dejarlo para una segunda versión si acaso.
