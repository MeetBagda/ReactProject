import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./CalcStyles.css";

export default function Calculator() {
    const [display, setDisplay] = useState("");
    const [expression, setExpression] = useState([]);

    const handleClick = value => {
        setDisplay(value);
        setExpression([...expression, value]);
    };

    const handleResult = () => {
        const result = expression
            .join("")
            .split(/(\D)/g)
            .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
            .reduce((acc, value, index, array) => {
                switch (value) {
                    case "+":
                        return (acc = acc + array[index + 1]);
                    case "-":
                        return (acc = acc - array[index + 1]);
                    case "x":
                        return (acc = acc * array[index + 1]);
                    case "÷":
                        return (acc = acc / array[index + 1]);
                    default:
                        return acc;
                }
            });
        setDisplay(result);
        setExpression("");
    };

    return (
        <div className="App">
            <h3 className="display">{display}</h3>

            <div className="expression">{expression}</div>

            <div className="panel">
                <div className="numbers">
                    <button className="calcBtn" onClick={() => handleClick(7)}>7</button>
                    <button className="calcBtn" onClick={() => handleClick(8)}>8</button>
                    <button className="calcBtn" onClick={() => handleClick(9)}>9</button>

                    <button className="calcBtn" onClick={() => handleClick(4)}>4</button>
                    <button className="calcBtn" onClick={() => handleClick(5)}>5</button>
                    <button className="calcBtn" onClick={() => handleClick(6)}>6</button>

                    <button className="calcBtn" onClick={() => handleClick(1)}>1</button>
                    <button className="calcBtn" onClick={() => handleClick(2)}>2</button>
                    <button className="calcBtn" onClick={() => handleClick(3)}>3</button>

                    <button className="calcBtn" onClick={() => handleClick(0)}>0</button>
                </div>

                <div className="operators">
                    <button className="calcBtn" onClick={() => handleClick("÷")}>÷</button>
                    <button className="calcBtn" onClick={() => handleClick("x")}>x</button>
                    <button className="calcBtn" onClick={() => handleClick("-")}>-</button>
                    <button className="calcBtn" onClick={() => handleClick("+")}>+</button>
                    <button className="calcBtn" onClick={() => handleResult()}>=</button>
                </div>
            </div>

        </div>
    );
}