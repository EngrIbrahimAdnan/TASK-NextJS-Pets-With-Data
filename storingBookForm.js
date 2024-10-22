"use client";

import { createBook } from "@/actions";
import { useState } from "react";

function BookForm() {
  const [book, setBook] = useState({
    title: "",
    price: 0,
    description: "",
  });

  function handleChange(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    createBook(book);
  }

  return (
    <form action={createBook} className="flex flex-col gap-3 my-10 text-black">
      <input></input>
    </form>
  );
}
