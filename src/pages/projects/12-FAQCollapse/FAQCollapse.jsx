import Backbutton from "../../../components/layout/backbutton/Backbutton";
import FaqCard from "../../../components/layout/faqCard/FaqCard";
import "./FAQCollapse.css";

function FAQCollapse() {
  document.title = "FAQ Collapse";

  return (
    <main className="faq-collapse">
      <Backbutton />
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        <FaqCard title="title 1" text="text 1" />
        <FaqCard title="title 2" text="text 2" />
        <FaqCard title="title 3" text="text 3" />
        <FaqCard title="title 4" text="text 4" />
        <FaqCard title="title 4" text="text 4" />
      </div>
    </main>
  );
}

export default FAQCollapse;
