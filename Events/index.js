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

function inputMarks() {
    const mark = parseFloat(document.getElementById('num-4').value);
    let dis = "";

    if(mark >= 75){
        dis = "A"
    }else if(mark >=65){
        dis = "B"
    }else if(mark >= 45){
        dis = "C"
    }else if(mark >= 35){
        dis = "S"
    }else{
        dis = "Fail..!"
    }
    document.getElementById('display-4').innerText = dis;
}

function inputShortName() {
    let fullName = "";
    const userInput = document.getElementById("num-5").value

switch (userInput) {
    case 'intern': 
    fullName = "Intern Software Engineer";
    break;
  case "se":
    fullName = "Software Engineer";
    break;
  case "ase":
    fullName = "Associate Software Engineer";
    break;
  case "sse":
    fullName = "Senior Software Engineer";
    break;
  case "atl":
    fullName = "Assistant Tech Lead";
    break;
  case "tl":
    fullName = "Tech Lead";
    break;
  default:
    fullName = "error key word..!";
    break;
}
document.getElementById('display-5').innerText = fullName;
}

const nameArray = [];
function saveApp() {
    const userInput = document.getElementById("num-6").value
     nameArray.push(userInput);
     document.getElementById("num-6").value = "";
}

function print() {
    document.getElementById('display-6').innerText = nameArray;
}


function loginAction() {
    const uName = "admin";
    const uPass = "123";
    const userName = document.getElementById("num-7").value
    const password = document.getElementById("num-8").value
    let dis = ""
    if(uName.toLowerCase() == userName.toLowerCase() && uPass.toLowerCase() == password.toLowerCase()){
        dis = 'Login Success..!'
    }else{
        dis = 'Login Fail..!'
    }
    document.getElementById('display-7').innerText = dis;
}