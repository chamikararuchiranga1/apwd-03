console.log("run");

function sameName() {
    const first = document.getElementById('name-1').value
    const last = document.getElementById('name-2').value

    if(first == last){
        document.getElementById('display-1').innerText = "Success..!"
    }else{
        document.getElementById('display-1').innerText = "Fail..!"
    }
}

function greaterThan() {
    const first = parseInt(document.getElementById('num-1').value);
    const last = parseInt(document.getElementById('num-2').value);
    let dis = ""
    if(first < last){
        dis = "Number 2"
    }else if(first == last){
        dis = "Same Number"
    }else {
        dis = "Number 1"
    }
    document.getElementById('display-2').innerText = dis
}

function nmberEqual() {
    const num = document.getElementById('num-3').value;
    let sum = 0;
    for(let i=0; i<num.length; i++){
        sum = sum+parseInt(num[i])
    }
    document.getElementById('display-3').innerText = sum
}