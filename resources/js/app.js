const buttonExplore= document.querySelector('#explore');
const buttonFollowing= document.querySelector('#following');
console.log(buttonExplore);
console.log(buttonFollowing);

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
        removeClass(buttonExplore, 'page-tab-active')

    }else{
        addClass(buttonFollowing, 'page-tab-active');
        removeClass(buttonExplore, 'page-tab-active');
    }
  });

  buttonExplore.addEventListener('click', ()=>{
    if(buttonExplore.classList.contains('page-tab-disable')) {
        removeClass(buttonExplore, 'page-tab-disable');
        addClass(buttonFollowing, 'page-tab-disable')
    }else{
        addClass(buttonExplore, 'page-tab-disable');
        removeClass(buttonFollowing, 'page-tab-disable');
    }
  });

  buttonFollowing.addEventListener('click', ()=>{
    if (buttonFollowing.classList.contains('page-tab-disable')) {
        removeClass(buttonFollowing, 'page-tab-disable');
        removeClass(buttonExplore, 'page-tab-disable')

    }else{
        addClass(buttonFollowing, 'page-tab-disable');
        removeClass(buttonExplore, 'page-tab-disable');
    }
  });

  document.querySelector('.tweet-editor-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const tweetContent = document.querySelector('.tweet-editor-input').value;
    console.log('Tweet soumis:', tweetContent);
    document.querySelector('.tweet-editor-input').value = '';
  });