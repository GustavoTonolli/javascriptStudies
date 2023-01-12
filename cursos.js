// const carros = ['polo', 'gol', 'fiat']

// export { cursos, carros, getCurso } // exportando cursos e carros para modulo
// export { carros } // exportando carros para module

// exportacoes padroes com export default function
// exportacoes ou importacoes nomeadas

// function getCurso(c) {
//     return cursos[c];
// }

class Cursos {
    static cursos = ['Javascript', 'Html', 'CSS', 'JSON', 'NODEJS', 'C#'];
    constructor() { }
    static getTodosCursos = () => {
        return this.cursos;
    }
    static getCurso = (i_curso) => {
        return this.cursos[i_curso];
    }
    static addCursos = (novo_curso) => {
        this.cursos.push(novo_curso);
    }
    static apagarCursos = () => {
        this.cursos = [];
    }
}
export default Cursos;