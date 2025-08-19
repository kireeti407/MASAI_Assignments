const express = require('express');
const Redis = require('ioredis');
const bodyParser = require('body-parser');

const app = express();
const redis = new Redis(); // default localhost:6379
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Simulated DB
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

const CACHE_KEY = 'items:all';
const CACHE_TTL = 60; // seconds

// GET /items
app.get('/items', async (req, res) => {
  try {
    const cached = await redis.get(CACHE_KEY);
    if (cached) {
      console.log('Cache hit');
      return res.json(JSON.parse(cached));
    }
    console.log('Cache miss');
    await redis.set(CACHE_KEY, JSON.stringify(items), 'EX', CACHE_TTL);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /items
app.post('/items', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name required' });
  const newItem = { id: Date.now(), name };
  items.push(newItem);
  await redis.del(CACHE_KEY);
  console.log('Cache invalidated after POST');
  res.status(201).json(newItem);
});

// PUT /items/:id
app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const idx = items.findIndex(i => i.id == id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx].name = name || items[idx].name;
  await redis.del(CACHE_KEY);
  console.log('Cache invalidated after PUT');
  res.json(items[idx]);
});

// DELETE /items/:id
app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  const idx = items.findIndex(i => i.id == id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const deleted = items.splice(idx, 1);
  await redis.del(CACHE_KEY);
  console.log('Cache invalidated after DELETE');
  res.json(deleted[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
