import React, { useState, useRef } from "react";
import styles from "./Todo.module.css"
import { useAutoAnimate } from '@formkit/auto-animate/react'

let TodoApp = () => {

    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const handleDragSort = () => {
        let updatedTasks = [...tasks];

        const draggedItemContent = updatedTasks.splice(dragItem.current, 1)[0];

        updatedTasks.splice(dragOverItem.current, 0, draggedItemContent);

        dragItem.current = null;
        dragOverItem.current = null;

        setTasks(updatedTasks);
    };

    const [parent] = useAutoAnimate()
    const [tasks, setTasks] = useState(["Prepare for assignment", "Go to the gym", "Check emails"]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editTaskText, setEditTaskText] = useState(""); 

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const editTask = (index) => {
        setEditIndex(index);
        setEditTaskText(tasks[index]);
    };

    const saveEdit = (index) => {
        if (editTaskText.trim() !== "") {
            const updatedTasks = [...tasks];
            updatedTasks[index] = editTaskText;
            setTasks(updatedTasks);
            
            setEditIndex(null);
            setEditTaskText("");
        }
    };

    const cancelEditing = () => {
        setEditIndex(null);
        setEditTaskText("");
    };

    const deleteTask = (index) => {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
        if (editIndex === index) {
            cancelEditing();
        }
    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="card bg-base-200 w-full max-w-md shadow-2xl mx-auto border border-base-300">
            <div className="card-body">
                <h1 className="card-title text-3xl font-extrabold mb-6 justify-center">To do list</h1>

                <div className="join w-full mb-8">
                    <input
                        type="text"
                        placeholder="Enter new task..."
                        value={newTask}
                        onChange={handleInputChange}
                        className="input input-bordered join-item w-full focus:outline-none" 
                        onKeyDown={(e) => e.key === 'Enter' && addTask()}
                    />
                    <button 
                        className="btn btn-primary join-item" 
                        onClick={addTask}
                    >
                        Add
                    </button>
                </div>

                <ol ref={parent}>
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            draggable={editIndex !== index}
                            onDragStart={() => (dragItem.current = index)}
                            onDragEnter={() => (dragOverItem.current = index)}
                            onDragEnd={handleDragSort}
                            onDragOver={(e) => e.preventDefault()}>

                            {editIndex === index ? (
                                // Edit UI
                                <div className={styles.editModeContainer}>
                                    <input
                                        type="text"
                                        value={editTaskText}
                                        onChange={(e) => setEditTaskText(e.target.value)}
                                        className={styles.editInput}
                                        autoFocus
                                        onKeyDown={(e) => e.key === 'Enter' && saveEdit(index)}
                                    />
                                    <div className={styles.editActionBtn}>
                                        <button className={styles.saveBtn} onClick={() => saveEdit(index)}>Save</button>
                                        <button className={styles.cancelBtn} onClick={cancelEditing}>Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                // Default UI 
                                <>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center bg-base-100 p-4 rounded-2xl shadow-sm border border-base-300 hover:border-primary transition-colors">
                                            <span className="font-medium">{task}</span>
                                            <div className="flex gap-1">
                                                <button className="btn btn-ghost btn-sm text-info" onClick={() => editTask(index)}>Edit</button>
                                                <button className="btn btn-ghost btn-sm text-error" onClick={() => deleteTask(index)}>Delete</button>
                                                {/* <button className={styles.moveUpBtn} onClick={() => moveTaskUp(index)}>👆</button>
                                                <button className={styles.moveDownBtn} onClick={() => moveTaskDown(index)}>👇</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default TodoApp