import AccordionItem from "./AccordionItem";

function Accordion({ questionAnswers }) {
  console.log(questionAnswers);

  return (
    <div className="faq">
      <h1 className="faq__title">FAQ</h1>
      <dl>
        {questionAnswers.map((item, index) => {
          return <AccordionItem qa={item} key={index} />;
        })}
      </dl>
    </div>
  );
}

export default Accordion;
