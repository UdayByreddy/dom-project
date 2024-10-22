let textBox = document.getElementById("text_box");
let itemsList = document.getElementById("items_list");

textBox.addEventListener("keydown",(e)=>{
    if(e.key==='Enter')
       enterFunction();
    }
);
function enterFunction(){
    let value = textBox.value;
    if(value.length>0){
        let heading = document.querySelector("#message");
        if(heading){
            itemsList.removeChild(heading);
        }
        let item = document.createElement("li");
        item.innerHTML = value + ' <i class="fa-solid fa-pencil"></i> <i class="fa-solid fa-trash"></i> ';
        itemsList.appendChild(item);
         textBox.value="";
    }
}
itemsList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-trash")){
        let item = e.target.parentElement;
        itemsList.removeChild(item);
        if(itemsList.children.length===0){
            let heading = document.createElement("h1");
            heading.id ="message"
            heading.innerText = "OOPS List is empty";
            itemsList.appendChild(heading);
        }
    }
});

itemsList.addEventListener('click',(e)=>{
    if(e.target.classList.contains("fa-pencil")){
       let listItem = e.target.parentElement;
       let value = listItem.firstChild.textContent.trim();
       let input = document.createElement("input");
       input.type ="text";
       input.value = value;
       
       let icon = document.createElement("i");
       icon.classList.add("fa-solid","fa-floppy-disk");

       let icon1 = document.createElement("i");
       icon1.classList.add("fa-solid","fa-trash");

       listItem.innerHTML="";
       listItem.appendChild(input);
       listItem.appendChild(icon);
       listItem.appendChild(icon1);
       icon.addEventListener('click',()=>{
        let newValue = input.value;
        listItem.innerHTML = newValue +' <i class="fa-solid fa-pencil"></i> <i class="fa-solid fa-trash"></i>';
       })
    }
})