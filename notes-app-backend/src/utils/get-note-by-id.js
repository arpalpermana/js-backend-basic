const notes = require("../data/notes-data");

const getNotesById = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((n) => n.id === id)[0];

  if (note) {
    console.log(note);

    return {
      status: "success",
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: "fail",
    message: "Catatan tidak ditemukan",
  });
  response.code(404);
  return response;
};

module.exports = getNotesById;
