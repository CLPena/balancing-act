var popup = document.querySelector('.popup');
var wallet = document.querySelector('.wallet');
var dashboard = document.querySelector('.dashboard');
var profile = document.querySelector('.profile');
var home = document.querySelector('.home');
var transactionsPage = document.querySelector('.transactions-page');
var profPage = document.querySelector('.prof-page');
var manageAccounts = document.querySelector('.manage-accounts');
var newTransactions = document.querySelector('.new-transactions');

popup.addEventListener('click', closePopup);
wallet.addEventListener('click', goWallet);
profile.addEventListener('click', goProfile);
dashboard.addEventListener('click', goDashboard);
manageAccounts.addEventListener('click', goProfile);
newTransactions.addEventListener('click', goWallet);

function closePopup(event) {
  if (event.target.classList.contains('x')) {
    event.target.parentNode.parentNode.remove();
  }
}

function goWallet(event) {
  if (event.target.classList.contains('wallet')) {
    wallet.parentNode.classList.add('with-border');
    dashboard.parentNode.classList.remove('with-border');
    profile.parentNode.classList.remove('with-border');
    home.style.visibility = "hidden";
    transactionsPage.style.visibility = "visible";
    profPage.style.visibility = "hidden";
  } else if (event.target.classList.contains('new-transactions')) {
    wallet.parentNode.classList.add('with-border');
    dashboard.parentNode.classList.remove('with-border');
    profile.parentNode.classList.remove('with-border');
    home.style.visibility = "hidden";
    transactionsPage.style.visibility = "visible";
    profPage.style.visibility = "hidden";
  }
}

function goProfile(event) {
  if (event.target.classList.contains('profile')) {
    profile.parentNode.classList.add('with-border');
    dashboard.parentNode.classList.remove('with-border');
    wallet.parentNode.classList.remove('with-border');
    home.style.visibility = "hidden";
    transactionsPage.style.visibility = "hidden";
    profPage.style.visibility = "visible";
  } else if (event.target.classList.contains('manage-accounts')) {
      profile.parentNode.classList.add('with-border');
      dashboard.parentNode.classList.remove('with-border');
      wallet.parentNode.classList.remove('with-border');
      home.style.visibility = "hidden";
      transactionsPage.style.visibility = "hidden";
      profPage.style.visibility = "visible";
    }
}

function goDashboard(event) {
  if (event.target.classList.contains('dashboard')) {
    dashboard.parentNode.classList.add('with-border');
    profile.parentNode.classList.remove('with-border');
    wallet.parentNode.classList.remove('with-border');
    home.style.visibility = "visible";
    transactionsPage.style.visibility = "hidden";
    profPage.style.visibility = "hidden";
  }
}
