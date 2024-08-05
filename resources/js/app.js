const buttonExplore= document.querySelector('#explore');
const buttonFollowing= document.querySelector('#following');
const btnSubmitTweet = document.querySelector('.button');

document.addEventListener('DOMContentLoaded', () => {
  const followButtons = document.querySelectorAll('.follow-btn');
  const unfollowButtons = document.querySelectorAll('.unfollow-btn');
  })

//   followButtons.forEach(button => {
//     // button.addEventListener('click', async () => {
//       const userId = button.getAttribute('data-user-id');
//       try {
//         await fetch('/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest',
//             'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
//           },
//           body: JSON.stringify({ userId }),
//         });
//         button.textContent = 'Se Désabonner';
//         button.classList.remove('follow-btn');
//         button.classList.add('unfollow-btn');
//       } catch (error) {
//         console.error('Erreur de suivi:', error);
//       }
//     });
//   });

//   unfollowButtons.forEach(button => {
//     button.addEventListener('click', async () => {
//       const userId = button.getAttribute('data-user-id');
//       try {
//         await fetch('/unfollow', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest',
//             'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
//           },
//           body: JSON.stringify({ userId }),
//         });
//         button.textContent = 'Suivre';
//         button.classList.remove('unfollow-btn');
//         button.classList.add('follow-btn');
//       } catch (error) {
//         console.error('Erreur de désabonnement:', error);
//       }
//     });
//   });
// });

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

