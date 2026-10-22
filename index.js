const student = require("./student.json");
const { notes } = require("./tools.js");
 console.log(student.prenom + " " + student.nomDeFamille.toUpperCase() + " \n " + student.dateDeNaissance );
for (const matiere of Object.keys(student.notes)){
notes(matiere)};



