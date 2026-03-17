import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import data from "../data/ecosystem.json";

// Define your categories and colors
const categories = [
  { name: "Creation", color: "#B0F2C2" },
  { name: "Distribution", color: "#1F5C3B" },
  { name: "Proliferation & Discovery", color: "#FDE6FA" },
  { name: "Infrastructural Support", color: "#D3A6DD" },
  { name: "Monetization", color: "#A14DBF" },
];

function Home() {
  const [openPanel, setOpenPanel] = useState<number | null>(null);
  const [markdown, setMarkdown] = useState("");

  const handleButtonClick = (id: number) => {
    setOpenPanel(openPanel === id ? null : id);
  };

  useEffect(() => {
    if (openPanel) {
      const item = data.find((d) => d.id === openPanel);

      if (item) {
        const path = `/ecosystem/markdown/${item.description}.md`;

        fetch(path)
          .then((res) => res.text())
          .then((text) => setMarkdown(text));
      }
    }
  }, [openPanel]);

  return (
    <div className="home-container">
      <div className="grid-legend">
        {categories.map((cat) => (
          <div key={cat.name} className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: cat.color }}
            />
            <span className="legend-label">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* GRID */}
      <div className="grid">
        {data.map((btn) => (
          <button
            key={btn.id}
            className={`grid-btn btn${btn.id} ${
              openPanel === btn.id ? "active" : ""
            }`}
            onClick={() => handleButtonClick(btn.id)}
          >
            <div className="btn-name">{btn.name}</div>
          </button>
        ))}
      </div>

      {/* SIDE PANEL */}
      <div className={`side-panel ${openPanel ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpenPanel(null)}>
          &times;
        </button>

        {openPanel && (
          <div className="panel-content">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 className="md-h1" {...props} />,
                h2: ({ node, ...props }) => <h2 className="md-h2" {...props} />,
                h3: ({ node, ...props }) => <h3 className="md-h3" {...props} />,
                p: ({ node, ...props }) => <p className="md-p" {...props} />,
                ul: ({ node, ...props }) => <ul className="md-ul" {...props} />,
                li: ({ node, ...props }) => <li className="md-li" {...props} />,
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
