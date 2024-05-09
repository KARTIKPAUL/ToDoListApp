let inputBox = document.getElementById('inputBox');
let listContainer = document.getElementById('listContainer');
let btn = document.getElementById('btn');

function addtask(){
    let val = inputBox.value;
    if(val == ''){
        alert("You Must Write Something");
    }else{
        let li = document.createElement('li');
        li.innerHTML = val;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
    savedata();
}

btn.addEventListener('click',addtask);

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    savedata();
    }else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    savedata();
    }
    },false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();





