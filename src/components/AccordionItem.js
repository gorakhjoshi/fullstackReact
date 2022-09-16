function AccordionItem({ qa }) {
  const { question, answer } = qa;
  return (
    <div className="faq__question">
      <dt>
        <button className="faq__question-button">{question}</button>
      </dt>
      <dd>
        <p className="faq__descOld">{answer}</p>
      </dd>
    </div>
  );
}

export default AccordionItem;
