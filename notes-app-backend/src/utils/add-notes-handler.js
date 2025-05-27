const { nanoid } = require("nanoid");
const notesData = require("../data/notes-data");

const addNotesHandler = (request, h) => {
  const { title, body, tags } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  notesData.push(newNote);
  const isSuccess = notesData.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Note is successfully added.",
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "Error",
    message: "Failed to add new note.",
  });
  response.code(500);
  return response;
};

module.exports = addNotesHandler;
