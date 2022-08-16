import { useRef } from "react";

function FaqCard({ title, text }) {
  const faqRef = useRef(null);
  const handleToggle = () => {
    faqRef.current.classList.toggle("active");
  };

  return (
    <div
      className="faq"
      ref={faqRef}
      onKeyDown={(e) => e.key === "Enter" && handleToggle()}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
    >
      <h2 className="faq-title">{title}</h2>
      <p className="faq-text">{text}</p>
      <button type="button" className="faq-toggle" onClick={handleToggle}>
        <i className="fas fa-chevron-down" />
        <i className="fas fa-times" />
      </button>
    </div>
  );
}

export default FaqCard;
