const buttonExplore= document.querySelector('#explore');
const buttonFollowing= document.querySelector('#following');
const btnSubmitTweet = document.querySelector('.button');

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