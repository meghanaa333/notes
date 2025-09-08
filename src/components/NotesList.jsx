function NotesList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <h3 className="empty-text">
          Once you add notes, they'll be displayed here!!
        </h3>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note-card">
            <div className="note-header">
              <h4>{note.title}</h4>
              <button
                className="delete-btn"
                onClick={() => onDelete(note.id)}
              >
                Delete
              </button>
            </div>
            <p>{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesList;