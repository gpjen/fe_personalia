import React from "react";
import ButtonComp from "./ButtonComp";

export default function ButtonTest() {
  return (
    <div className="max-w-xl bg-white overflow-hidden shadow-sm border border-gray-100 rounded">
      <header className="px-5 py-4 border-b bg-gray-100/50 flex justify-between items-start gap-5">
        <div>
          <h2 className="font-medium">Learning button</h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <button className="bg-pink-500 text-white text-sm px-5 py-2 rounded font-medium transition duration-200 hover:bg-pink-500/90">
          Close
        </button>
      </header>
      <section className="px-5 py-4 border-b border-gray-100">
        <div class="flex justify-center items-center gap-5 font-semibold text-white flex-wrap">
          {/* btn apply */}
          <button className="btn btn-success">btn-apply</button>
          <button className="btn btn-dangger">btn-apply</button>
          <button className="btn btn-primary">btn-apply</button>
          {/* btn component */}
          <ButtonComp >miee</ButtonComp>
          <ButtonComp className='btn bg-emerald-500 hover:bg-emerald-500/80'>syedap</ButtonComp>
          <ButtonComp className='btn bg-pink-500 hover:bg-pink-500/80'>malam</ButtonComp>
        </div>
      </section>
      <footer className="px-5 py-4">
        <p>Lorem ipsum dolor sit amet.</p>
      </footer>
    </div>
  );
}
