import React, { useState } from "react";

function TodoList({ todos, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (id, text) => {
    setIsEditing(id);
    setNewText(text);
  };

  const saveEdit = (id) => {
    if (newText.trim() !== "") {
      editTask(id, newText);
    }
    setIsEditing(null);
  };

  return (
    <ul style={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id} style={styles.item}>
          {isEditing === todo.id ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                style={styles.input}
              />
              <button onClick={() => saveEdit(todo.id)} style={styles.saveBtn}>💾</button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>
              <button style={styles.editBtn} onClick={() => handleEdit(todo.id, todo.text)}>✏️</button>
              <button style={styles.deleteBtn} onClick={() => deleteTask(todo.id)}>❌</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: { listStyle: "none", padding: 0 },
  item: { margin: "10px 0", fontSize: "18px" },
  input: { padding: "5px", fontSize: "16px" },
  editBtn: { marginLeft: "10px", padding: "5px", background: "blue", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" },
  saveBtn: { marginLeft: "10px", padding: "5px", background: "green", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" },
  deleteBtn: { marginLeft: "10px", padding: "5px", background: "red", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" },
};

export default TodoList;
