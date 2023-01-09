// COnverter obj to json and json to obj

const pessoa = {
    nome: "Gustavo",
    canal: "CFB CURSOS",
    curso: "JavaScript",
    aulas: {
        aula01: "Introducao",
        aula02: "Outra aula",
        aula03: "Fim"
    }
}

const objToJson = JSON.stringify(pessoa); // stringify converte de obj para json
const jsonToObj = JSON.parse(objToJson) // parse converte json para obj
console.log(objToJson)
console.log(jsonToObj)