import "./ExpandingCards.css";

function ExpandingCards() {
  document.title = "Expanding Cards";

  function handleClick() {
    const panels = document.querySelectorAll(".panel");
    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }
    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });
  }

  return (
    <main className="container">
      <button
        type="button"
        className="panel active"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/picsum/200/300')`,
        }}
        onClick={handleClick}
      >
        <h3>Explore Image 1</h3>
      </button>
      <button
        type="button"
        className="panel"
        style={{
          backgroundImage: `url('https://picsum.photos/id/237/200/300')`,
        }}
        onClick={handleClick}
      >
        <h3>Explore Image 2</h3>
      </button>
      <button
        type="button"
        className="panel"
        style={{
          backgroundImage: `url('https://picsum.photos/200/300')`,
        }}
        onClick={handleClick}
      >
        <h3>Explore Image 3</h3>
      </button>
      <button
        type="button"
        className="panel"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/picsum/200/300')`,
        }}
        onClick={handleClick}
      >
        <h3>Explore Image 4</h3>
      </button>
      <button
        type="button"
        className="panel"
        style={{
          backgroundImage: `url('https://picsum.photos/id/100/200/300')`,
        }}
        onClick={handleClick}
      >
        <h3>Explore Image 5</h3>
      </button>
    </main>
  );
}

export default ExpandingCards;
