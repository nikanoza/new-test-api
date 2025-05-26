import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().populate("user");
    return res.status(200).json(notes);
  } catch (error) {
    console.error(error, "this error");
    return res.status(500).json({
      message: "An error occurred while deleting the user",
    });
  }
};

const getNoteByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const notes = await Note.find({ userId });
    return res.status(200).json(notes);
  } catch (error) {
    console.error(error, "this error");
    return res.status(500).json({
      message: "An error occurred while fetching the notes",
    });
  }
};

export const createNote = async (req, res) => {
  try {
    const { body } = req;

    const { title, text, userId } = body;
    const note = new Note({
      title,
      text,
      user: userId,
    });
    await note.save();
    return res.status(201).json(note);
  } catch (error) {
    console.error(error, "this error");
    return res.status(500).json({
      message: "An error occurred while deleting the user",
    });
  }
};
