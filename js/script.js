var queryString = new URLSearchParams(window.location.search);;
var page = queryString ? queryString.get('page') : 1;

// create pagination based on number of users
var numberOfPages = Math.ceil(users.length / 10);

// create pagination links
for (var i = 1; i <= numberOfPages; i++) {
    var pagination = document.querySelector('.pagination');
    var pageLink = document.createElement('a');
    pageLink.setAttribute('href', '?page=' + (i));
    pageLink.innerHTML = i;

    if (i == page) {
        pageLink.className = 'active';
    }

    pagination.appendChild(pageLink);
}

// update total number of users
document.querySelector('#total').innerHTML = users.length;

// display 10 users on page load, based on query string
var displayedUsers = users.slice(page * 10 - 10, page * 10);

var ul = document.querySelector('.contact-list');
ul.innerHTML = "";

displayedUsers.forEach(function(user) {
  var html = `
  <li class="contact-item cf">
    <div class="contact-details">
          <img class="avatar" src="${user.image}">
          <h3>${user.name}</h3>
          <span class="email">${user.name.replace(" ", ".").replace(" ", ".")}@example.com</span>
      </div>
      <div class="joined-details">
            <span class="date">Joined ${user.joined}</span>
    </div>
  </li>
  `
  ul.innerHTML += html;
});