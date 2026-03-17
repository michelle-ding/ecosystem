import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function About() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/markdown/about.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="about-page">
      <ReactMarkdown
        components={{
          h1: ({node, ...props}) => <h1 className="about-md-h1" {...props} />,
          h2: ({node, ...props}) => <h2 className="about-md-h2" {...props} />,
          h3: ({node, ...props}) => <h3 className="md-h3" {...props} />,
          p: ({node, ...props}) => <p className="md-p" {...props} />,
          ul: ({node, ...props}) => <ul className="md-ul" {...props} />,
          li: ({node, ...props}) => <li className="md-li" {...props} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default About;
