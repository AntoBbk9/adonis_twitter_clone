const buttonExplore= document.querySelector('#explore');
const buttonFollowing= document.querySelector('#following');
const btnSubmitTweet = document.querySelector('.button');

let page = 1;  // Page initiale
let loading = false;  // Indicateur de chargement
let noMoreTweets = false;  // Indicateur pour savoir s'il n'y a plus de tweets à charger

async function loadTweets() {
  if (loading || noMoreTweets) return;  // Ne pas charger si déjà en cours ou plus de tweets

  loading = true;
  document.getElementById('loading').style.display= 'block';  // Afficher l'indicateur de chargement

  try {
    const response = await fetch(`/tweets?page=${page}`);  // Appeler l'API pour récupérer les tweets
    const result = await response.json();  // Convertir la réponse en JSON
    const tweets = result.data;  // Obtenir les tweets

    if (tweets.length < 20) {  // Vérifier s'il y a moins de tweets que la limite
      noMoreTweets = true;  // Indiquer qu'il n'y a plus de tweets
    }

    const tweetsContainer = document.getElementById('scroller');
    tweets.forEach(tweet => {
      // Créer un nouvel élément pour chaque tweet et l'ajouter au conteneur
      const tweetElement = document.createElement('div');
      tweetElement.className = 'scroller_list';
      tweetElement.innerHTML = `
        <div>
          <p>${tweet.text}</p>
          <p>${tweet.username}</p>
          <p>${tweet.dateStr}</p>
        </div>
      `;
      tweetsContainer.appendChild(tweetElement);  // Ajouter l'élément au conteneur
    });

    page++;  // Passer à la prochaine page
  } catch (error) {
    console.error(error);  // Gérer les erreurs
  } finally {
    loading = false;  // Réinitialiser l'indicateur de chargement
    document.getElementById('loading').style.display = 'none';  // Cacher l'indicateur de chargement
  }
}

// Écouter l'événement de défilement pour charger plus de tweets lorsque nécessaire
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    loadTweets();
  }
});

// Charger les tweets lors du chargement initial de la page
document.addEventListener('DOMContentLoaded', () => {
  loadTweets();
});


const addClass = (element, className) => {
    element.classList.add(className);
  }
  const removeClass = (element, className) => {
    element.classList.remove(className);
  }
  buttonExplore.addEventListener('click', ()=>{
    if(buttonExplore.classList.contains('page-tab-active')) {
        removeClass(buttonExplore, 'page-tab-active');
        addClass(buttonFollowing, 'page-tab-active')
    }else{
        addClass(buttonExplore, 'page-tab-active');
        removeClass(buttonFollowing, 'page-tab-active');
    }
  });

  buttonFollowing.addEventListener('click', ()=>{
    if (buttonFollowing.classList.contains('page-tab-active')) {
        removeClass(buttonFollowing, 'page-tab-active');
        addClass(buttonExplore, 'page-tab-active');
        addClass(buttonFollowing, '.page-tab-disabled');

    }else{
        addClass(buttonFollowing, 'page-tab-active');
        removeClass(buttonExplore, 'page-tab-active');
    }
    });

  btnSubmitTweet.addEventListener('submit', function(e) {
    e.preventDefault();
    const tweetContent = document.querySelector('.tweet-editor-input').value;
    console.log('Tweet soumis:', tweetContent);
    document.querySelector('.tweet-editor-input').value = '';
  });