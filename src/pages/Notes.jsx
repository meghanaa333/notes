import { useState } from "react";
import "../css/notes.css";
import NotesList from "../components/NotesList";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleNotes = () => {
    if (title.trim() && content.trim()) {
      const newnotes = { id: Date.now(), title, content };
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
      <button className="add-note-btn" onClick={() => setShowForm(true)}>
        + notes
      </button>

      {showForm && (
        <div className="note-form">
          <h3>Add a new Notes</h3>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
          />
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
      <NotesList notes={notes} onDelete={handleDelete} />
    </div>
  );
}

export default Notes;
