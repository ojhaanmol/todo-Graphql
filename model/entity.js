const todos = [
    {
        id : "1",
        text : "wake up.",
        completed : false
    }
]

const addTodo = async({text}) => {
    if (typeof text !== 'string' || !text )
        throw `type of todo.id required [ string ] getting [ ${typeof text} ]`;
    const todo = {
        id : todos.length+1,
        text,
        completed : false
    };
    todos.push( todo );
    return todo;
}

const completeTodo = ({id}) => {
    if (typeof id !== 'string' || !id )
        throw `type of todo.id required [ string ] getting [ ${typeof text} ]`;
    const todo = todos.find( todoFromTodos => todoFromTodos.id === id );
    if ( !todo ) 
        throw `could not find any Todo`;
    todo.completed = true;
    return todo;
}

module.exports = {
    todos,
    addTodo,
    completeTodo
}