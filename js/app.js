var taskInput = document.querySelector("#taskInput");
var addButton = document.querySelector("#addTaskButton");
var removeButton = document.querySelector("#removeFinishedTasksButton");
var list = document.querySelector("#taskList");
var body = document.querySelector("body");
var newP = document.createElement("p");
body.insertBefore(newP, list);
var newInput = document.createElement("input");
body.insertBefore(newInput, addButton);
newInput.placeholder = "Priority level";
newInput.type = "number";

// Number of tasks left counter

var numberOfTasksLeft = 0;

// Add Task Button

addButton.addEventListener("click", function() {


    if (taskInput.value.length <= 5) {
        alert("Your task's name is too short")
    } else if (taskInput.value.length > 99) {
        alert("Your task's name is too long")
    } else if (newInput.value > 10) {
        alert("Task's value must be from 1 to 10")
    } else if (newInput.value.length > 1) {
        alert("Task's value must be from 1 to 10")
    } else if (taskInput.value.length > 5 && taskInput.value.length < 100 && newInput.value > 0 && newInput.value < 11) {
        numberOfTasksLeft++

        // New Li element

        newLi = document.createElement("li");
        newH1 = document.createElement("h1");
        newH1.innerText = newInput.value + " " + taskInput.value;
        newLi.appendChild(newH1);
        list.appendChild(newLi);

        // sorting list by priority level

        var allTasks = document.querySelectorAll("li");
        var allTasksList = [];
        for (var i = 0; i < allTasks.length; i++) {
            allTasksList.push(allTasks[i]);
        }

        var sortedTasks = allTasksList.sort(function(a, b) {
            return parseInt(b.firstElementChild.innerText, 10) - parseInt(a.firstElementChild.innerText, 10);
        });

        for (var i = 0; i < allTasksList.length; i++) {
            allTasksList[i].parentElement.removeChild(allTasksList[i]);

        }

        for (var i = 0; i < sortedTasks.length; i++) {
            list.appendChild(sortedTasks[i]);
        }

        // Delete task button

        newButton1 = document.createElement("button");
        newLi.appendChild(newButton1);
        newButton1.innerText = "Delete";

        // Task completed button

        newButton2 = document.createElement("button");
        newLi.appendChild(newButton2);
        newButton2.innerText = "Complete";

        // Delete task and task completed buttons addEventListeners

        var clickCount = 0;

        newButton1.addEventListener("click", function() {

            if (clickCount % 2 === 1) {
                this.parentElement.parentElement.removeChild(this.parentElement);
                newP.innerText = "Pozostało " + numberOfTasksLeft + " zadań do zrobienia";
            } else if (clickCount % 2 !== 1) {
                this.parentElement.parentElement.removeChild(this.parentElement);
                numberOfTasksLeft--;
                newP.innerText = "Pozostało " + numberOfTasksLeft + " zadań do zrobienia";
            }
        });

        newButton2.addEventListener("click", function() {
            clickCount++;
            if (clickCount % 2 === 1) {
                this.previousElementSibling.previousElementSibling.style.color = "red";
                numberOfTasksLeft--;
                newP.innerText = "Pozostało " + numberOfTasksLeft + " zadań do zrobienia";
            } else if (clickCount % 2 !== 1) {
                this.previousElementSibling.previousElementSibling.style.color = "black";
                numberOfTasksLeft++;
                newP.innerText = "Pozostało " + numberOfTasksLeft + " zadań do zrobienia";
            }
        });
        taskInput.value = "";
        newInput.value = "";

    }
    newP.innerText = "Pozostało " + numberOfTasksLeft + " zadań do zrobienia";
});


// Remove all completed tasks button

removeButton.addEventListener("click", function() {
    var toDelete = document.querySelectorAll("li");
    for (var i = 0; i < toDelete.length; i++) {
        if (toDelete[i].firstElementChild.style.color === "red") {
            toDelete[i].parentElement.removeChild(toDelete[i]);
        }
    }

});