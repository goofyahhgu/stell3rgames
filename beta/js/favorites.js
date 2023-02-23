fetch('/beta/json/favorites.json')
  .then(response => response.json())
  .then(data => {
    const gamesContainer = document.querySelector('.games');

    data.forEach(item => {
      const game = document.createElement('div');
      game.classList.add('game');
      game.innerHTML = `<a href="${item.link}" target="_blank"><img src="${item.image}" alt="${item.title}"></a><h2><a href="${item.link}" target="_blank">${item.title}</a></h2>`;
      gamesContainer.appendChild(game);
    });
  });
