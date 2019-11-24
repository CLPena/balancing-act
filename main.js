var popup = document.querySelector('.popup');
var wallet = document.querySelector('.wallet');
var dashboard = document.querySelector('.dashboard');
var profile = document.querySelector('.profile');
var home = document.querySelector('.home');

popup.addEventListener('click', closePopup);
wallet.addEventListener('click', moveBorderWallet);
profile.addEventListener('click', moveBorderProfile);
dashboard.addEventListener('click', moveBorderDashboard);

function closePopup(event) {
  if (event.target.classList.contains('x')) {
    event.target.parentNode.parentNode.remove();
  }
}

function moveBorderWallet(event) {
  if (event.target.classList.contains('wallet')) {
    wallet.parentNode.classList.add('with-border');
    dashboard.parentNode.classList.remove('with-border');
    profile.parentNode.classList.remove('with-border');
    home.style.visibility = "hidden";
  }
}

function moveBorderProfile(event) {
  if (event.target.classList.contains('profile')) {
    profile.parentNode.classList.add('with-border');
    dashboard.parentNode.classList.remove('with-border');
    wallet.parentNode.classList.remove('with-border');
  }
}

function moveBorderDashboard(event) {
  if (event.target.classList.contains('dashboard')) {
    dashboard.parentNode.classList.add('with-border');
    profile.parentNode.classList.remove('with-border');
    wallet.parentNode.classList.remove('with-border');
    home.style.visibility = "visible";
  }
}
