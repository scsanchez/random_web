import { useState } from "react";
import "bulma/css/bulma.min.css";
import { generateRandomNumber } from "./utils/functions/generateRandomNumber.tsx";
import { resetValues } from "./utils/functions/resetValues.tsx";

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [randomNumber, setRandomNumber] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  return (
    <div className="container">
      <div className="columns is-centered is-mobile">
        <div className="column is-narrow">
          <form
            className="box"
            onSubmit={(event) => {
              event.preventDefault();
              generateRandomNumber(min, max, setRandomNumber, setHistory);
            }}
          >
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Min</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="min"
                      value={min}
                      onChange={(e) => setMin(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Max</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="max"
                      value={max}
                      onChange={(e) => setMax(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="has-text-centered">
              <button
                className="button is-primary mr-3"
                type="submit"
                onClick={(event) => {
                  event.preventDefault();
                  generateRandomNumber(min, max, setRandomNumber, setHistory);
                }}
              >
                Generate
              </button>
              <button
                className="button is-light"
                type="button"
                onClick={() =>
                  resetValues(setMin, setMax, setRandomNumber, setHistory)
                }
              >
                Reset
              </button>
            </div>

            {randomNumber !== null && (
              <div className="notification is-primary mt-4">
                Random Number: {randomNumber}
              </div>
            )}
          </form>
        </div>
      </div>
      {randomNumber !== null && (
        <div className="columns is-centered is-mobile">
          <div className="column is-narrow">
            <div className="box">
              <h2 className="title">History</h2>
              <ul>
                {history.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
