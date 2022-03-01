class Todo {
    id:string;
    text:string;

    constructor(textTodo:string){
        this.text= textTodo
        this.id= new Date().toISOString()
    }
}

export default Todo