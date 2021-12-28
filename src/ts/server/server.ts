import express from "express"
import {serverRoutes} from "./routes"

const server = express();
const port = 8080;
server.use((req, res, next) => {
    return next();
})

server.use(express.json());
serverRoutes(server);

server.listen(port, () => {
    console.clear();
    console.log("Server is up at: " + port);
})
