const notesData = require("../data/notes-data");

const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const noteIndex = notesData.findIndex((note) => note.id == id);

  if (noteIndex !== -1) {
    notesData.splice(noteIndex, 1);
    const response = h.response({
      status: "success",
      message: "Note is successfully deleted.",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "failed",
    message: "Failed to delete note.",
  });
  response.code(404);
  return response;
};

module.exports = deleteNoteByIdHandler;
