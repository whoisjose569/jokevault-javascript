const jokeApi = {}

function convertToJokeModel(jokeDetails) {
    const joke = new Joke()

    joke.category = jokeDetails.category;
    joke.setup = jokeDetails.setup;
    joke.delivery = jokeDetails.delivery;

    return joke
}



jokeApi.getJokes = (language = "en", amountJokes = "5") => {
    const url = `https://v2.jokeapi.dev/joke/Any?lang=${language}&type=twopart&amount=${amountJokes}`

    return fetch(url).then((response) => response.json()
        .then((data) => data.jokes.map(convertToJokeModel)
        ))
}