const mongoose = require('mongoose');
const Book = require('./models/Book');

// Your Database Link
const MONGO_URI = "mongodb+srv://baheshwarrohit811_db_user:PSt*am-Zb7Jd9eb@cluster0.y3nslcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Fake Books to Add
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10,
    category: "Classic",
    description: "A novel about the American dream.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 15,
    category: "Dystopian",
    description: "A story about surveillance and control.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 20,
    category: "Fantasy",
    description: "A journey of a hobbit to win gold.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 25,
    category: "Fantasy",
    description: "A boy wizard fights evil.",
    image: "https://via.placeholder.com/150"
  }
];

const seedDB = async () => {
  try {
    // 1. Connect to Database
    await mongoose.connect(MONGO_URI);
    console.log("Connected to DB...");

    // 2. Clear old data (optional)
    await Book.deleteMany({});
    console.log("Old books removed...");

    // 3. Add new books
    await Book.insertMany(books);
    console.log("Books Added Successfully!");

    // 4. Disconnect
    mongoose.connection.close();
  } catch (error) {
    console.log("Error:", error);
  }
};

seedDB();