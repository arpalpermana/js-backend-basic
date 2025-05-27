const {
  addNotesHandler,
  getAllNotesHandler,
  getNotesById,
  editNotesByIdHandler,
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
];

module.exports = notes;
