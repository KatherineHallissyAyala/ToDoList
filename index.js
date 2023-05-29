function App(){
    const [todos, setTodos] = React.useState(
        [
            {
                text: 'go food shopping',
                isCompleted: false,
            },
            {
                text: 'exercise',
                isCompleted: false,
            },
            {
                text: 'fold the laundry',
                isCompleted: false,
            },
            {
                text: 'open the mail',
                isCompleted: false,
            }
        ]
    );
    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}]
        setTodos(newTodos); 
    }
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }
    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, i) => (
                    <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
            ))}
            <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    ); //return our jsx
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );