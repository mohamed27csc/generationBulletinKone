const student = require("./student.json");
function notes(matiere) {
  console.log(matiere.toUpperCase() + ": ");
  for (const note of student.notes[matiere] ) {
    console.log(note);
  }
}
module.exports = { notes };
