"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverRoutes = void 0;
const todosController_1 = require("./controllers/todosController");
function serverRoutes(server) {
    // Root directory.
    server.get("/", (req, res) => {
        res.send("Server is up.");
    });
    // Create todo - endpoint.
    server.post("/api/create", (req, res) => {
        console.log("Routing to controller: Create");
        console.log("Request: " + JSON.stringify(req.body));
        var controller = new todosController_1.TodosController().createTodo(req, res);
    });
    // Create todo - endpoint.
    server.get("/api/update", (req, res) => {
        console.log(req.body);
        var controller = new todosController_1.TodosController().updateTodo(req, res);
    });
}
exports.serverRoutes = serverRoutes;
