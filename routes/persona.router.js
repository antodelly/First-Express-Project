import express from "express";
import Persona from "../models/persona.model.js";

const personaRouter = express.Router();

personaRouter.get("/", async (req, res) => {
  try {
    const persone = await Persona.find();
    res.status(200).json(persone);
  } catch (error) {
    res.status(500).json({ message: "Error fetching personas: ", error });
  }
});

personaRouter.post("/", async (req, res) => {
  const { name, age } = req.body;
  const newPersona = new Persona({ name, age });

  try {
    const savedPersona = await newPersona.save();
    res.status(201).json(savedPersona);
    console.log("Persona created:", savedPersona);
  } catch (error) {
    res.status(400).json({ message: "Error creating persona: ", error });
  }
});

export default personaRouter;
