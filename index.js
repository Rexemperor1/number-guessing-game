let minN = 50;
let maxN = 100;
let randM = Math.floor(Math.random() *(maxN - minN) + minN);
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let res = document.getElementById("res");
let attempts = 0;
btn.onclick = function (){
    let inn = Number(input.value);
    attempts++;
    if (isNaN(inn)) {
        window.alert("Alaye ☠️ your input must be a number")
        input.value = 0;
    }
    else if(inn < minN || inn > inn){
        window.alert(`your guess number must be between the range of ${minN} - ${maxN}`);
        input.value = 0;
    }
    else if(inn > randM){
       window.alert(`your input is too high, try something lower than this`);
       input.value = 0;
    }
    else if(inn < randM){
       window.alert(`your input is too low, try something higher than ${inn}`);
       input.value = 0;
    }
  //  else if(inn > randM || inn < randM) {
        
  //  }
    else{
        window.alert(`Correct 💯 👍 the correct answer is ${randM}. it took you ${attempts} attempts before you hit the correct number`);
        
        attempts = 0;
    }
    if (inn == randM) {
        res.style.display =  "block";
        btn.style.display =  "none";
    }
    res.onclick = function() {
    randM = Math.floor(Math.random() *(maxN - minN) + minN);
    res.style.display =  "none";    
    btn.style.display =  "block";
    input.value = 0;
}
}

  
