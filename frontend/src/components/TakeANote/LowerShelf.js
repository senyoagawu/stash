import React from "react";

export default function TopShelf() {
  return (
    <div className="top-shelf">
      <div className="title">Take a note</div>
      <input type="text" placeholder="Title" className="input-title" />
      <div className="content"></div>
    </div>
  );
}
