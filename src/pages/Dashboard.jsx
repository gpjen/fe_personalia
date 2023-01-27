import React from "react";
import ButtonTest from "../components/ButtonTest";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center flex-col gap-3">
      <Card />
      <ButtonTest />
    </div>
  );
}
