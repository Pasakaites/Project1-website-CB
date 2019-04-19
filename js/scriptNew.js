function loadJSON(callback) {
    var req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', 'https://api.myjson.com/bins/ryag0', true);
    req.onreadystatechange = 
    function() {
        if (req.readyState == 4 && req.status == "200") {
            callback(req.responseText);
        }
    };
    req.send(null);  
}

function getData(data) { //gauna data is json objekto - KAIP? 
    let el = document.createElement(data.type);
    console.log(data.type);
    if(typeof el.id === 'string'){
        el.id = data.id;
    }
    if(typeof el.className === 'string'){
        el.className = data.className;
    }        
    if(typeof el.src === 'string'){
        el.src = data.src;
    }
    if(typeof el.href === 'string'){
        el.href = data.href;
    }
    if(typeof el.innerHTML === 'string'){
        el.innerHTML = data.innerHTML;
    }
    if(typeof el.alt === 'string'){
        el.alt = data.alt;
    }
    if(typeof el.buttonType === 'string'){
        el.alt = data.buttonType;
    }
    if(typeof el.onclick === 'string'){
        el.alt = data.onclick;
    }
    return el;
    }

function recurseJSON(data) { //Kaip sitas siejasi su getData?
    for (let i of data.content) {
        console.log(get(i));
        if (typeof i.content === 'object') {
            recurseJSON(i);
        }
        //document.body.appendChild(get(i));
    }
}

function initJSON() { //Kas tas res? Is kur jis?
    loadJSON(function(res) {
        recurseJSON(JSON.parse(res));
    });
}

function initJSON();

