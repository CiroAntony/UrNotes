import React, { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";

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
      // Clonar las notas existentes, agregar la nueva nota y establecer el estado
      const updatedNotes = [
        ...notes,
        { title: newNote, description: newDescript },
      ];
      setNotes(updatedNotes);

      setNewNote("");
      setNewDescript("");
    }
  };

  const handleDeleteNote = (index) => {
    const deleteCardNote = [...notes];
    deleteCardNote.splice(index, 1);
    setNotes(deleteCardNote);
  };

  return (
    <>
      <form onSubmit={handleNewNote}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Título"
        />

        <textarea
          value={newDescript}
          onChange={(e) => setNewDescript(e.target.value)}
          placeholder="Descripción"
        />
        <button type="submit">Agregar</button>
      </form>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div className="card" key={index}>
            <TiDelete onClick={() => handleDeleteNote(index)} />
            <div className="note-descript">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notes;
