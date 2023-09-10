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
          </div>

          <div className="note-descript mt-[-26px]">
            <h1 className="bg-[#d19d10] text-center font-bold text-lg pr-2 pl-2 rounded-xl">
              {note.newNote}
            </h1>
            <div className="bg-white w-full h-[1px] mt-2 mb-2"></div>
            <p className="text-[18px] pr-2 pl-2 pb-2">{note.newDescript}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
