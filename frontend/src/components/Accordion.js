import { useState } from "react";
import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.css";
import { Loader } from "../styles/Loader";
import MuiLoader from "../styles/MuiLoader";

function Accordion({ questionAnswers }) {
  const [activeItem, setActiveItem] = useState(0);

  async function sum() {
    return 10;
  }

  // sum().then((res) => console.log(res));

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
          <MuiLoader />
        )}
      </dl>
    </div>
  );
}

export default Accordion;
