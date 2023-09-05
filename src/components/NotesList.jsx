import React from "react";
import "./Notes";
import { TiDelete } from "react-icons/ti";

const NotesList = ({ notes, setNotes }) => {
  const handleDeleteNote = (index) => {
    const deleteCardNote = [...notes];
    deleteCardNote.splice(index, 1);
    setNotes(deleteCardNote);
  };
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <div className="card" key={index}>
          <TiDelete onClick={() => handleDeleteNote(index)} />
          <div className="note-descript">
            <h1>{note.newNote}</h1>
            <p>{note.newDescript}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
