import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const DATA = [
  {
    num: 1,
    question:
      "I’m having trouble paying for my application – what should I do?",
    answer:
      "To be able to pay and send your application, every section must be ticked as complete. If you're applying independently, that includes your referee submitting their reference online. If the payment isn't going through, please double check all details have been entered correctly, you have funds available, and the card has been registered for online payments.",
  },
  {
    num: 2,
    question: "How can I update my name, date of birth or passport details? ",
    answer:
      "For name and date of birth changes, you need you to attach a clear photo or scanned copy of an official document showing these – such as a birth certificate, marriage certificate, driving licence or passport.As long as we’ve got everything we need, we’ll update your details and the changes will display in your application. It's important you also let your your universities and colleges know.",
  },
  {
    num: 3,
    question: "How do I apply for deferred entry?",
    answer:
      "You can select a ‘deferred’ start date for your chosen course when you apply, but it’s important to contact the uni or college before submitting your application to make sure they are happy to accept a deferred application.",
  },
  {
    num: 4,
    question:
      "Where do I enter or link my buzzword for an undergraduate application? ",
    answer:
      "Once you have registered, completed the onboarding steps and created your Hub account, you can then add your buzzword once you start your application to link your self to your school or centre.",
  },
  {
    num: 5,
    question: "How do I apply? ",
    answer:
      "Register in the UCAS Hub and complete the registration questions – confirm the year you want to start your studies and that you're interested in ‘Undergraduate’ level of study.You’ll then be taken to your UCAS Hub dashboard, where you’ll see a tile called ‘Your application’. Simply click ‘Start’ to begin your application. We’ve got lots of information on filling in your application.",
  },
];

function App() {
  const [accordionState, setAccordionState] = useState(2);
  const [accordionIcon, setAccordionIcon] = useState(true);

  const handleClick = function (num) {
    if (accordionState === num) {
      setAccordionState(null);
    } else {
      setAccordionState(num);
    }

    setAccordionIcon((accordionIcon) => !accordionIcon);
    console.log(accordionIcon);
  };

  return (
    <div className="whole-container">
      <h1>Frequently Asked Questions</h1>
      {DATA.map((item) => (
        <AccordionItem
          accordionState={accordionState}
          handleClick={handleClick}
          num={item.num}
          question={item.question}
          answer={item.answer}
          key={item.num}
          accordionIcon={accordionIcon}
        />
      ))}
    </div>
  );
}

export default App;
