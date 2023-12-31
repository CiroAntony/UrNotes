import React, { useState, useEffect } from "react";
import NotesList from "./NotesList";
import { TiDeleteOutline } from "react-icons/ti";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [editedNote, setEditedNote] = useState({
    newNote: "",
    newDescript: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editedNote.newNote.trim() && editedNote.newDescript.trim() !== "") {
      const updatedNotes = [...notes];
      if (isEditing && editIndex !== null) {
        updatedNotes[editIndex] = editedNote;
      } else {
        updatedNotes.push(editedNote);
      }
      setNotes(updatedNotes);
      setEditedNote({ newNote: "", newDescript: "" });
      setIsEditing(false);
      setEditIndex(null);
    }
  };

  const handleEditNote = (index) => {
    setEditedNote(notes[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditedNote({ newNote: "", newDescript: "" });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleNewNoteClick = () => {
    if (!isEditing) {
      setEditedNote({ newNote: "", newDescript: "" });
    }
    setIsEditing(!isEditing);
    setEditIndex(null);
  };

  return (
    <>
      <button
        onClick={handleNewNoteClick}
        className="bg-[#d19d10] p-8 py-2 rounded-2xl ml-12 text-white m-6"
      >
        {isEditing ? "Cancelar" : "Nuevo"}
      </button>
      <div className="form-container flex justify-center">
        <form
          onSubmit={handleFormSubmit}
          className={` form bg-[#d19d10] pt-8 p-4 pb-8 flex flex-col gap-4
         rounded-2xl text-white  ${isEditing ? "block" : "hidden"}`}
        >
          <div className="delete-container flex justify-end mt-[-20px]">
            <TiDeleteOutline
              onClick={handleCancelEdit}
              className="text-[28px] text-white hover:text-green-900 cursor-pointer"
            />
          </div>
          <h2 className="text-center text-lg font-semibold mt-[-20px]">
            Ingresa o modifica tu nota
          </h2>
          <input
            type="text"
            value={editedNote.newNote}
            onChange={(e) =>
              setEditedNote({ ...editedNote, newNote: e.target.value })
            }
            placeholder="Ingrese el título"
            className="p-2 lg:w-[350px] sm:w-[350px] xl:w-[400px] outline-none rounded-2xl bg-[#2c2c2c]"
          />
          <textarea
            type="text"
            value={editedNote.newDescript}
            onChange={(e) =>
              setEditedNote({ ...editedNote, newDescript: e.target.value })
            }
            placeholder="Ingrese la descripción"
            className=" textarea h-[200px] p-2 rounded-xl outline-none bg-[#2c2c2c]"
          />
          <button
            type="submit"
            className="border-2 border-[#2c2c2c] rounded-2xl p-2 hover:bg-[#2c2c2c] duration-1000"
          >
            {isEditing ? "Guardar nota" : "Crear nota"}
          </button>
        </form>
      </div>
      <NotesList
        notes={notes}
        setNotes={setNotes}
        handleEditNote={handleEditNote}
        isEditing={isEditing}
      />
    </>
  );
};

export default Notes;
