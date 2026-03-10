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