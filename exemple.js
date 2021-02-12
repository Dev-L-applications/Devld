let ville = "paris";
temperatureVille(ville);

function temperatureVille(ville) {

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=0b38a31d01de0a9eb4fead31ba37924a&units=metric'


let requete = new XMLHttpRequest(); // Créer un objet
    requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètre : url
    requete.responseType = 'json'; // Nous attendons du JSON
    requete.send(); // Nous envoyons notre requête

    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200) {
                let reponse = requete.response; // on stocke la réponse

                let ville       = reponse.name;
                let temperature = reponse.main.temp;
                let humidite    = reponse.main.humidity;
                let vent        = reponse.wind.speed;
                let ciel        = reponse.weather[0].description;

                //console.log(ville);
                //console.log(temperature);
                //console.log(reponse);
                document.querySelector('#ville').textContent = ville;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#temperature_humidite').textContent = humidite;
                document.querySelector('#temps').textContent = vent;
                document.querySelector('#ciel').textContent = ciel;

            }
            else{
                alert("Un problème est survenu, merci de revenir plus tard.");
            }  
        }
    }
}

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
    ville = prompt('Renseignez la ville que vous souhaitez voir.');
    temperatureVille(ville);
});