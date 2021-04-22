let list = 
document.querySelector(".list");
let addBtn = document.querySelector(".addBtn");
let data = JSON.parse(localStorage.getItem('todo'))||[];

list.addEventListener("click",delTodo);
addBtn.addEventListener("click",addTodo);
updateList(data);

function addTodo(e){
 e.preventDefault();
let day = new Date();
  let inText = document.querySelector(".inText").value;
   if(inText.length<2){
   alert("請輸入文字");
   return;
   };
 let oneTodo = {
    content: inText,
    time:day
  };
  data.push(oneTodo);
  localStorage.setItem('todo',
                       JSON.stringify(data));
  updateList();
};

function delTodo(e){
e.preventDefault();
if (e.target.nodeName !== 'BUTTON') { return };
  let todoNum = e.target.dataset.num;
  data.splice(todoNum,1);
  localStorage.setItem('todo', JSON.stringify(data));
  updateList();
};
// 更新列表
function updateList(){
  let strList = '';
  for(let i=0 ; i < data.length ; i++){
    let time =  new Date(data[i].time).toLocaleTimeString();
    strList +=`<li>${data[i].content}－${time}<button class="delBtn" data-num="${i}">刪除</button></li>`;
  };
  list.innerHTML = strList;
};






