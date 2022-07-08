import "../styles/Meme.css";
function Meme() {
  function LoadMeme() {
    alert("pressed");
  }
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
        <button className="form-btn" onClick={LoadMeme}>
          Get a new meme
        </button>
      </form>
      <img alt="" id="meme-img" />
      <p id="para-el"></p>
    </main>
  );
}

export default Meme;
