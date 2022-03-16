const nav = () => {
  const nav = document.createElement('div');
  nav.classList.add('nav');
  const list = document.createElement('ul');
  const item1 = document.createElement('li')
  item1.classList.add('home');
  const item2 = document.createElement('li')
  item2.classList.add('li');
  item1.textContent = "Home";
  item2.textContent = "Menu";
  nav.appendChild(list);
  list.appendChild(item1);
  list.appendChild(item2);
  return nav;
}

export {
  nav
}