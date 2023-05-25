
var homeLink = document.getElementById('home-link');
var logoLink = document.getElementById('logo-link');

homeLink.addEventListener('click', loadHomePage);
logoLink.addEventListener('click', loadHomePage);

function loadHomePage(event) {
  event.preventDefault(); 

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'index.html', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      document.documentElement.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

const links = document.querySelectorAll('.comics-btn');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    links.forEach(lnk => {
      lnk.classList.remove('active');
    });
    link.classList.add('active');
  });
});

