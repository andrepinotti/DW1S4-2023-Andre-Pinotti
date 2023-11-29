let nome = prompt("Informe seu Nome")
let bv = document.getElementById("bv");     
bv.innerHTML = nome;

function addTxt(){
    document.getElementById("para").innerHTML += "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia soluta voluptates culpa numquam aperiam, rem quam officiis totam facere odit possimus atque vitae recusandae aliquam repellendus animi amet! Fuga?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia soluta voluptates culpa numquam aperiam, rem quam officiis totam facere odit possimus atque vitae recusandae aliquam repellendus animi amet! Fuga?</p>"
}
function rmTxt(){
    document.getElementById("para").innerHTML = null;        
}