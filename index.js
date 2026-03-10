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
