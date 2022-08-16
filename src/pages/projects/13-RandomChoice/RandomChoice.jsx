import { useRef, useState } from "react";
import "./RandomChoice.css";

function RandomChoice() {
  const tagsRef = useRef(null);
  const textareaRef = useRef(null);
  const [textInput, setTextInput] = useState("");

  const createTags = (input) => {
    const tags = input
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    tagsRef.current.innerHTML = "";

    tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.classList.add("tag");
      tagEl.innerText = tag;
      tagsRef.current.appendChild(tagEl);
    });
  };

  const onChangeHandler = (e) => {
    setTextInput(e.target.value);
    createTags(e.target.value);
  };

  const highlightTag = (tag) => {
    tag.classList.add("highlight");
  };

  const unHighlightTag = (tag) => {
    tag.classList.remove("highlight");
  };

  const pickRandomTag = () => {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
  };

  const randomSelect = () => {
    setTimeout(() => {
      textareaRef.current.innerText = setTextInput("");
    }, 10);
    const times = 30;
    const interval = setInterval(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
      }, 100);
    }, times * 100);
  };

  return (
    <main className="random-choice">
      <div className="random-container">
        <h1>Enter all of the choices divided by a comma (&apos;,&apos;).</h1>
        <h2>Press enter when you&apos;re done</h2>
        <textarea
          name=""
          id="textarea"
          cols="30"
          rows="10"
          placeholder="Enter choices here..."
          ref={textareaRef}
          value={textInput}
          onChange={(e) => onChangeHandler(e)}
          onKeyDown={(e) => e.key === "Enter" && randomSelect()}
        />
        <div id="tags" ref={tagsRef} />
      </div>
    </main>
  );
}

export default RandomChoice;
