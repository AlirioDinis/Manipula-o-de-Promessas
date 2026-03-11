//Criando uma promessa commun simulando uma busca usuário em uma lista por ex. 

const myPromise = new Promise ((resolve, rejected) => {
    const nome = 'Alírio'

    if (nome === 'Alírio') {
        resolve('Usuário '+nome+' encontrado!')
    } else {
    rejected('Usuário '+nome+' não encontrado!')
    }
})
myPromise.then ((data) => {
    console.log(data);
})

//Encadeamento de .then()

const myPromise2 = new Promise ((resolve, rejected) => {
    const nome = 'Matheus'

    if (nome === 'Matheus') {
        resolve('Usuário Matheus encontrado!')
    } else {
        rejected('O Usuário Matheus não foi encontrado')
    }
})

myPromise2
.then ((data) => {
    //Transforma o nosso output em minúsculo
    return data.toLowerCase()
})
.then ((stringModificada) => {
    console.log(stringModificada)
})

//Metódo .catch()

const myPromise3 = new Promise ((resolve, rejected) => {
    const nome = 'Alírio'

    if (nome === 'Matheus') {
        resolve('Usuário encontrado!')
    } else {
        rejected('Usuário não encontrado')
    }
})

myPromise3
.then ((data) => {
    console.log(data);
})
.catch((err) => {
    console.log('Aconteceu um erro: '+err)
})

//Resolve várias promessas

const p1 = new Promise ((resolve, rejected) => {
    setTimeout(() => {
        resolve('P1 ok! TIMEOUT')
    }, 2000);
})
   
const p2 = new Promise ((resolve, rejected) => {
    resolve('P2 ok!')
})

const p3 = new Promise ((resolve, rejected) => {
    resolve('P3 ok!')
})

const resolveALL = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('Depois do all()')