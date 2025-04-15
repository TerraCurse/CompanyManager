var CompanyName = 'PRODUCTS';
var Tab = 'Create';
var rename = document.getElementById("rename");
var rbox = document.getElementById("rname");
var cnamei = document.getElementById("cnamei");
var confirm = document.getElementById("confirm");
var cbinput = document.getElementById('cbinput');
var currency = "CZK"
var cansearch = false
var cancreate = true
var cbalance = 0
var income = 0 
document.getElementById('toolbar').style.display = 'none';


console.log((5*5+250+25)*10)

console.log("main.js is up and running! thanks for playing this small webgame btw.")

function updateCBalance(){
    document.getElementById('cbalance').innerHTML = cbalance;
}

function checkproducts(productName){
    for (const child of document.getElementsByClassName('productz')){
        if (child.innerText.includes(productName,0) === true){
            return true
            break
        }else{
            return false
            break
        }
    }
}

document.getElementById('createc').onclick = function(){
    cbalance = document.getElementById('sbalance').value;
    CompanyName = document.getElementById('cname').value;
    console.log(CompanyName)
    document.getElementById('create').remove()
    document.getElementById('cnamei').innerHTML = CompanyName;
    document.getElementById('cbalance').innerHTML = cbalance;
    Tab = 'info';
    document.getElementById('toolbar').style.display = 'block';
}

document.getElementById('confirmbchange').onclick = function(){
    cbalance = cbinput.value
    console.log(cbalance)
}

document.getElementById('shopbutton').onclick = function(){
    Tab = 'shop';
}

document.getElementById('infobutton').onclick = function(){
    Tab = 'info';
}

document.getElementById('settingsbutton').onclick = function(){
    Tab = "settings";
}

rename.addEventListener("click", function() {
    rename.style.display = "none";
    confirm.style.display = "inline-block";
    cnamei.style.display = "none";
    rbox.value = CompanyName;
    rbox.style.display = "inline-block";
});
confirm.addEventListener("click", function(){
    rbox.style.display = "none";
    rename.style.display = "inline-block";
    confirm.style.display = "none";
    CompanyName = rbox.value;
    cnamei.style.display = "inline-block";
    cnamei.innerHTML = CompanyName;
});

document.getElementById('createp').onclick = function(){
    if (document.getElementById('pname').value == '' || document.getElementById('pname').value.match(/^[0-9]+$/) != null ){
        alert('Product name cannot be empty or be pure numbers!')
        return
    }

    if (document.getElementById('pcost').value < 5){
        alert('Product cost cannot be empty or below 5!')
        return
    }

    var newText = document.createElement('h4')
    var newSpan = document.createElement('span')
    newText.style.margin = '1px';
    newSpan.id = 'pcurrency';
    newSpan.className = 'pcurrency';
    newSpan.innerHTML = currency
    newText.innerHTML = document.getElementById('pname').value + ' | ' + document.getElementById('pcost').value + " ";
    if (document.getElementById("product") != null){
        if (checkproducts(document.getElementById('pname').value) == true && cancreate == true){
            newText = null
            newSpan = null
            alert("Product already exists!");
        }else if(checkproducts(document.getElementById('pname').value) == false && cancreate == true){
            newText.appendChild(newSpan)
            newText.id = "product";
            document.getElementById('products').appendChild(newText)
            if (cansearch == false){
               cansearch = true
            }
            console.log("cant")
            cancreate = false;
            document.getElementById('createp').style.backgroundColor = "rgb(30, 8, 8)"
            var pq = document.getElementById('productquality').value
            var pc = document.getElementById('pcost').value
            var pa = document.getElementById('productamount').value
            //cbalance = cbalance - (pc*5+pq+pa)*8
            setTimeout(() => {
                console.log("i think yes")
                cancreate = true;
                document.getElementById('createp').style.backgroundColor = "rgb(30, 30, 35)"
            }, 2000);
        }else if(cancreate == false){
            alert("have you heard about our lord and saviour cooldown")
        }
    }else{
        if (cancreate == true){
            newText.appendChild(newSpan)
            newText.id = "product";
            document.getElementById('products').appendChild(newText)
            if (cansearch == false){
                cansearch = true
            }
            console.log("cant")
            cancreate = false;
            document.getElementById('createp').style.backgroundColor = "rgb(30, 8, 8)"
            var pq = document.getElementById('productquality').value
            var pc = document.getElementById('pcost').value
            var pa = document.getElementById('productamount').value
            //cbalance = cbalance - (pc*5+pq+pa)*8
            setTimeout(() => {
                console.log("i think yes")
                cancreate = true;
                document.getElementById('createp').style.backgroundColor = "rgb(30, 30, 35)"
            }, 2000);
        }else if(cancreate == false){
            alert("have you heard about our lord and saviour cooldown")
        }
    }
    
}

//Production cost formula: (QUALITY*5+COST+AMOUNT)*10
setInterval(function myFunction(){
    var pq = document.getElementById('productquality').value
    var pc = document.getElementById('pcost').value
    var pa = document.getElementById('productamount').value
    currency = document.getElementById("cselect").value
    if (document.getElementById('cbalance').innerHTML != cbalance){
        document.getElementById('cbalance').innerHTML = cbalance + currency;
    }
    if (cansearch == true){
        for (const child of document.getElementsByClassName('pcurrency')){
            if (child.innerHTML != currency){
                child.innerHTML = currency
            }
        }
    }
    if (Tab == 'info'){
        document.getElementById('infotab').style.display = 'block';
    }else{
        document.getElementById('infotab').style.display = 'none';
    }
    if (Tab == 'shop'){
        document.getElementById('shoptab').style.display = 'block';
        document.getElementById('prodcost').innerHTML = (pc*5+pq+pa)*8
    }else{
        document.getElementById('shoptab').style.display = 'none';
    }
    if (Tab == 'settings'){
        document.getElementById('settingstab').style.display = 'block';
    }else{
        document.getElementById('settingstab').style.display = 'none';
    }
  }, 0);