// manipulacao de datas

// getDate() - Dia do mes
// getDay() - Dia da semana
// getFullYear() -  Ano com 4 digitos
// getHours() - Horas
// getMiliseconds() - Milisegundos
// getSeconds() - Segundos
// getMinutes() - Minutos
// getMonth() - Mes
// getTime() - Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00  UTC)
// Date.now() - Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00  UTC)
// getTimeZoneOffset() - Timezone da localidade
// setDate() - Define um dia do mes para a data
// setMonth() - Define um mes para a data
// setFullYear() - Define um ano para a data
// setMinutes() - Define minutos
// setHours() - Define horas
// setSeconds() - Define segundos
// setMiliseconds() - Define milisegundos
// toDateString() - retorna somente a data

// console.log(Date.now()) // time stamp sempre sera diferenca, nunca se repete
const data = new Date()
const data_r = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
console.log(data_r)
console.log(`Month : ${data.getMonth() + 1}`)

// Criando um Relogio 

