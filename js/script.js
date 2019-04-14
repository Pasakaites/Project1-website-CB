function mobileMenu() {
    var x = document.getElementsByClassName('ul-container')[0];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// ADVANCED INDIA - START

function getSlide() {
    let section = document.createElement('section');
    section.className = 'slide';
    document.getElementsByClassName('main-container')[0].appendChild(section);
    section.appendChild(getHeroText());
}

function getHeroText() {
    let div = document.createElement('div');
    div.className = 'hero-text';
    div.appendChild(getH1());
    return div;
}

function getH1() {
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Create Stunning<br>Visual Media';
    return h1;
}

// ADVANCED INDIA END

function getHead() {
    let div = document.createElement('div');
    div.className = 'head';
    document.getElementsByClassName('main-container')[0].appendChild(div);
    getFlexLeft()
    getFlexRight()
    
}

function getFlexRight() {                   
    let div = document.createElement('div');
    div.className = 'flex-right';
    document.getElementsByClassName('head')[0].appendChild(div);
    getButtons();
}

function getButtons() {
    let div = document.createElement('div');
    div.className = 'buttons-container';
    document.getElementsByClassName('flex-right')[0].appendChild(div);
    getSignIn();
    getSignUp();
}

function getSignIn() {
    let button = document.createElement('button');
    button.className = 'signin-button';
    button.type = 'button';
    button.innerHTML = 'SIGN IN';
    document.getElementsByClassName('buttons-container')[0].appendChild(button);
}

function getSignUp() {
    let button = document.createElement('button');
    button.className = 'signup-button';
    button.type = 'button';
    button.innerHTML = 'SIGN UP';
    document.getElementsByClassName('buttons-container')[0].appendChild(button);
}

function getFlexLeft() {
    let div = document.createElement('div');
    div.className = 'flex-left';
    document.getElementsByClassName('head')[0].appendChild(div);
    getLogo();
    getMenu();
}

function getLogo() {
    let img = document.createElement('img');
    img.alt = 'logo';
    img.src = '../images/logo2.png';
    let div = document.createElement('div');
    div.className = 'logo-container';
    div.appendChild(img);
    document.getElementsByClassName('flex-left')[0].appendChild(div);
}

function getMenu() {
    nav = document.createElement('nav');
    nav.className = 'menu';
    nav.id = 'menu-container';
    ul = document.createElement('ul');
    ul.id = 'menu';
    nav.appendChild(ul);
    document.getElementsByClassName('flex-left')[0].appendChild(nav);
    getMenuItems('menu');
}

function getMenuItems() {
    const menuItems = ['Home', 'Products', 'Templates', 'Pricing'];
    for (let i = 0; i < menuItems.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = '#';
        a.innerHTML = menuItems[i];
        li.appendChild(a);
        document.getElementById('menu').appendChild(li);
    }
}