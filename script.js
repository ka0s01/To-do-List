

let state = {
    todos : [],
    completed: [],
    theme : "light",

};
function addTask(){
    let task = document.getElementById("task-name").value ;
    let date = document.getElementById("task-date").value;
    state.todos.push({task_name : task,task_date: date, completed: false});
     
    document.getElementById("task-name").value = "";
    document.getElementById("task-date").value = "";
    render_card();
}

let listEl = document.getElementById("lists");
function render_card(){
    listEl.innerHTML=``;
    state.todos.forEach((todo,i) => {
        if(!todo.completed){
            const task_card = document.createElement("div");
            task_card.className = "task-card";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.dataset.index = i;
            checkbox.checked = todo.completed;

            const text = document.createElement("span");
            text.textContent = `${i}.  ${todo.task_name} - ${todo.task_date}`;

            const dltBtn = document.createElement("button");
            dltBtn.textContent = "Delete";
            dltBtn.dataset.action = "delete";
            dltBtn.dataset.index = i;
            task_card.append(text,checkbox,dltBtn);
            listEl.append(task_card);
        }
        
    });

}
listEl.addEventListener("click", handleClick);

function handleClick(e){
    if(e.target.dataset.action == "delete"){
        const idx = e.target.dataset.index;
        deleteTask(idx);
    }
}


function deleteTask(idx){
    state.todos.splice(idx,1);
    render_card();
}





