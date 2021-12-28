"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const server = (0, express_1.default)();
const port = 8080;
server.use((req, res, next) => {
    return next();
});
server.use(express_1.default.json());
(0, routes_1.serverRoutes)(server);
server.listen(port, () => {
    console.clear();
    console.log("Server is up at: " + port);
});
