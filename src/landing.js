const header = () => {
  const content = document.getElementById('content');
  const header = document.createElement('div');
  header.classList.add('header');
  header.textContent = "SICHUAN SPOT";
  return header
}

const mainbody = () => {
  const mainbody = document.createElement('div');
  mainbody.classList.add('mainbody');
  return mainbody
}

const maintext = () => {
  const maintext = document.createElement('div');
  maintext.classList.add('maintext');
  maintext.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ";
  return maintext;
}

const removeLanding = () => {
  const mainbody = document.querySelector('.mainbody').remove();
}

export {
  header,
  mainbody,
  maintext,
  removeLanding,
}