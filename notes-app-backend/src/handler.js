const addNotesHandler = require("./utils/add-notes-handler");
const deleteNoteByIdHandler = require("./utils/delete-note-by-id-handler");
const editNotesByIdHandler = require("./utils/edit-notes-by-id-handler");
const getAllNotesHandler = require("./utils/get-all-notes-handler");
const getNotesById = require("./utils/get-note-by-id");

module.exports = {
  addNotesHandler,
  getAllNotesHandler,
  getNotesById,
  editNotesByIdHandler,
  deleteNoteByIdHandler,
};
