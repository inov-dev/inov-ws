(function () {
  var menu = document.getElementById('primary-menu');
  if (!menu || menu.querySelector('.mssante-menu-item')) {
    return;
  }

  var item = document.createElement('li');
  item.className = 'menu-item mssante-menu-item';
  item.innerHTML =
    '<button class="mssante-menu-button" type="button" aria-expanded="false" aria-describedby="mssante-menu-tooltip">' +
      '<svg aria-hidden="true" viewBox="0 0 24 24">' +
        '<path d="M3 5h18v14H3z"></path>' +
        '<path d="m3 6 9 7 9-7"></path>' +
      '</svg>' +
      '<span class="mssante-menu-label">MSSanté</span>' +
      '<span class="screen-reader-text">Afficher l’adresse MSSanté d’INOV SELARL</span>' +
    '</button>' +
    '<div class="mssante-menu-tooltip" id="mssante-menu-tooltip" role="tooltip">' +
      '<strong>Adresse MSSanté d’INOV SELARL</strong>' +
      '<a href="mailto:selarl.inov@interop-mssante.apicrypt.org">selarl.inov@interop-mssante.apicrypt.org</a>' +
      '<p>Professionnels et établissements de santé : utilisez cette adresse sécurisée pour transmettre vos ordonnances et vos demandes de rendez-vous.</p>' +
    '</div>';

  menu.appendChild(item);

  var button = item.querySelector('.mssante-menu-button');
  button.addEventListener('click', function () {
    var isOpen = item.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (event) {
    if (!item.contains(event.target)) {
      item.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      item.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    }
  });
}());
