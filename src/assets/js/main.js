(function(){
  'use strict';

  const localDomain = document.location.host;
  const page = document.location.pathname;
  let otherPosts,
    moreBtn = document.querySelector('#moreBtn');

  function renderPosts(posts) {
    let cachedPosts = '',
        ul = document.createElement('ul'),
        mediumWrap = document.querySelector('.mediumWrap');

      if (posts.length > 5) {
        otherPosts = posts.slice(4);
        moreBtn.disabled = false;
      } else {
        otherPosts = undefined;
      }

      ul.classList.add('postList');

      posts.forEach(function(post, index) {
        if (index < 4) {
          cachedPosts += blogPostTemplate(post);
        }

      });

      ul.innerHTML = cachedPosts;
      mediumWrap.appendChild(ul);

      setLinkTarget();
  }

  function morePosts() {
    if(!otherPosts) return;
    moreBtn.disabled = true;

    renderPosts(otherPosts);
  }

  function blogPostTemplate(post) {
    function buildCategories(array) {
      const list = array.map( category => {
        return `<li class="homePost-tagItem">${category}</li>`
      })

      return list.join().replace(/,/g, '')
    }

    let postDate = new Date(post.pubDate).toDateString();
    debugger;
    return `<li class="homePost">
        <a class="homePost-link" href="${post.link}">
          <span class="homePost-date">${postDate}</span>
          <h3 class="homePost-title">${post.title}</h3>
        </a>
        <ul class="homePost-tagList">
          ${buildCategories(post.categories)}
        </ul>
      </li>`;
  };

  function setLinkTarget() {
    const allLinks = Array.from(document.querySelectorAll('a'));

    allLinks.forEach((element) => {
      element.href.includes(localDomain) ? element.target = '_self' : element.target = '_blank';
    });

  }

  if(page.includes('articles')) {
    let getPosts = new Promise((resolve, reject) => {
      let posts = new XMLHttpRequest();
      const url = "http://rss2json.com/api.json?rss_url=https://medium.com/feed/@atilafassina"

      posts.open("GET", url, true);

      posts.onreadystatechange = function () {
        if (posts.readyState === 4 && posts.status === 200) {
          resolve(JSON.parse(posts.response));
        } else if(posts.status !== 200) {
          reject(posts.response)
        }
      };

      posts.send();
    })
    .then((postList)=> { renderPosts(postList.items)})
    .catch((response) => {
      console.error(response);
    });

  } else {
    setLinkTarget();
  }

  moreBtn.addEventListener('click', morePosts, false);

})();
