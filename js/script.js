'use strict'

function loadJSON(callback) {
    var req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', 'https://api.myjson.com/bins/11khps', true);
    req.onreadystatechange = 
    function() {
        if (req.readyState == 4 && req.status == "200") {
            callback(req.responseText);
        }
    };
    req.send(null);  
}

function getData(data) {
    let el = document.createElement(data.type);
    if (typeof data.id === 'string') {
        el.id = data.id;
    }
    if (typeof data.className === 'string') {
        el.className = data.className;
    }    
    if (typeof data.alt === 'string') {
        el.alt = data.alt;
    }    
    if (typeof data.src === 'string') {
        el.src = data.src;
    }
    if (typeof data.href === 'string') {
        el.href = data.href;
    }
    if (typeof data.innerHTML === 'string') {
        el.innerHTML = data.innerHTML;
    }
    if (typeof data.buttonType === 'string') {
        el.alt = data.buttonType;
    }
    return el;
    }

function initJSON() {
    loadJSON(function(res) {
        document.body.appendChild(getContainer());
        recurseJSON(JSON.parse(res).content, document.getElementsByClassName('mainContainer')[0]);
    });
}

function recurseJSON(data, mainContainer) {
    for (let el of data) {
        let newContainer = getData(el);
        mainContainer.appendChild(newContainer);
        catchEventListeners(el);
        if (typeof el.content === 'object') {
            recurseJSON(el.content, newContainer);
        }
    }
}

function catchEventListeners(el) {
    if (el.onclick === 'klik') {
        document.addEventListener('click', function(event) {
        let isMenu = false;
        let mobileMenu = document.getElementsByClassName('ul-container')[0];
        let isClickInside = document.getElementsByClassName('menu-mobile-button')[0].contains(event.target);
        if (isClickInside && !isMenu) {
            mobileMenu.style.display = "block";
        } 
        else if (isClickInside && isMenu) {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "none";
        }
        // isMenu = !isMenu;
      });
    }
    if (el.onclick === 'klik' && el.id === 'dot1') {
        document.getElementById('dot1').addEventListener('click', function() {
            document.getElementById('dot1').style = 'border: 4px solid rgb(255, 184, 0)';
            document.getElementById('dot2').style = 'border: 4px solid transparent';
            document.getElementById('dot3').style = 'border: 4px solid transparent';
            document.getElementById('dot4').style = 'border: 4px solid transparent';
            document.getElementsByClassName('hero-text1')[0].style.display = 'block';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
        })
    }
    if (el.onclick === 'klik' && el.id === 'dot2') {
        document.getElementById('dot2').addEventListener('click', function() {
            document.getElementById('dot2').style = 'border: 4px solid rgb(255, 184, 0)';
            document.getElementById('dot1').style = 'border: 4px solid transparent';
            document.getElementById('dot3').style = 'border: 4px solid transparent';
            document.getElementById('dot4').style = 'border: 4px solid transparent';
            document.getElementsByClassName('hero-text1')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'block';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
        })
    }
    if (el.onclick === 'klik' && el.id === 'dot3') {
        document.getElementById('dot3').addEventListener('click', function() {
            document.getElementById('dot3').style = 'border: 4px solid rgb(255, 184, 0)';
            document.getElementById('dot1').style = 'border: 4px solid transparent';
            document.getElementById('dot2').style = 'border: 4px solid transparent';
            document.getElementById('dot4').style = 'border: 4px solid transparent';
            document.getElementsByClassName('hero-text1')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'block';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
        })
    }
    if (el.onclick === 'klik' && el.id === 'dot4') {
        document.getElementById('dot4').addEventListener('click', function() {
            document.getElementById('dot4').style = 'border: 4px solid rgb(255, 184, 0)';
            document.getElementById('dot1').style = 'border: 4px solid transparent';
            document.getElementById('dot2').style = 'border: 4px solid transparent';
            document.getElementById('dot3').style = 'border: 4px solid transparent';
            document.getElementsByClassName('hero-text1')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'block';
        })
    }
    if (el.onclick === 'klik' && el.className === 'home') {
        document.getElementsByClassName('home')[0].addEventListener('click', function() {
            document.getElementsByClassName('hero-text1')[0].style.display = 'block';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
            document.getElementsByClassName('hero-text5')[0].style.display = 'none';
            document.getElementsByClassName('hero-text6')[0].style.display = 'none';
            document.getElementsByClassName('hero-text7')[0].style.display = 'none';
            document.getElementsByClassName('hero-text8')[0].style.display = 'none';
            document.getElementsByClassName('home')[0].style = 'border-bottom: 2px solid white';
            document.getElementsByClassName('products')[0].style = 'border-bottom: none';
            document.getElementsByClassName('templates')[0].style = 'border-bottom: none';
            document.getElementsByClassName('pricing')[0].style = 'border-bottom: none';
            document.getElementsByClassName('dotwrap')[0].style.display = 'block';
            document.getElementById('dot1').style = 'border: 4px solid rgb(255, 184, 0)';
            document.getElementById('dot2').style = 'border: 4px solid transparent';
            document.getElementById('dot3').style = 'border: 4px solid transparent';
            document.getElementById('dot4').style = 'border: 4px solid transparent';
        })
    }
    if (el.onclick === 'klik' && el.className === 'products') {
        document.getElementsByClassName('products')[0].addEventListener('click', function() {
            document.getElementsByClassName('hero-text1')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
            document.getElementsByClassName('hero-text5')[0].style.display = 'block';
            document.getElementsByClassName('hero-text6')[0].style.display = 'none';
            document.getElementsByClassName('hero-text7')[0].style.display = 'none';
            document.getElementsByClassName('hero-text8')[0].style.display = 'none';
            document.getElementsByClassName('home')[0].style = 'border-bottom: none';
            document.getElementsByClassName('products')[0].style = 'border-bottom: 2px solid white';
            document.getElementsByClassName('templates')[0].style = 'border-bottom: none';
            document.getElementsByClassName('pricing')[0].style = 'border-bottom: none';
            document.getElementsByClassName('dotwrap')[0].style.display = 'none';
        })
    }
    if (el.onclick === 'klik' && el.className === 'templates') {
        document.getElementsByClassName('templates')[0].addEventListener('click', function() {
            document.getElementsByClassName('hero-text1')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
            document.getElementsByClassName('hero-text5')[0].style.display = 'none';
            document.getElementsByClassName('hero-text6')[0].style.display = 'block';
            document.getElementsByClassName('hero-text7')[0].style.display = 'none';
            document.getElementsByClassName('hero-text8')[0].style.display = 'none';
            document.getElementsByClassName('home')[0].style = 'border-bottom: none';
            document.getElementsByClassName('products')[0].style = 'border-bottom: none';
            document.getElementsByClassName('templates')[0].style = 'border-bottom: 2px solid white';
            document.getElementsByClassName('pricing')[0].style = 'border-bottom: none';
            document.getElementsByClassName('dotwrap')[0].style.display = 'none';
        })
    }
    if (el.onclick === 'klik' && el.className === 'pricing') {
        document.getElementsByClassName('pricing')[0].addEventListener('click', function() {
            document.getElementsByClassName('hero-text1')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
            document.getElementsByClassName('hero-text5')[0].style.display = 'none';
            document.getElementsByClassName('hero-text6')[0].style.display = 'none';
            document.getElementsByClassName('hero-text7')[0].style.display = 'block';
            document.getElementsByClassName('hero-text8')[0].style.display = 'none';
            document.getElementsByClassName('home')[0].style = 'border-bottom: none';
            document.getElementsByClassName('products')[0].style = 'border-bottom: none';
            document.getElementsByClassName('templates')[0].style = 'border-bottom: none';
            document.getElementsByClassName('pricing')[0].style = 'border-bottom: 2px solid white';
            document.getElementsByClassName('dotwrap')[0].style.display = 'none';
        })
    }
    if (el.onclick === 'klik' && el.className === 'logo-container') {
        document.getElementsByClassName('logo-container')[0].addEventListener('click', function() {
            document.getElementsByClassName('hero-text1')[0].style.display = 'block';
            document.getElementsByClassName('hero-text5')[0].style.display = 'none';
            document.getElementsByClassName('hero-text6')[0].style.display = 'none';
            document.getElementsByClassName('hero-text7')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
            document.getElementsByClassName('hero-text8')[0].style.display = 'none';
            document.getElementsByClassName('home')[0].style = 'border-bottom: 2px solid white';
            document.getElementsByClassName('products')[0].style = 'border-bottom: none';
            document.getElementsByClassName('templates')[0].style = 'border-bottom: none';
            document.getElementsByClassName('pricing')[0].style = 'border-bottom: none';
            document.getElementsByClassName('dotwrap')[0].style.display = 'block';
            document.getElementById('dot1').style = 'border: 4px solid rgb(255, 184, 0)';
            document.getElementById('dot2').style = 'border: 4px solid transparent';
            document.getElementById('dot3').style = 'border: 4px solid transparent';
            document.getElementById('dot4').style = 'border: 4px solid transparent';
        })
    }
    if (el.onclick === 'klik' && el.id === 'homeId') {
        document.getElementById('homeId').addEventListener('click', function() {
            document.getElementsByClassName('hero-text1')[0].style.display = 'block';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
            document.getElementsByClassName('hero-text5')[0].style.display = 'none';
            document.getElementsByClassName('hero-text6')[0].style.display = 'none';
            document.getElementsByClassName('hero-text7')[0].style.display = 'none';
            document.getElementsByClassName('hero-text8')[0].style.display = 'none';
            document.getElementsByClassName('dotwrap')[0].style.display = 'block';
            document.getElementById('dot1').style = 'border: 4px solid rgb(255, 184, 0)';
            document.getElementById('dot2').style = 'border: 4px solid transparent';
            document.getElementById('dot3').style = 'border: 4px solid transparent';
            document.getElementById('dot4').style = 'border: 4px solid transparent';
        })
    }
    if (el.onclick === 'klik' && el.id === 'productsId') {
        document.getElementById('productsId').addEventListener('click', function() {
            document.getElementsByClassName('hero-text1')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
            document.getElementsByClassName('hero-text5')[0].style.display = 'block';
            document.getElementsByClassName('hero-text6')[0].style.display = 'none';
            document.getElementsByClassName('hero-text7')[0].style.display = 'none';
            document.getElementsByClassName('hero-text8')[0].style.display = 'none';
            document.getElementsByClassName('dotwrap')[0].style.display = 'none';
        })
    }
    if (el.onclick === 'klik' && el.id === 'templatesId') {
        document.getElementById('templatesId').addEventListener('click', function() {
            document.getElementsByClassName('hero-text1')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
            document.getElementsByClassName('hero-text5')[0].style.display = 'none';
            document.getElementsByClassName('hero-text6')[0].style.display = 'block';
            document.getElementsByClassName('hero-text7')[0].style.display = 'none';
            document.getElementsByClassName('hero-text8')[0].style.display = 'none';
            document.getElementsByClassName('dotwrap')[0].style.display = 'none';
        })
    }
    if (el.onclick === 'klik' && el.id === 'pricingId') {
        document.getElementById('pricingId').addEventListener('click', function() {
            document.getElementsByClassName('hero-text1')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
            document.getElementsByClassName('hero-text5')[0].style.display = 'none';
            document.getElementsByClassName('hero-text6')[0].style.display = 'none';
            document.getElementsByClassName('hero-text7')[0].style.display = 'block';
            document.getElementsByClassName('hero-text8')[0].style.display = 'none';
            document.getElementsByClassName('dotwrap')[0].style.display = 'none';
        })
    }
    if (el.onclick === 'klik' && el.className === 'cta-button') {
        document.getElementsByClassName('cta-button')[0].addEventListener('click', function() {
            document.getElementsByClassName('hero-text1')[0].style.display = 'none';
            document.getElementsByClassName('hero-text2')[0].style.display = 'none';
            document.getElementsByClassName('hero-text3')[0].style.display = 'none';
            document.getElementsByClassName('hero-text4')[0].style.display = 'none';
            document.getElementsByClassName('hero-text5')[0].style.display = 'none';
            document.getElementsByClassName('hero-text6')[0].style.display = 'none';
            document.getElementsByClassName('hero-text7')[0].style.display = 'none';
            document.getElementsByClassName('hero-text8')[0].style.display = 'block';
            document.getElementsByClassName('home')[0].style = 'border-bottom: none';
            document.getElementsByClassName('products')[0].style = 'border-bottom: none';
            document.getElementsByClassName('templates')[0].style = 'border-bottom: none';
            document.getElementsByClassName('pricing')[0].style = 'border-bottom: none';
            document.getElementsByClassName('dotwrap')[0].style.display = 'none';
        })
    }
}

function getContainer() {
    let div = document.createElement('div');
    div.className = 'mainContainer';
    return div;
}
