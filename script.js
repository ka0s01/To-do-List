

let state = {
    todos : [],
    theme : "light",

};

function addTask(){
    let task = document.getElementById("task-name").value ;
    let date = document.getElementById("task-date").value;
    state.todos.push({task_name : task,task_date: date, completed: false});
     
    document.getElementById("task-name").value = "";
    document.getElementById("task-date").value = "";
    render();
}

let listEl = document.getElementById("lists");
let completedEl = document.getElementById("completed-tasks");

function render(){
    listEl.innerHTML=``;
    let display_index = 1;
    state.todos.forEach((todo,i) => {
        if(!todo.completed){
            const task_card = document.createElement("div");
            task_card.className = "task-card";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.dataset.index = i;
            checkbox.checked = todo.completed;
            checkbox.dataset.action = "completed";

            const text = document.createElement("span");
            text.textContent = `${display_index}.  ${todo.task_name} - ${todo.task_date}`;

            const dltBtn = document.createElement("button");
            dltBtn.textContent = "Delete";
            dltBtn.dataset.action = "delete";
            dltBtn.dataset.index = i;
            task_card.append(text,checkbox,dltBtn);
            listEl.append(task_card);
            display_index++;
        }
        
    });

}

function render_completed_tasks(){
    completedEl.innerHTML=``;
    const now = new Date();
    state.todos.forEach((todo,i) =>{
        if(todo.completed){
            const completed_card = document.createElement("div");
            completed_card.className = "completed-card";

            const text = document.createElement("span");
            text.textContent = ` ${todo.task_name} completed on ${now.toDateString()}`;

            completed_card.append(text);
            completedEl.append(completed_card);
        }



    })
}


function handleClick(e){
    if(e.target.dataset.action == "delete"){
        const idx = e.target.dataset.index;
        deleteTask(idx);
    }
}
function handleChange(e){
    if(e.target.dataset.action == "completed"){
        const idx = e.target.dataset.index;
        completeTask(idx);
    }
}

function deleteTask(idx){
    state.todos.splice(idx,1);
    render();
}

function completeTask(i){
    state.todos[i].completed = true;
    render();
    render_completed_tasks();
}


listEl.addEventListener("click", handleClick);
listEl.addEventListener("change",handleChange);





