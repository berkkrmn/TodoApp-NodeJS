import sqlite3 from "sqlite3"

const dbName = "././db/todoDB.db";
var todoID = 0;

export class TodosController {
    
    createTodo = (req: any,res: any) => {

        const db = new sqlite3.Database(dbName, (error: any) => {
            
            // Handle db connection errors.
            if(error) {
                console.log("DB connection error: " + error);
            }else {
                
                // Prepare insert query.
                console.log("Connected to database.");
                const query = "INSERT INTO TODO_TABLE (ID,NAME,DESCRIPTION,IS_CHECKED) VALUES (?,?,?,?)"
                const queryParams = [todoID,req.body.Name,req.body.Description,req.body.isChecked];
                
                // Run query.
                db.run(query, queryParams, (error: any, result: any) => {
                    
                    // Handle insert errors.
                    if(error) {
                        console.log("DB ERROR: " + error);
                        console.log("Sending reponse...");
                        res.status(400).send(JSON.stringify({
                            Message: "An error occurred when creating the todo."
                        }));
                    }else {
                        console.log("Todo successfully inserted.");
                        console.log("Sending reponse...");
                        res.status(200).send(JSON.stringify({
                            Message: "Todo successfully created. ID: " + todoID
                        }));
                        todoID = todoID + 1;
                    }
                });
            }
        })
    }

    updateTodo = (req: any,res: any) => {

        return res.send("Successfull update.");
    }

    deleteTodo = (req: any,res: any) => {

        return res.send("Successfull create.");
    }

}