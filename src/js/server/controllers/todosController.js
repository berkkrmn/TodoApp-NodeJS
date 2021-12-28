"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const dbName = "././db/todoDB.db";
var todoID = 0;
class TodosController {
    constructor() {
        this.createTodo = (req, res) => {
            const db = new sqlite3_1.default.Database(dbName, (error) => {
                // Handle db connection errors.
                if (error) {
                    console.log("DB connection error: " + error);
                }
                else {
                    // Prepare insert query.
                    console.log("Connected to database.");
                    const query = "INSERT INTO TODO_TABLE (ID,NAME,DESCRIPTION,IS_CHECKED) VALUES (?,?,?,?)";
                    const queryParams = [todoID, req.body.Name, req.body.Description, req.body.isChecked];
                    // Run query.
                    db.run(query, queryParams, (error, result) => {
                        // Handle insert errors.
                        if (error) {
                            console.log("DB ERROR: " + error);
                            console.log("Sending reponse...");
                            res.status(400).send(JSON.stringify({
                                Message: "An error occurred when creating the todo."
                            }));
                        }
                        else {
                            console.log("Todo successfully inserted.");
                            console.log("Sending reponse...");
                            res.status(200).send(JSON.stringify({
                                Message: "Todo successfully created. ID: " + todoID
                            }));
                            todoID = todoID + 1;
                        }
                    });
                }
            });
        };
        this.updateTodo = (req, res) => {
            return res.send("Successfull update.");
        };
        this.deleteTodo = (req, res) => {
            return res.send("Successfull create.");
        };
    }
}
exports.TodosController = TodosController;
