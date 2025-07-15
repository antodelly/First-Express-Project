import Persona from "../models/persona.model.js";

async function getPersonaFromId(req, res, next) {
  let persona;
  try {
    console.log("==================================================");
    console.log("Fetching persona with ID:", req.params.id);
    console.log("==================================================");
    persona = await Persona.findById(req.params.id);
    if (!persona) {
      return res.status(404).json({ message: "Persona not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching persona: ", error });
  }

  res.persona = persona;
  next();
}

export { getPersonaFromId };
