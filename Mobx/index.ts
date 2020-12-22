import { observable ,computed} from 'mobx';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Todo {
    id = Math.random();
    @observable title = '';
    @observable finished = false;
}

class ToDoList {
    @observable todos = [] ;
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
}}

@observable
class TodoListView extends Component {
    render(){
        return <div>
            {this.props.tooList.todos.map( todo => 
                < TodoView todo ={ todo } key = { todo.id} />
            )}
            Tasks left: { this.props.todoList.undinishedTodoCount}
        </div>

    }
}

const TodoView = observer(({todo}) => <li>
    <input/> { todo.title}
</li>)

const store = new TodoList();
ReactDOM.render( <TodoListView todoList = {store} />, document.getElementById('mount'))