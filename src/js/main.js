let apiRequest = new XMLHttpRequest();

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        window.onload = getMenu;
    }
}

function getMenu() {

  let url = 'https://entree-f18.herokuapp.com/v1/menu/12';

  apiRequest.onload = onSuccess;
  // apiRequest.onerror = onError;
  apiRequest.open('get', url, true);
  apiRequest.send();
}


function onSuccess() {

    let menu = JSON.parse(apiRequest.responseText).menu_items;
    let menuLength = JSON.parse(apiRequest.responseText).menu_size;
    let cards = [];

    for (let i = 0; i < menuLength; i++) {

      cards.push(document.getElementById('body' + i));

      if (cards.length === menuLength) {

        for (let j = 0; j < cards.length; j++) {

          cards[j].innerHTML = menu[j].description;
        }
      }
    }
}

function onError() {

}
