import "../styles/Meme.css";
function Meme() {
  return (
    <main>
      <form className="form-container">
        <input
          type="text"
          className="form-input"
          placeholder="font on the top"
        />
        <input
          type="text"
          className="form-input"
          placeholder="font on the bottom"
        />
        <button className="form-btn">Get a new meme</button>
      </form>
    </main>
  );
}

export default Meme;
