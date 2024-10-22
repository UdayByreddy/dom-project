let valueBox = document.getElementById("value_box");
let plusButton = document.getElementById("plus");
let miusButton = document.getElementById("minus");
let targetBox = document.getElementById("target_box");
let reset = document.getElementById("reset");


reset.addEventListener("click",()=>{
    valueBox.value=0;
});
plusButton.addEventListener("click",()=>{
    let value = Number(valueBox.value);
    let target = Number(targetBox.value);
    valueBox.value=value+target;
});
miusButton.addEventListener("click",()=>{
    let value = Number(valueBox.value);
    let target = Number(targetBox.value);
    valueBox.value = value-target;
   });

