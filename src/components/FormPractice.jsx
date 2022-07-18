import { useState } from "react";
export default function FormPractice() {
  const [name, setName] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`name was submitted : ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name : <input type="text" onChange={handleChange} value={name} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
