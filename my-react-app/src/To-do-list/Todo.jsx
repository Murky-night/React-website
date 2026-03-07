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
        <div className={styles.toDoList}>

            <h1>To do list</h1>

            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter new task..."
                    value={newTask}
                    onChange={handleInputChange}
                    className={styles.taskInput}
                    onKeyDown={(e) => e.key === 'Enter' && addTask()}
                />
                <button className={styles.addBtn} onClick={addTask}>
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
                                <span className={styles.task}>{task}</span>
                                <button className={styles.editBtn} onClick={() => editTask(index)}>Edit</button>
                                <button className={styles.deleteBtn} onClick={() => deleteTask(index)}>Delete</button>
                                {/* <button className={styles.moveUpBtn} onClick={() => moveTaskUp(index)}>👆</button>
                                <button className={styles.moveDownBtn} onClick={() => moveTaskDown(index)}>👇</button> */}
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default TodoApp