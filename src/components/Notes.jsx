import React, { useState, useEffect } from "react";
import NotesList from "./NotesList";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newDescript, setNewDescript] = useState("");

  useEffect(() => {
    const notesJson = JSON.stringify(notes);
    localStorage.setItem("notes", notesJson);
  }, [notes]);

  const handleNewNote = (e) => {
    e.preventDefault();
    if (newNote.trim() && newDescript.trim() !== "") {
      const inputsNote = { newNote, newDescript };
      setNotes([...notes, inputsNote]);

      setNewNote("");
      setNewDescript("");
    }
  };

  console.log(notes);

  return (
    <>
      <form onSubmit={handleNewNote}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />

        <textarea
          value={newDescript}
          onChange={(e) => setNewDescript(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <NotesList notes={notes} setNotes={setNotes} />
    </>
  );
};

export default Notes;
