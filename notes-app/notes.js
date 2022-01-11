const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

const addNote = (title, body) => {
  const notes = loadNotes();
  const dublicateNote = notes.find((note) => note.title === title);

  if (!dublicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added!"));
  } else {
    console.log(chalk.bgRed("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.bgGreen("Note removed!"));
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green("Your notes"));
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (!note) {
    console.log(chalk.red("No note found"));
  } else {
    console.log(chalk.green(note.title));
    console.log(chalk.yellow(note.body));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
