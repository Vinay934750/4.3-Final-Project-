const express = require('express');
const router = express.Router();
const Player = require('../models/player');

// Add a new player
router.post('/players', async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all players
router.get('/players', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Implement other CRUD routes (update, delete)

module.exports = router;
