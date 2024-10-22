let leftItems = document.getElementsByClassName("left_items")[0];
let rightItems = document.getElementsByClassName("right_items")[0];
let leftAll = document.getElementById("button1");
let left = document.getElementById("button2");
let right = document.getElementById("button3");
let rightAll =document.getElementById("button4");

leftAll.addEventListener("click",(e)=>{
   while(rightItems.children.length>0){
    let listItem = rightItems.children[0];
    leftItems.appendChild(listItem);
   }
});

rightAll.addEventListener("click",(e)=>{
    while(leftItems.children.length>0){
        let listItem = leftItems.children[0];
        rightItems.appendChild(listItem);
    }
});
left.addEventListener("click",()=>{
  moveCheckedItems(rightItems,leftItems);
});
right.addEventListener("click",()=>{
    moveCheckedItems(leftItems,rightItems);
});

function moveCheckedItems(source,target){
    let items = source.querySelectorAll("li");
    items.forEach((item)=>{
        let check = item.querySelector("input[type='checkbox']");
        if(check&&check.checked){
            target.appendChild(item);
        }
        check.checked= false;
    });
}