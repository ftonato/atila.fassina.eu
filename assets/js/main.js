'use strict';

(function () {
  'use strict';

  var localDomain = document.location.host;
  var page = document.location.pathname;

  function blogPostTemplate(post) {
    var postDate = new Date(post.pubDate).toDateString();

    return '<li class="homePost">\n        <a class="homePost-link" href="' + post.link + '">\n          <span class="homePost-date">' + postDate + '</span>\n          <h3 class="homePost-title">' + post.title + '</h3>\n        </a>\n        <section class="homePost-excerpt">\n          ' + post.description + '\n        </section>\n      </li>';
  };

  function setLinkTarget() {
    var allLinks = Array.from(document.querySelectorAll('a'));

    allLinks.forEach(function (element) {
      element.href.includes(localDomain) ? element.target = '_self' : element.target = '_blank';
    });
  }

  if (page.includes('articles')) {
    var getPosts = new Promise(function (resolve, reject) {
      var posts = new XMLHttpRequest();
      // const url = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=https://medium.com/feed/@atilafassina"
      var url = "http://rss2json.com/api.json?rss_url=https://medium.com/feed/@atilafassina";

      posts.open("GET", url, true);

      posts.onreadystatechange = function () {
        if (posts.readyState === 4 && posts.status === 200) {
          resolve(JSON.parse(posts.response));
        } else if (posts.status !== 200) {
          reject(posts.response);
        }
      };

      posts.send();
    }).then(function (postList) {
      var cachedPosts = '',
          ul = document.createElement('ul'),
          mediumWrap = document.querySelector('.mediumWrap');

      ul.classList.add('postList');

      postList.items.forEach(function (post) {
        cachedPosts += blogPostTemplate(post);
      });

      ul.innerHTML = cachedPosts;
      mediumWrap.appendChild(ul);

      setLinkTarget();
    }).catch(function (response) {
      console.error(response);
    });
  } else {
    setLinkTarget();
  }
})();