const inputLanguage = document.getElementById("language")
const inputAmount = document.getElementById("amountJokes")
const jokesDivDetail = document.getElementById("jokeDetails")
const button = document.getElementById("searchBtn")

function searchJokes() {
    const jokeLanguage = inputLanguage.value.trim()
    const amountJokes = inputAmount.value.trim()
    jokeApi.getJokes(jokeLanguage, amountJokes).then((jokes) => {
        let jokesHtml = '';
        jokes.forEach((joke) => {
            jokesHtml += `
            <p><strong>Categoria:</strong> ${joke.category}</p>
            <p>${joke.setup}</p>
            <p>${joke.delivery}</p>`;
        })
        jokesDivDetail.innerHTML = jokesHtml;
    })
}

button.addEventListener('click', searchJokes)