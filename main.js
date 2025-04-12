var CompanyName = 'PRODUCTS';
var Tab = 'Create';
var rename = document.getElementById("rename");
var rbox = document.getElementById("rname");
var cnamei = document.getElementById("cnamei");
var confirm = document.getElementById("confirm");
var currency = "CZK"
var cansearch = false
var cbalance = 0
document.getElementById('toolbar').style.display = 'none';

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
    if (document.getElementById('pname').value == ''){
        alert('Product name cannot be empty!')
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
        if (checkproducts(document.getElementById('pname').value) == true){
            newText = null
            newSpan = null
            alert("Product already exists!");
        }else if(checkproducts(document.getElementById('pname').value) == false){
            newText.appendChild(newSpan)
            newText.id = "product";
            document.getElementById('products').appendChild(newText)
            if (cansearch == false){
               cansearch = true
            }
        }
    }else{
        newText.appendChild(newSpan)
        newText.id = "product";
        document.getElementById('products').appendChild(newText)
        if (cansearch == false){
            cansearch = true
        }
    }
    
}

setInterval(function myFunction(){
    currency = document.getElementById("cselect").value
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
    }else{
        document.getElementById('shoptab').style.display = 'none';
    }
    if (Tab == 'settings'){
        document.getElementById('settingstab').style.display = 'block';
    }else{
        document.getElementById('settingstab').style.display = 'none';
    }
  }, 0);