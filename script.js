
let todos= []
function addTask(){
    let task = document.getElementById("task-name").value ;
    let date = document.getElementById("task-date").value;
    todos.push({task_name : task,task_date: date});
     

    render_card();
}


function render_card(){
    list = document.getElementById("lists");
    list.innerHTML= "";
    for (let i = 0;i<todos.length;i++){
        list.innerHTML+=` 
        <div class="task-card" > 
            ${i+1}.
            ${todos[i].task_name} due on ${todos[i].task_date}
            <input type="checkbox" class="completed"></input>
            <button onclick="deleteTask(${i})">Delete</button>
        
        `
    }

    document.getElementById("task-name").value = "";
    document.getElementById("task-date").value = "";
}

function deleteTask(i){
    list = document.getElementById("lists");
    list.innerHTML= "";
    todos.splice(i,1);
    for (let j = 0;j<todos.length;j++){
        list.innerHTML+=` 
        <div class="task-card" > 
            ${j+1}.
            ${todos[j].task_name} due on ${todos[j].task_date}
            <input type="checkbox" class="completed"></input>
            <button onclick="deleteTask(${i})">Delete</button>
        
        `
    }
}

