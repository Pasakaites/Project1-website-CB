function mobileMenu() {
    var x = document.getElementsByClassName('ul-container')[0];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function getDom() {
    document.body.appendChild(getContainer());
    //createStyleSheet();
}

function getContainer() {
    let div = document.createElement('div');
    div.className = 'main-container';
    div.appendChild(getHead());
    div.appendChild(getSlide());
    div.appendChild(getDots());
    return div;
}

function getHead() {
    let section = document.createElement('section');
    section.className = 'head';
    document.getElementById('container').appendChild(section);
    section.appendChild(getFlexLeft());
    section.appendChild(getFlexRight());
    return section;
}

function getFlexLeft() {
    let div = document.createElement('div');
    div.className = 'flex-left';
    document.getElementsByClassName('head')[0].appendChild(div);
    div.appendChild(getLogo());
    div.appendChild(getMenu());
    return div;
}

function getLogo() {
    let div = document.createElement('div');
    div.className = 'logo-container';
    let img = document.createElement('img');
    img.alt = 'logo';
    img.src = '../images/logo2.png';
    div.appendChild(img);
    return div;
}

// function getMenu() {
//     let nav = document.createElement('nav');
//     nav.className = 'menu';
//     nav.id = 'menu-container';
//     let ul = document.createElement('ul');
//     ul.id = 'menu';
//     nav.appendChild(ul);
//     document.getElementsByClassName('flex-left')[0].appendChild(nav);
//     getMenuItems('menu');

// }
// function getMenuItems() {
//     const menuItems = ['Home', 'Products', 'Templates', 'Pricing'];
//     for (let i = 0; i < menuItems.length; i++) {
//         let li = document.createElement('li');
//         let a = document.createElement('a');
//         a.href = '#';
//         a.innerHTML = menuItems[i];
//         li.appendChild(a);
//         document.getElementById('menu').appendChild(li); //is seno kodo
//         // return li;
//     }
// }

function getMenu() {
    let nav = document.createElement('nav');
    nav.className = 'menu';
    nav.id = 'menu-container';
    let ul = document.createElement('ul');
    ul.id = 'menu';
    nav.appendChild(ul);

    const menuItems = ['HOME', 'PRODUCTS', 'TEMPLATES', 'PRICING'];
    for (let i = 0; i < menuItems.length; i++) {
        let item = getMenuItems(menuItems, i);
        ul.appendChild(item);
    }
    return nav;
}

function getMenuItems(menuItems, index) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = '#';
    a.innerHTML = menuItems[index];
    li.appendChild(a);
    return li;
}

function getFlexRight() {                   
    let div = document.createElement('div');
    div.className = 'flex-right';
    div.appendChild(getButtons());
    return div;
}

function getButtons() {
    let div = document.createElement('div');
    div.className = 'buttons-container';
    div.appendChild(getSignIn());
    div.appendChild(getSignUp());
    return div;
}

function getSignIn() {
    let button = document.createElement('button');
    button.className = 'signin-button';
    button.type = 'button';
    button.innerHTML = 'SIGN IN';
    return button;
}
                
function getSignUp() {
    let button = document.createElement('button');
    button.className = 'signup-button';
    button.type = 'button';
    button.innerHTML = 'SIGN UP';
    return button;
}

function getMenuMobile() {
    let nav = document.createElement('nav');
    nav.className = 'menu-mobile';
    nav.id = 'mobile-menu-container';
    getMobileButtonContainer();
    let ul = document.createElement('ul');
    ul.id = 'menu-mobile';
    nav.appendChild(ul);
    document.getElementsByClassName('flex-right')[0].appendChild(nav);
    getMobileMenuItems('menu-mobile');

}
    
function getMobileMenuItems() {
    const menuItems = ['Home', 'Products', 'Templates', 'Pricing'];
    for (let i = 0; i < menuItems.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = '#';
        a.innerHTML = menuItems[i];
        li.appendChild(a);
        document.getElementById('menu-mobile').appendChild(li); //is seno kodo
        // return li;
    }
}

function getMobileButtonContainer() {
    let div = document.createElement('div');
    div.className = 'menu-mobile-button-container';
    div.appendChild(getMobileButton());
    return div;
}

function getMobileButton() {
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'menu-mobile-button';
    button.innerHTML = 'MENU';
    return button;
}

function getSlide() {
    let section = document.createElement('section');
    section.className = 'slide';
    document.getElementsByClassName('main-container')[0].appendChild(section);
    section.appendChild(getHeroText());
    section.appendChild(hetH2());
    section.appendChild(getCta());
    return section;
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

function hetH2() {
    let div = document.createElement('div');
    div.className = 'h2-text-container';
    div.appendChild(getH2textB());
    div.appendChild(getH2textS());
    return div;
}

function getH2textB() {
    let h2 = document.createElement('h2');
    h2.className = 'h2-text-b';
    h2.innerHTML = 'Super simple tool to create trendy videos and pictures<br>for your ads, social media, blogs and websites.<br>Make your projects stand out!';
    return h2;
}

function getH2textS() {
    let h2 = document.createElement('h2');
    h2.className = 'h2-text-s';
    h2.innerHTML = 'Super simple tool to create trendy<br>videos and pictures for your ads,<br>social media, blogs and websites.<br>Make your projects stand out!';
    return h2;
}

function getCta() {
    let div = document.createElement('div');
    div.className = 'cta-button-container';
    div.appendChild(getCtaButton());
    return div;
}

function getCtaButton() {
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'cta-button';
    button.innerHTML = 'CREATE DESIGN &#8594';
    return button;
}

function getDots() {
    let div = document.createElement('div');
    div.className = 'doststyle';
    document.getElementsByClassName('main-container')[0].appendChild(div);
    div.appendChild(getDotWrap());
    return div;
}

function getDotWrap() {
    let div = document.createElement('div');
    div.className = 'dotwrap';
    div.appendChild(getDotActive());
    div.appendChild(getDot());
    div.appendChild(getDot());
    div.appendChild(getDot());
    return div;
}

function getDotActive() {
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'dot';
    button.id = 'selected';
    return button;
}

function getDot() {
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'dot';
    return button;
}


function createStyleRules() {
    const style = createStyleSheet();
    document.head.appendChild(style);
    style.sheet.insertRule('body {height: 100vh; width: 100vw; margin: 0; padding: 0; font-family: Verdana, Geneva, Tahoma, sans-serif; color: white; background-image: url(../images/naujas.png), linear-gradient(125deg, rgba(18, 54, 202, 1) 0 56%, rgba(202, 29, 44, 1) 44% 100%); background-position-x: 75%; background-position-y: center; background-size: 100% auto, contain; background-repeat: no-repeat;}');
    applyContainerStyleRules(style.sheet);
    applyHeadStyleRules(style.sheet);
    applyMobileStyleRules(sheet);
    applySlideStyleRules(sheet);
    applyDotStyleRules(sheet);
}

function createStyleSheet() {
    var style = document.createElement('style');
    style.id = 'inserted-stylesheet';
    style.type = "text/css";
    return style;
}

function applyContainerStyleRules(sheet) {
    sheet.insertRule('.main-container { margin: 0 auto; padding: 34px 24px 40px 144px;}');
}

function applyHeadStyleRules(sheet) {
    sheet.insertRule('.head { width: 100%; display: flex; justify-content: space-between; position: relative;}');
    sheet.insertRule('.logo-container {display: inline-block; object-fit: contain;}');
    sheet.insertRule('.menu {display: inline-block; vertical-align: super;}');
    sheet.insertRule('.menu a {text-decoration: none; color: white; font-size: 20px;}');
    sheet.insertRule('.menu a:hover {border-bottom: 3px solid white;}');
    sheet.insertRule('.menu ul {margin: 0; padding: 0; padding-inline-start: 0;}');
    sheet.insertRule('.menu li {display: inline-block; padding: 20px 13px 13px 13px;}');
    sheet.insertRule('.active {border-bottom: 3px solid white;}');
    sheet.insertRule('.buttons-container {display: inline-block; vertical-align: super; padding-right: 160px;}');
    sheet.insertRule('.signin-button {background-color: transparent; border: none; color: white; width: 90px; height: 45px; text-align: center; font-size: 20px; margin-top: 8px;}');
    sheet.insertRule('.signup-button {background-color: white; border: none; color: blue; width: 130px; height: 45px; text-align: center; font-size: 20px; border-radius: 5px; margin-top: 8px;}');
    sheet.insertRule('.signin-button:hover {background-color: rgba(255, 255, 255, 0.2);}');
    sheet.insertRule('.signup-button:hover {background-color: rgba(255, 255, 255, 0.9);}');
}

function applyMobileStyleRules(sheet) {
    sheet.insertRule('.menu-mobile {width: 160px; text-align: center; display: none; padding-top: 10px; display: none; position: relative;}');
    sheet.insertRule('.ul-container {border: 1px solid white; border-radius: 3px; cursor: pointer; width: 128px; background-color: white; text-align: center; position: absolute; display: none; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;}');
    sheet.insertRule('.menu-mobile ul {list-style-type: none; padding: 8px 4px 8px 4px; margin: 0;}');
    sheet.insertRule('.menu-mobile a {text-decoration: none; color: blue;}');
    sheet.insertRule('.menu-mobile-button-container {border: none; cursor: pointer; width: 120px; text-align: center;}');
    sheet.insertRule('.menu-mobile-button {background-color: white; border: blue; border: blue; width: 130px; height: 25px; text-align: center; font-size: 13px; border-radius: 3px;}');
    sheet.insertRule('.menu-mobile-button:hover {background-color: rgba(255, 255, 255, 0.9);}');
    sheet.insertRule('.menu-mobile li:hover {background-color: rgb(211, 211, 211, 0.5);}');
}

function applySlideStyleRules(sheet) {
    sheet.insertRule('.hero-text {padding-top: 40px;}');
    sheet.insertRule('.hero-text h1 {font-size: 80px;}');
    sheet.insertRule('.h2-text-b {font-size: 25px; font-weight: 100;}');
    sheet.insertRule('.h2-text-s {font-size: 10px; display: none;}');
    sheet.insertRule('.cta-button-container {padding-top: 80px; margin-top: 30px;}');
    sheet.insertRule('.cta-button {background-color: #ff5869; border: none; color: white;  width: 200px; height: 70px; text-align: center; font-size: 16px; border-radius: 5px;}');
}

function applyDotStyleRules(sheet) {
    sheet.insertRule('.dotwrap {padding-top: 40px; margin-top: 160px;}');
    sheet.insertRule('.dot {width: 17px; height: 17px; border-radius: 50%; background-color: rgba(255,255,255,0.3); border: 3px solid transparent;}');
    sheet.insertRule('.dot:hover {width: 17px; height: 17px; border-radius: 50%; background-color: rgba(255,255,255,0.3); border: 3px solid rgb(255, 184, 0);}');
    sheet.insertRule('#selected {width: 17px; height: 17px; border-radius: 50%; background-color: rgba(255,255,255,0.3); border: 3px solid rgb(255, 184, 0);}');
}