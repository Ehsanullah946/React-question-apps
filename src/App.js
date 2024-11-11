import { useState } from "react";

const questionData = [
  {
    id: 2,
    question: "what language is React based on?",
    answer: ["java", "c++", "JavaScript", "node"],
  },

  {
    id: 2,
    question: "what are  the building blocks of react Apps",
    answer: ["jsx", "computer", "component", "react"],
  },
  {
    id: 1,
    question:
      "what is the name of syntax we use in react to describe the component",
    answer: ["mongo", "Jsx", "typeScirpt", "laravel"],
  },
  {
    id: 0,
    question: "what is the most popular framework of JavaScript",
    answer: ["React.js", "React Native", "java", "Next.js"],
  },
  {
    id: 0,
    question:
      "which javaScirpt framework is commenly used for backend developer ",
    answer: ["Node.js", "React Native", "ruby", "Next.js"],
  },
  {
    id: 3,
    question:
      "what is a widely used state management library for react application  ",
    answer: ["Webpack", "Express", "ruby", "Redux"],
  },
  {
    id: 1,
    question:
      "what is an alternative to TypeScript for adding type checking in javaScript ",
    answer: ["MongoDB", "Flow", "Next.js", "Jest"],
  },
  {
    id: 3,
    question: "which testing framework is popular for javaScrip appliction ",
    answer: ["Closure", "Express", "Redux", "Jest"],
  },
];

export default function App() {
  return (
    <div className="app">
      <Main />
    </div>
  );
}

function Main() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 8) setStep((s) => s + 1);
  }

  function handleClose() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button className="colse" onClick={handleClose}>
        {isOpen ? "close" : "open"}
      </button>
      {isOpen && (
        <div>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
            <div className={step >= 5 ? "active" : ""}>5</div>
            <div className={step >= 6 ? "active" : ""}>6</div>
            <div className={step >= 7 ? "active" : ""}>7</div>
            <div className={step >= 8 ? "active" : ""}>8</div>
          </div>
          <GarlleryImage step={step} handleNext={handleNext} />
          <div className="btn__NP">
            <Button onClick={handlePrevious}>
              <span>👈</span>Previouse
            </Button>
            <Button onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function GarlleryImage({ step, handleNext }) {
  return (
    <div>
      <Question data={questionData[step - 1]} handleNext={handleNext} />
    </div>
  );
}
function Question({ data, handleNext }) {
  const [select, setSelect] = useState(null);

  function handleAnswerClick(answer, index) {
    setSelect(answer);
    if (index === data.id) {
      handleNext();
      alert(`Correct Answer! The answer is: ${answer}`);
    } else {
      alert("Incorrect answer. Try again.");
    }
  }
  return (
    <>
      <div className="container">
        <h1>{data.question}</h1>
        <ul>
          {data.answer.map((ans, index) => (
            <li key={index}>
              <button onClick={() => handleAnswerClick(ans, index)}>
                {ans}
              </button>
            </li>
          ))}
        </ul>
        {/* {select && <p>Your selected answer: {select}</p>} */}
      </div>
    </>
  );
}

function Button({ children, onClick }) {
  return (
    <div className="btn__NP">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
