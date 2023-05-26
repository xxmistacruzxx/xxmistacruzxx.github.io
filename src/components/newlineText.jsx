import React from "react";

/**
 * converts a string with newline characters and replaces them with HTML line breaks
 * @param {string} text - text to insert line breaks into
 * @returns react fragment of text with line breaks
 */
function NewlineText({ text }) {
  const newText = text.split("\n").map((str) => (
    <>
      {str}
      <br />
    </>
  ));

  return newText;
}

export default NewlineText;
