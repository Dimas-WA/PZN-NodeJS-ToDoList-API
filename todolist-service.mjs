export class TodoListService {

    todolist = ["Programmer", "Zaman", "Now"];

    getJsonToDoList(){
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index)=>{
                return {
                    id: index,
                    todo: value
                }
            })
        });
    }

    getTodoList(request, response){
        response.write(this.getJsonToDoList());
        response.end();
    }

    createTodoList(request, response){
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

                
            response.write(this.getJsonToDoList());
            response.end();
        })
    }

    updateTodo(request, response){
        request.addListener("data", (data)=>{
            const body = JSON.parse(data.toString());
            
            // cek ada ga todonya by ID
            if (this.todolist[body.id]) {
                this.todolist[body.id] = body.todo;
            }
            
            response.write(this.getJsonToDoList());
            response.end();
        })
    }

    deleteTodo(request, response){
        
        request.addListener("data", (data)=>{
            const body = JSON.parse(data.toString());
            
            // cek ada ga todonya by ID
            if (this.todolist[body.id]) {
                this.todolist.splice(body.id, 1);
            }
            
            response.write(this.getJsonToDoList());
            response.end();
        })
    }

}