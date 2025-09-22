
let tasks=[]

let task=document.getElementById('task')
let addtask=document.getElementById("addtask")
let container=document.getElementById("container")

addtask.addEventListener('click',()=>{
    if (!task.value) return; 
    let data={id:Date.now(),task:task.value,complete:false}
    tasks.push(data)
    task.value = ""; 
    fetchdata()
})

function fetchdata(){
    container.innerHTML = ""; 
    tasks.forEach((e,i)=>{
        let div=document.createElement('div')
        div.innerHTML=`
        <h1 id="${i}" style="${e.complete ? 'text-decoration: line-through;' : ''}">${i + 1}. ${e.task}</h1>
        <button onclick="complete(${e.id},${i})">${e.complete ? 'not complete' : 'Complete'}</button>
        <button onclick="deleteTask(${e.id})">Delete</button>
        `
        container.appendChild(div)
    })
}

window.complete = function(id,i){
    let task = tasks.find(task => task.id === id);
    if (task) {
        task.complete = !task.complete;
    }
    fetchdata();
}

window.deleteTask = function(id){
    tasks = tasks.filter(task => task.id !== id);
    fetchdata(); 
}