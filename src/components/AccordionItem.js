function AccordionItem({
  item,
  onClick,
  showDescription,
  ariaExpanded,
  fontBold,
  index,
}) {
  return (
    <div className="faq__question" onClick={onClick}>
      <dt>
        <button
          className={`faq__question-button ${fontBold}`}
          aria-expanded={ariaExpanded}
          data-qa="faq__question-button"
          aria-control={`faq${index + 1}_desc`}
        >
          {item.question}
        </button>
      </dt>
      <dd>
        <p
          className={`faq__desc ${showDescription}`}
          id={`faq${index + 1}_desc`}
          data-qa="faq__desc"
        >
          {item.answer}
        </p>
      </dd>
    </div>
  );
}

export default AccordionItem;
