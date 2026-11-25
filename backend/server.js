const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Book = require('./models/Book');
const cors = require('cors');
const User = require('./models/User');
require('dotenv').config();


const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ⚠️ Important: serve static files *after* setting up the main route
// We’ll handle "/" manually to ensure login.html loads first

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// ------------------------------------------------
// 📘 API Routes
// ------------------------------------------------

// ✅ Get all books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// ✅ Add a new book
app.post('/api/books', async (req, res) => {
  const { title, author, price, description, cover } = req.body;

  try {
    const newBook = new Book({ title, author, price, description, cover });
    await newBook.save();
    res.json({ message: '✅ Book added successfully!', book: newBook });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save book' });
  }
});

// ✅ Delete a book
app.delete('/api/books/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: '🗑️ Book deleted!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

// ------------------------------------------------
// 🔐 Login Routes
// ------------------------------------------------

// 🧑‍💻 Admin login
app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await User.findOne({ username, password, role: 'admin' });
  if (!admin) return res.status(401).json({ error: 'Invalid admin credentials' });
  res.json({ message: 'Admin login successful', role: 'admin' });
});

// 👤 Customer login
app.post('/api/customer/login', async (req, res) => {
  const { username, password } = req.body;
  const customer = await User.findOne({ username, password, role: 'customer' });
  if (!customer) return res.status(401).json({ error: 'Invalid customer credentials' });
  res.json({ message: 'Customer login successful', role: 'customer' });
});

// ------------------------------------------------
// 🏠 Page Routes
// ------------------------------------------------

// ✅ Force homepage to load login.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

// ✅ Serve static files (AFTER the above route)
app.use(express.static(path.join(__dirname, '../frontend')));

// ✅ Admin dashboard page
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/admin.html'));
});

// ✅ Customer dashboard page
app.get('/customer', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ------------------------------------------------
// 🚀 Start Server
// ------------------------------------------------
app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));

// mongoose.connect('mongodb://localhost:27017/bookstore')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.log(err));
