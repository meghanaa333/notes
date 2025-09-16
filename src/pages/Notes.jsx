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
    <div className="relative mt-[70px] p-5">
      <button className="absolute top-0 left-0 px-4 py-2 text-sm bg-[#300b32] text-white rounded hover:bg-[#8139a8]" onClick={() => setShowForm(true)}>
        + notes
      </button>

      {showForm && (
        <div className="bg-gray-100 mt-[50px] p-4 rounded-lg shadow">
          <h3 className="mb-2 text-lg font-semibold">Add a new Notes</h3>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <div className="flex gap-2 mt-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onClick={handleNotes}>
              Add
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => setShowForm(false)}>
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
