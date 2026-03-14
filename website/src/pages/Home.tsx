import { useState } from "react";
import data from "../data/ecosystem.json"; 

function Home() {
  const [openPanel, setOpenPanel] = useState<number | null>(null);

  const handleButtonClick = (id: number) => {
    setOpenPanel(openPanel === id ? null : id); 
  };

  return (
    <div className="home-container">
      <div className="grid">
        {data.map((btn) => (
          <button
            key={btn.id}
            className={`grid-btn btn${btn.id} ${openPanel === btn.id ? "active" : ""}`}
            onClick={() => handleButtonClick(btn.id)}
          >
            <div className="btn-name">{btn.name}</div>

          </button>
        ))}
      </div>

      <div className={`side-panel ${openPanel ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpenPanel(null)}>
          &times;
        </button>
        {openPanel && (
          <div className="panel-content">
            <h2>{data.find((d) => d.id === openPanel)?.name}</h2>
            <h4>{data.find((d) => d.id === openPanel)?.category}</h4>
            <p>{data.find((d) => d.id === openPanel)?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
