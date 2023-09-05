import React, { useState, useEffect } from "react";
import NotesList from "./NotesList";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newDescript, setNewDescript] = useState("");

  // Cargar notas desde el localStorage al montar el componente
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Guardar notas en el localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
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
