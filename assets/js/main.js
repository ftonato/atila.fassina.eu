(function(){
  'use strict';

  const localDomain = document.location.host;
  const page = document.location.pathname;

  function blogPostTemplate(post) {
    let postDate = new Date(post.pubDate).toDateString();

    return `<li class="homePost">
        <a class="homePost-link" href="${post.link}">
          <span class="homePost-date">${postDate}</span>
          <h3 class="homePost-title">${post.title}</h3>
        </a>
        <section class="homePost-excerpt">
          ${post.description}
        </section>
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
      // const url = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=https://medium.com/feed/@atilafassina"
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
    }).then((postList) => {
      let cachedPosts = '',
        ul = document.createElement('ul'),
        mediumWrap = document.querySelector('.mediumWrap');

      ul.classList.add('postList');


      postList.items.forEach(function(post) {
        cachedPosts += blogPostTemplate(post);
      });

      ul.innerHTML = cachedPosts;
      mediumWrap.appendChild(ul);

      setLinkTarget();
    }).catch((response) => {
      console.error(response);
    });

  } else {
    setLinkTarget();
  }
})();
