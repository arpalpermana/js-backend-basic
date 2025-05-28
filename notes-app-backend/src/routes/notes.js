const {
  addNotesHandler,
  getAllNotesHandler,
  getNotesById,
  editNotesByIdHandler,
  deleteNoteByIdHandler,
} = require("../handler");

const notes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNotesHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNotesById,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNotesByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = notes;
