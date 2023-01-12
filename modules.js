// JavaScript com modulos
import { cursos as c, getCurso as gc } from "./cursos.js"; // importar arquivo de outro arquivo, as c nomeia o array carros 
import getTodosCursos from "./cursos.js"; // export como padrao nao precisa de chaves
import * as mcursos from "./cursos.js"; //importa tudo 

console.log(mcursos.carros);
console.log(mcursos.getCurso(0));
console.log(mcursos.default());

