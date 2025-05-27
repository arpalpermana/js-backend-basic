const notes = require("../data/notes-data");

const getAllNotesHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});

module.exports = getAllNotesHandler;
