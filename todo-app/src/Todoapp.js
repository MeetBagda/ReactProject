import React, { useState } from "react";
import './index.css';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState("");

    const handleAddTodo = () => {
        if (inputText.trim() !== "") {
            setTodos([...todos, { id: Date.now(), text: inputText }]);
            setInputText("");
        }
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleUpdateTodo = (id, updatedText) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: updatedText };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleUpdateTodoStart = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isEditing: true, updatedText: todo.text };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleUpdateInputChange = (id, text) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, updatedText: text };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleUpdateTodoFinish = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isEditing: false, text: todo.updatedText };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <div className="heading">
                <h1 className="gradient-heading">Todo App Using Crud</h1>
            </div>
            <input
                id="inputBox"
                type="text"
                value={inputText}
                onFocus={e => e.target.style.borderColor = '#c5c4c4'}
                onBlur={e => e.target.style.borderColor = ''}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        handleAddTodo();
                    }
                }}
                onChange={e => setInputText(e.target.value)}
            />
            <button className="todobtn btn btn-primary" onClick={handleAddTodo}>Add ToDo</button>
            <ol type="number">
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button className="btn btn-danger todobtn" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        <button className="btn btn-primary todobtn" onClick={() => handleUpdateTodoStart(todo.id)}>Update</button>
                        {todo.isEditing && (
                            <div>
                                <input
                                    id="inputBox"
                                    type="text"
                                    value={todo.updatedText || ""}
                                    onChange={e => handleUpdateInputChange(todo.id, e.target.value)}
                                    onKeyDown={e => {
                                        if (e.key === "Enter") {
                                            handleUpdateTodoFinish(todo.id);
                                        }
                                    }}
                                />
                                <button className="btn btn-success todobtn" onClick={() => handleUpdateTodoFinish(todo.id)}>Save</button>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}
