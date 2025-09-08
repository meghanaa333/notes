import { useState } from "react"
import 'C:/Projects/NotesList/notes/src/css/notes.css'

function Notes() {
    const [notes, setNotes] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState([]);
    const [content, setContent] = useState([]);

    const handleNotes = () => {
        if (title.trim() && content.trim()) {
            const newnotes = { id: Date.now, title, content };
            setNotes([newnotes, ...notes]);
            setTitle("");
            setContent("");
            setShowForm(false);
        }
    };

    const handleDelete = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div className="notes-container">
            <button className="add-note-btn" onClick={() => setShowForm(true)}>+ notes</button>
            {showForm && (
                <div className="note-form">
                    <h3>Add a new Notes</h3>
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} rows="10"></textarea>

                    <div className="form-buttons">
                        <button className="add-btn" onClick={handleNotes}>
                            Add
                        </button>
                        <button className="close-btn" onClick={() => setShowForm(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="notes-list">
                {notes.length === 0 ? (<h3 className="empty-text">
                    Once you add notes, they'll be displayed here!!</h3>) : (notes.map((note) => (
                        <div key={note.id} className="note-card">
                            <div className="note-header">
                                <h4>{note.title}</h4>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(note.id)}
                                >
                                    Delete
                                </button>
                            </div>
                            <p>{note.content}</p>
                        </div>
                    ))
                )
                }
            </div>
        </div>

    );
}

export default Notes