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
    <div className="notes-list flex justify-center text-center gap-8 flex-wrap">
      {notes.map((note, index) => (
        <div
          className="card border-[1px] w-[300px] bg-[#c87bf2] rounded-2xl"
          key={index}
        >
          <div className="flex justify-end border-nonej">
            <TiDelete
              className="text-[24px] cursor-pointer hover:text-green-900 mr-2 mt-[8px]"
              onClick={() => handleDeleteNote(index)}
            />
          </div>

          <div className="note-descript mt-[-26jpx]">
            <h1 className="bg-[#c87bf2] font-bold text-lg pr-2 pl-2 rounded-xl">
              {note.newNote}
            </h1>
            <div className="bg-black w-full h-[1px] mt-2 mb-2"></div>
            <p className="text-[18px] pr-2 pl-2">{note.newDescript}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
