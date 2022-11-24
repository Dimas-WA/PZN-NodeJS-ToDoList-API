import http from "http";
import { TodoListService } from "./todolist-service.mjs";

const service = new TodoListService;
const server = http.createServer((request, response)=>{
    // response.write("To Do List API");
    // response.end();
    response.setHeader("Content-Type", "application/json");

    if (request.method === "GET") {
        service.getTodoList(request, response);
    } else if (request.method === "POST") {
        service.createTodoList(request, response);
    } else if (request.method === "PUT") {
        service.updateTodo(request, response);
    } else if (request.method === "DELETE") {
        service.deleteTodo(request, response);
    }

});

server.listen(3000);