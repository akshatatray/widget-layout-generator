import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./App.css";

const App = () => {
  const [layout, setLayout] = useState([
    { i: "1", x: 0, y: 0, w: 2, h: 2 },
    { i: "2", x: 2, y: 0, w: 2, h: 2 },
  ]);
  const [highlightedId, setHighlightedId] = useState(null);

  const addBox = () => {
    const cols = 12;
    const rowHeight = 1;
    const boxWidth = 2;
    const boxHeight = 2;
    const isOccupied = (x, y) => {
      return layout.some(
        (item) =>
          x < item.x + item.w &&
          x + boxWidth > item.x &&
          y < item.y + item.h &&
          y + boxHeight > item.y
      );
    };
    let x = 0, y = 0;
    let found = false;

    while (!found) {
      if (!isOccupied(x, y)) {
        found = true;
      } else {
        x++;
        if (x + boxWidth > cols) {
          x = 0;
          y += rowHeight;
        }
      }
    }
    const newItem = {
      i: `${layout.length + 1}`,
      x,
      y,
      w: boxWidth,
      h: boxHeight,
    };

    setLayout([...layout, newItem]);
  };


  const removeBox = (id) => {
    setLayout(layout.filter((item) => item.i !== id));
  };

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
    if (highlightedId) {
      setHighlightedId(null);
    }
  };

  const handleBoxUpdate = (id) => {
    setHighlightedId(id);
  };

  return (
    <div className="container">
      <div className="grid-container">
        <div className="controls">
          <button onClick={addBox}>Add Box</button>
        </div>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={900}
          margin={[10, 10]}
          containerPadding={[0, 0]}
          onLayoutChange={onLayoutChange}
          isResizable
        >
          {layout.map((item) => {
            console.log(item);
            return (
            <div key={item.i} className="box" onMouseEnter={() => handleBoxUpdate(item.i)} onMouseLeave={() => {
              setTimeout(() => setHighlightedId(null), 3000);
            }}>
              <button
                className="remove-button"
                onClick={() => removeBox(item.i)}
              >
                ×
              </button>
            </div>
          )})}
        </GridLayout>
      </div>
      <div className="editor-container">
        <h3>Layout JSON</h3>
        <div className="right-pane">
          <pre>
            {layout.map((item) => (
              <div
                key={item.i}
                className={`json-line ${highlightedId === item.i ? "highlighted" : ""
                  }`}
              >
                {JSON.stringify(item, null, 2)}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
