import React, { useState } from "react";

const MarkdownInput = () => {
  const [value, setValue] = useState(0);

  const onValueChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <section id="MarkdownInput">
      <h1>MarkdownInput</h1>
      <p>{value}</p>
      <input value={value} onChange={onValueChange} />
    </section>
  );
};

export default MarkdownInput;