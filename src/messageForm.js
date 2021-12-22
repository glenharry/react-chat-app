import React, { useState } from "react";
import { supabase } from "./supabaseClient";
function MessageForm() {
  let [content, setContent] = useState("");

  function onChange(e) {
    setContent(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    supabase
      .from("messages")
      .insert([{ content: content }])
      .then(function () {
        console.log("that worked", content);
      });
    console.log("Send Message to Server", content);
  }
  // When the form is submitted
  // 1. prevent the default behavior
  // 2. Log the current value of content

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={content} onChange={onChange} />
      <button>Send</button>
    </form>
  );
}

export default MessageForm;
