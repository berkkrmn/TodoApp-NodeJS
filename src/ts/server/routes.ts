import Express from "express"
import {TodosController} from "./controllers/todosController"

export function serverRoutes(server: Express.Express) {
    // Root directory.
    server.get("/", (req,res) => {
        res.send("Server is up.");
    });

    // Create todo - endpoint.
    server.post("/api/create", (req,res) => {
        console.log("Routing to controller: Create");
        console.log("Request: " + JSON.stringify(req.body));
        var controller = new TodosController().createTodo(req,res);
    })

    // Display todos - endpoint.
    server.get("/api/display", (req,res) => {
        console.log("Routing to controller: Display");
        console.log("Request: " + JSON.stringify(req.body));
        var controller = new TodosController().displayTodos(req,res);
    })
    
}