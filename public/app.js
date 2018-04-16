const Cat = function(name, food, image) {
  this.name = name;
  this.food = food;
  this.image = image;
}

const catArray = [
  new Cat('Mr Floof', 'Cheetos', 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  new Cat('Boba', 'Sock fluff', 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'),
  new Cat('Barnaby', 'Tuna', 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'),
];

const addNewCat = function(cat, parent) {
  const catContainer = document.createElement('ul');

  const catName = document.createElement('li');
  catName.textContent = `Name: ${cat.name}`;
  catContainer.appendChild(catName);

  const catFood = document.createElement('li');
  catFood.textContent = `Favourite Food: ${cat.food}`;
  catContainer.appendChild(catFood);

  const image = document.createElement('img');
  image.src = cat.image;
  catContainer.appendChild(image);

  parent.appendChild(catContainer);
}


document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('#cats');
  container.innerHTML = '';
  catArray.forEach(cat => addNewCat(cat, container));

});
