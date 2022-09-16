import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ questionAnswers }) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="faq">
      <h1 className="faq__title">FAQ</h1>
      <dl>
        {questionAnswers.map((item, index) => {
          return (
            <AccordionItem
              item={item}
              key={index}
              // onClick={() => setActiveItem(index)}
              index={index}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default Accordion;
