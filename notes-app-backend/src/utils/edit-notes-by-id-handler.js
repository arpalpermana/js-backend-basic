const notes = require("../data/notes-data");

const editNotesByIdHandler = (request, h) => {
  const { id } = request.params;
  const { title, body, tags } = request.payload;

  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = { ...notes[index], body, title, tags, updatedAt };

    const response = h.response({
      status: "success",
      message: "Note successfully edited",
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Note is failed to update",
  });
  response.code(404);
  return response;
};

module.exports = editNotesByIdHandler;
