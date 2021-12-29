"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const axios_1 = __importDefault(require("axios"));
const prompter = (0, prompt_sync_1.default)();
const serverUrl = "http://localhost:8080";
var mainMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("TodoApp v.1.0");
    console.log("1) Create a todo.");
    console.log("2) Delete a todo.");
    console.log("3) Change a todo.");
    console.log("4) Display all todos.");
    console.log("5) Clear checked todos.");
    console.log("6) Exit.");
    var userInput = prompter("Your input: ");
    if (userInput == "1") {
        return createTodo();
    }
    else if (userInput == "2") {
        return deleteTodo();
    }
    else if (userInput == "3") {
        return updateTodo();
    }
    else if (userInput == "4") {
        return displayTodos();
    }
    else if (userInput == "5") {
        return clearTodos();
    }
    else if (userInput == "6") {
        console.log("Shutting down.");
    }
    else {
        console.clear();
        console.log("Invalid input.\n");
        return mainMenu();
    }
});
var createTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    console.log("- Create a todo.");
    // Take user inputs.
    var todoName = prompter("Name: ");
    var todoDesc = prompter("Description: ");
    // Fields cannot be empty.
    if ((todoName == undefined || todoName == "") || (todoDesc == undefined || todoDesc == "")) {
        console.clear();
        console.log("Invalid field inputs.");
    }
    else {
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
        yield axios_1.default.post(createUrl, todo)
            .then(response => {
            console.clear();
            console.log("Server response: " + response.data);
            console.log("Successfully created todo: " + todoName + "\n");
        })
            .catch(error => {
            console.clear();
            console.log("Server response: " + error.data);
            console.log("An error occurred during creation process.\n");
        });
    }
    return mainMenu();
});
var deleteTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    console.log("Not yet implemented.\n");
    return mainMenu();
});
var updateTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    console.log("Not yet implemented.\n");
    return mainMenu();
});
var displayTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    console.log("- Display all todos.");
    console.log("Connecting to server...");
    const displayUrl = serverUrl + "/api/display";
    yield axios_1.default.get(displayUrl)
        .then(response => {
        console.clear();
        console.log("- Display all todos.");
        console.log(response.data);
    })
        .catch(error => {
        console.clear();
        console.log("Server response: " + error.data);
        console.log("An error occurred during fetching process.\n");
    });
    return mainMenu();
});
var clearTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    console.log("Not yet implemented.\n");
    return mainMenu();
});
mainMenu();
