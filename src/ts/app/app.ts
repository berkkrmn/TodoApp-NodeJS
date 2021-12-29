import PromptSync from "prompt-sync"
import client from "axios"

const prompter = PromptSync();
const serverUrl = "http://localhost:8080";

var mainMenu = async (): Promise<any> => {
    console.log("TodoApp v.1.0");
    console.log("1) Create a todo.");
    console.log("2) Delete a todo.");
    console.log("3) Change a todo.");
    console.log("4) Display all todos.");
    console.log("5) Clear checked todos.");
    console.log("6) Exit.");
    var userInput = prompter("Your input: ");
    if(userInput == "1") {
        return createTodo();
    }else if (userInput == "2") {
        return deleteTodo();
    }else if (userInput == "3") {
        return updateTodo();
    }else if (userInput == "4") {
        return displayTodos();
    }else if (userInput == "5") {
        return clearTodos();
    }else if (userInput == "6") {
        console.log("Shutting down.");
    }else {
        console.clear();
        console.log("Invalid input.\n");
        return mainMenu();
    }
}

var createTodo = async () => {
    console.clear();
    console.log("- Create a todo.");

    // Take user inputs.
    var todoName = prompter("Name: ");
    var todoDesc = prompter("Description: ");

    // Fields cannot be empty.
    if((todoName == undefined || todoName == "") || (todoDesc == undefined || todoDesc == "")) {
        
        console.clear();
        console.log("Invalid field inputs.");    
    }else {
        console.log("Creating todo...");

        // Create todo.
        var todo = {
            Name: todoName,
            Description: todoDesc,
            isChecked: 0
        };

        // Call the server.
        console.log("Connecting to server...");
        const createUrl = serverUrl + "/api/create";
        await client.post(createUrl, todo)
            .then(response => {
                console.clear();
                console.log("Server response: " + response.data);
                console.log("Successfully created todo: " + todoName + "\n");
            })
            .catch(error => {
                console.clear();
                console.log("Server response: " + error.data);
                console.log("An error occurred during creation process.\n");
            })
    }
    return mainMenu();
}

var deleteTodo = async () => {
    console.clear();
    console.log("Not yet implemented.\n");
    return mainMenu();
}

var updateTodo = async () => {
    console.clear();
    console.log("Not yet implemented.\n");
    return mainMenu();
}

var displayTodos = async () => {
    console.clear();
    console.log("- Display all todos.");
    console.log("Connecting to server...");
    const displayUrl = serverUrl + "/api/display";
    await client.get(displayUrl)
        .then(response => { 
            console.clear();
            console.log("- Display all todos.");
            console.log(response.data);
        })
        .catch(error => {
            console.clear();
            console.log("Server response: " + error.data);
            console.log("An error occurred during fetching process.\n");
        })

    return mainMenu();
}

var clearTodos = async () => {
    console.clear();
    console.log("Not yet implemented.\n");
    return mainMenu();
}

mainMenu();
