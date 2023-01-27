import React from "react";

export default function Card() {
  return (
    <div className="max-w-xl bg-white overflow-hidden shadow-sm border border-gray-100 rounded">
      <header className="px-5 py-4 border-b bg-gray-100/50 flex justify-between items-start">
        <div>
          <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <button className="bg-pink-500 text-white text-sm px-5 py-2 rounded font-medium transition duration-200 hover:bg-pink-500/90">
          Close
        </button>
      </header>
      <section className="px-5 py-4 border-b border-gray-100">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempore
          vero error commodi atque consequatur sapiente eaque fugiat expedita
          nisi vitae voluptatibus pariatur enim odio ullam voluptate, animi
          aliquid minima.
        </p>
      </section>
      <footer className="px-5 py-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga!</p>
      </footer>
    </div>
  );
}
