axios.get('https://api.cryptonator.com/api/full/btc-usd')
.then(res => {
    console.log(res.data.ticker.price)
})
.catch(err => {
    console.log("ERROR!", err)
}) 

const fetchBitcoinPrice = async () => {
    try {
       const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd')
       console.log(res.data.ticker.price)
} catch(e) {
    console.log("error", e)
}
}

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(jokeText)
    jokes.append(newLI)


}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "No jokes available, sorry!"
    }
    
}

button.addEventListener('click', addNewJoke)
