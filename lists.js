const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("addbtn");
const taskList = document.getElementById("eachTask")

//This will create a new element (list item) that will show up as a task.
function createTaskElement (userTask) {
    const li = document.createElement ("li");

    //This will create a new p element to display the tasks in the li element.
    let p = document.createElement("p");
    
    //This will turn what the users put in as their tasks and put it as the p-element to go into the li element.
    p.innerText = userTask;
    
    //This makes the p element a child of the li element.
    li.appendChild(p);

    //
    const finishButton = document.createElement("button");
    finishButton.className = "finish-btn";
    finishButton.textContent = "Finished";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    //Once user CLICKS "finished", the task will be slashed through on the list.
    finishButton.addEventListener("click", function () {
        slashThrough(li);
    });

    //Once user CLICKS "delete", the task will be removed off list.
    deleteButton.addEventListener("click", function () {
        removeElement(li);
    });

    //This will put the finish and delete button as children elements to the li
    li.appendChild(finishButton);
    li.appendChild(deleteButton);
    return li;
}

//This allows the "finish" button to slash the items on the list.
function slashThrough(taskItem){
    taskItem.style.textDecoration = "line-through";
}

//This allows the "remove button" to take out the task from the list.
function removeElement(taskItem){
    taskItem.remove();
}


function newElement() {
    // Get the user task from the input field
    let userTask = inputElement.value;

    if (userTask) {
        // Create a new list item (li) element
        const taskElement = createTaskElement(userTask);

        const finishButton = taskElement.querySelector(".finish-btn");
        const deleteButton = taskElement.querySelector(".delete-btn");
        finishButton.style.display = "inline-block";
        deleteButton.style.display = "inline-block";

        // Append the new list item to the task list (ul)
        taskList.appendChild(taskElement);

        // After the user adds a task and it gets added, the input field clears "automatically" on their end so they can add new stuff without having to clear it before. 
        inputElement.value = '';
    }
}

//When user clicks the blue "add" button, their task will appear below.    
buttonElement.addEventListener("click", newElement)
