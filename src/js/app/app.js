"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const axios_1 = __importDefault(require("axios"));
const prompter = (0, prompt_sync_1.default)();
while (true) {
    console.log("TodoApp v.1.0");
    console.log("1) Create a todo.");
    console.log("2) Delete a todo.");
    console.log("3) Change a todo.");
    console.log("4) Display all todos.");
    console.log("5) Clear checked todos.");
    console.log("6) Exit.");
    var userInput = prompter("Your input: ");
    if (userInput == "1") {
        console.clear();
        while (true) {
            console.log("- Create a todo.");
            var todoName = prompter("Name: ");
            var todoDesc = prompter("Description: ");
            if ((todoName == undefined || todoName == "") || (todoDesc == undefined || todoDesc == "")) {
                console.log("Invalid field inputs.");
            }
            else {
                console.log("Valid inputs.");
                break;
            }
        }
        var todo = {
            Name: todoName,
            Description: todoDesc,
            isChecked: 0
        };
        axios_1.default
            .post("http://localhost:8080/api/create", JSON.stringify(todo))
            .then(res => {
            console.log(res);
        })
            .catch(error => {
            console.log(error);
        });
    }
    else if (userInput == "2") {
        console.log("Input 1");
    }
    else if (userInput == "3") {
        console.log("Input 1");
    }
    else if (userInput == "4") {
        console.log("Input 1");
    }
    else if (userInput == "5") {
        console.log("Input 1");
    }
    else if (userInput == "6") {
        console.log("Input 6");
        break;
    }
    else {
        console.clear();
        console.log("Invalid input.\n");
    }
}
