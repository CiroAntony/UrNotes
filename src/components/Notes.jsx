import React, { useState, useEffect } from "react";
import NotesList from "./NotesList";
import { TiDeleteOutline } from "react-icons/ti";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newDescript, setNewDescript] = useState("");
  const [showForm, setShowForm] = useState(false);

  //para guardar en el localStorage
  useEffect(() => {
    const notesJson = JSON.stringify(notes);
    localStorage.setItem("notes", notesJson);
  }, [notes]);

  //Para mostrar lo guardado en el localStorage
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

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button
        onClick={handleShowForm}
        className="bg-[#d19d10] p-8 py-2 rounded-2xl ml-12 text-white"
      >
        Nuevo
      </button>
      <form
        onSubmit={handleNewNote}
        className={`bg-[#d19d10] pt-8 p-4 pb-8 flex flex-col gap-4 absolute left-[38.9%]
        top-[20%] rounded-2xl text-white  ${showForm ? "block" : "hidden"}`}
      >
        <div className="delete-container flex justify-end mt-[-20px]">
          <TiDeleteOutline
            onClick={handleShowForm}
            className="text-[28px] text-[#2c2c2c] hover:text-[#ff0000] cursor-pointer"
          />
        </div>
        <h2 className="text-center text-lg font-semibold mt-[-20px]">
          Ingrese el titulo y descripcion de su nota
        </h2>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Ingrese el titulo"
          className="p-2 w-[400px] outline-none rounded-2xl bg-[#2c2c2c]"
        />

        <textarea
          value={newDescript}
          onChange={(e) => setNewDescript(e.target.value)}
          placeholder="Ingrese la descripciòn"
          className="w-[400px] h-[200px] p-2 rounded-xl outline-none bg-[#2c2c2c]"
        />
        <button
          type="submit"
          onClick={handleShowForm}
          className="border[2px] border-[#2c2c2c] border-2 rounded-2xl p-2 hover:bg-[#2c2c2c] duration-1000"
        >
          Guarda nota
        </button>
      </form>
      <NotesList notes={notes} setNotes={setNotes} />
    </>
  );
};

export default Notes;
