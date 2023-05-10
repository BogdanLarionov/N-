import React from "react";

export default function AddPostForm() {
  const form_submit = () => {
    // event.priventDifolt();
  };

  return (
    <div>
      <form onSubmit={form_submit}>
        <input type="text" />
        <input type="text" />
        <button>add</button>
      </form>
    </div>
  );
}
