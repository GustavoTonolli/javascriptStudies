const cursos = ['Javascript', 'Html', 'CSS', 'JSON', 'NODEJS', 'C#'];
const carros = ['polo', 'gol', 'fiat']

export { cursos, carros, getCurso } // exportando cursos e carros para modulo
// export { carros } // exportando carros para modules

export default function getTodosCursos() { // posso ter apenas um metodo padrao por arquivo
    return carros + cursos
}

// exportacoes ou importacoes nomeadas

function getCurso(c) {
    return cursos[c];
}