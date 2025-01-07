import React, { useState, useReducer } from "react";
import { booksData } from "./booksData";

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payLoad];
    return {
      ...state,
      books: allBooks,
      isModelOpen: true,
    };
  }

  if (action.type === "REMOVE") {
    const filteredBooks = state.books.filter((book) => book.id !== action.payLoad);
    return {
      ...state,
      books: filteredBooks,
      isModelOpen: true,
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModelOpen: false,
    };
  }

  return state;
};

function UseReducer() {
  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModelOpen: false,
  });

  const [booksName, setBooksName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!booksName.trim()) {
      alert("Book name cannot be empty!");
      return;
    }
    const newBook = { id: new Date().getTime().toString(), Name: booksName };
    dispatch({ type: "ADD", payLoad: newBook });
    setBooksName(""); // Reset input field
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", payLoad: id });
  };

  return (
    <>
      <h3>Book List</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={booksName}
            onChange={(event) => setBooksName(event.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>

      {bookState.isModelOpen && (
        <p>
          Action performed.{" "}
          <button onClick={() => dispatch({ type: "CLOSE_MODAL" })}>Close</button>
        </p>
      )}

      <ul>
        {bookState.books.map((book) => (
          <li key={book.id}>
            {book.Name}{" "}
            <button onClick={() => handleRemove(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UseReducer;
