import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3" style={{'background-color' : '#192734', 'padding': '1%'}}>
      <div className="card my-3">
        <div className="card-body" style={{'background-color' : '#22303c', 'border':'solid white 2px', 'border-radius':'3px'}}>
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="far fa-trash-alt mx-3"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully!", "info");
              }}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
