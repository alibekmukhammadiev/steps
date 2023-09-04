import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [active, setActive] = useState(0);
  const [toggle, setToggle] = useState(true);
  function previous() {
    if (active > 0) {
      setActive(active - 1);
    }
  }

  function next() {
    if (active < 2) {
      setActive(active + 1);
    }
  }

  function toggleSteps() {
    setToggle(!toggle);
  }
  return (
    <>
      <button className="close" onClick={toggleSteps}>
        &times;
      </button>
      {toggle && (
        <div className="steps">
          <div className="numbers">
            <div className={active >= 0 ? "active" : ""}>1</div>
            <div className={active >= 1 ? "active" : ""}>2</div>
            <div className={active >= 2 ? "active" : ""}>3</div>
          </div>

          <StepMessage active={active}>{messages[active]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={previous}>
              <span>
                <AiOutlineArrowLeft />
              </span>
              Previous
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={next}
              text="Next"
            >
              Next
              <span>
                <AiOutlineArrowRight />
              </span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ active, children }) {
  return (
    <div className="message">
      <h3>Step {active + 1}:</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
