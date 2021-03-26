const avo = { atributo: 'A'}
const pai = { __proto__: avo, atributo: 'B'}
const filho = { __proto__: pai, atributo: 'C'}
 
