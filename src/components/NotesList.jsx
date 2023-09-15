import React from "react";
import { TiDelete } from "react-icons/ti";
import { BiEdit } from "react-icons/bi";
import { FiSave } from "react-icons/fi";

const NotesList = ({
  notes,
  setNotes,
  handleEditNote,
  isEditing,
  editedNote,
}) => {
  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleSaveEdit = (index) => {
    if (editedNote.newNote.trim() && editedNote.newDescript.trim() !== "") {
      const updatedNotes = [...notes];
      updatedNotes[index] = editedNote;
      setNotes(updatedNotes);
      handleEditNote(null); // Finaliza el modo de edición
    }
  };

  return (
    <div className="notes-list flex justify-center gap-8 flex-wrap text-white flex-row-reverse">
      {notes.map((note, index) => (
        <div
          className="card border-[1px] w-[350px] bg-[#d19d10] rounded-2xl"
          key={index}
        >
          <div className="flex justify-end border-nonej">
            <TiDelete
              className="text-[24px] cursor-pointer hover:text-green-900 mr-2 mt-[8px]"
              onClick={() => handleDeleteNote(index)}
            />
            {isEditing === index ? (
              <FiSave
                className="text-[24px] cursor-pointer hover:text-green-900 mr-2 mt-[8px]"
                onClick={() => handleSaveEdit(index)}
              />
            ) : (
              <BiEdit
                className="text-[24px] cursor-pointer hover:text-green-900 mr-2 mt-[8px]"
                onClick={() => handleEditNote(index)}
              />
            )}
          </div>

          {isEditing === index ? (
            <>
              <input
                type="text"
                value={editedNote.newNote}
                onChange={(e) =>
                  setEditedNote({ ...editedNote, newNote: e.target.value })
                }
                placeholder="Editar el título"
                className="p-2 w-[350px] outline-none rounded-2xl bg-[#2c2c2c]"
              />
              <textarea
                value={editedNote.newDescript}
                onChange={(e) =>
                  setEditedNote({ ...editedNote, newDescript: e.target.value })
                }
                placeholder="Editar la descripción"
                className="w-[350px] h-[150px] p-2 rounded-xl outline-none bg-[#2c2c2c]"
              />
            </>
          ) : (
            <>
              <h1 className="bg-[#d19d10] text-center font-bold text-lg pr-2 pl-2 rounded-xl">
                {note.newNote}
              </h1>
              <div className="bg-white w-full h-[1px] mt-2 mb-2"></div>
              <p className="text-[18px] pr-2 pl-2 pb-2">{note.newDescript}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotesList;
