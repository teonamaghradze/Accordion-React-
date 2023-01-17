import "./AccordionItem.style.css";
import arrowDown from "./assets/chevron-down-outline.svg";
import arrowUp from "./assets/chevron-up-outline.svg";
const AccordionItem = ({
  handleClick,
  accordionState,
  question,
  answer,
  num,
  accordionIcon,
}) => {
  return (
    <div className="accordion-item-container" onClick={() => handleClick(num)}>
      <div className="question-arrow-flex">
        <h2>{question}</h2>

        {accordionState === num ? (
          <img className="arrow-icon" alt="arrowdown" src={arrowDown} />
        ) : (
          <img className="arrow-icon" alt="arrowup" src={arrowUp} />
        )}
      </div>

      {accordionState === num ? <p className="answer">{answer}</p> : null}
    </div>
  );
};

export default AccordionItem;
