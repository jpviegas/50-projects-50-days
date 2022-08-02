import Backbutton from "../../../components/layout/backbutton/Backbutton";
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
    <main className="expanding-container">
      <div className="title">
        <h1>Click to expand the card</h1>
        <Backbutton />
      </div>
      <section className="expanding">
        <button
          type="button"
          className="panel active"
          style={{
            backgroundImage: `url('https://picsum.photos/id/${Math.floor(
              Math.random() * 99
            )}/600')`,
          }}
          onClick={handleClick}
        >
          <h3>Explore Image 1</h3>
        </button>

        <button
          type="button"
          className="panel"
          style={{
            backgroundImage: `url('https://picsum.photos/id/${Math.floor(
              Math.random() * 99
            )}/600')`,
          }}
          onClick={handleClick}
        >
          <h3>Explore Image 2</h3>
        </button>

        <button
          type="button"
          className="panel"
          style={{
            backgroundImage: `url('https://picsum.photos/id/${Math.floor(
              Math.random() * 99
            )}/600')`,
          }}
          onClick={handleClick}
        >
          <h3>Explore Image 3</h3>
        </button>

        <button
          type="button"
          className="panel"
          style={{
            backgroundImage: `url('https://picsum.photos/id/${Math.floor(
              Math.random() * 99
            )}/600')`,
          }}
          onClick={handleClick}
        >
          <h3>Explore Image 4</h3>
        </button>

        <button
          type="button"
          className="panel"
          style={{
            backgroundImage: `url('https://picsum.photos/id/${Math.floor(
              Math.random() * 99
            )}/600')`,
          }}
          onClick={handleClick}
        >
          <h3>Explore Image 5</h3>
        </button>
      </section>
    </main>
  );
}

export default ExpandingCards;
