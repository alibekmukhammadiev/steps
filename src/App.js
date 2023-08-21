import { useState } from "react";

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

          <p className="message">
            Step {active + 1}: {messages[active]}
          </p>
          <div className="buttons">
            <button
              onClick={previous}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={next}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
