import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { title: "Atomic Habits", author: "James Clear" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Hooked", author: "Nir Eyal" }
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const addBook = () => {
    if (!newTitle || !newAuthor) return alert("Please fill book details");

    setBooks([...books, { title: newTitle, author: newAuthor }]);
    setNewTitle("");
    setNewAuthor("");
  };

  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  }; 

  return (
    <div className="container">
      <h1>📚 Library Management</h1>

      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />


      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add</button>
      </div>


      <div className="book-list">
        {filteredBooks.length === 0 ? (
          <p className="empty">No books found</p>
        ) : (
          filteredBooks.map((book, index) => (
            <div className="book" key={index}>
              <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
              <button className="remove" onClick={() => removeBook(index)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
