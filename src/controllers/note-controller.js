export const getAllNotes = async (req, res) => {
  return res.json({ width: 400, height: 400, length: 300, color: "#FFF" });
};

export const createNote = async (req, res) => {
  try {
    const { body } = req;
    await body.note;
    return res.status(201).json({ message: "Note created successfully" });
  } catch (error) {}
};
