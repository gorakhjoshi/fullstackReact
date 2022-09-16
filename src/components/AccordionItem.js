function AccordionItem({ item, onClick }) {
  return (
    <div className="faq__question" onClick={onClick}>
      <dt>
        <button className="faq__question-button" aria-expanded="true">
          {item.question}
        </button>
      </dt>
      <dd>
        <p className="faq__desc showDescription">{item.answer}</p>
      </dd>
    </div>
  );
}

export default AccordionItem;
