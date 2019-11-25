import React from "react";

export default function Header({ text }) {
  return (
    <header>
      <h1 className="fancy-h1" data-testid="h1tag">{text}</h1>
    </header>
  );
}