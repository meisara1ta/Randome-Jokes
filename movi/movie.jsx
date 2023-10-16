
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
let getJoke = () => {
  jokeContainer.classList.remove("fade");
fetch(url)
  .then(data => data.json())
  .then(item => {
    jokeContainer.textContent =`${item.joke}`;
    jokeContainer.classList.add("fade");
  });
}
btn.addEventListener("click", getJoke);
getJoke();


   /* console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ffda7c6378msh4e2a935e9779f38p12f93ejsn7887af339320',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};
*/
