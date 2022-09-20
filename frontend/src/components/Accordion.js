import { useState } from "react";
import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.css";
import { Loader } from "../styles/Loader";

function Accordion({ questionAnswers }) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="faq">
      <h1 className="faq__title">FAQ</h1>
      <dl>
        {questionAnswers ? (
          questionAnswers?.map((item, index) => {
            const showDescription =
              index === activeItem ? "show-description" : "";
            const ariaExpanded = index === activeItem ? true : false;
            const fontBold = index === activeItem ? true : false;
            return (
              <AccordionItem
                item={item}
                key={index}
                onClick={() => setActiveItem(index)}
                index={index}
                showDescription={showDescription}
                ariaExpanded={ariaExpanded}
                fontBold={fontBold}
              />
            );
          })
        ) : (
          <Loader border={"red"} borderTop={"blue"} />
        )}
      </dl>
    </div>
  );
}

export default Accordion;
