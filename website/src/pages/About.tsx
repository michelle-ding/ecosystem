import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown"; // <-- type-only import

function About() {
  const [markdown1, setMarkdown1] = useState("");
  const [markdown2, setMarkdown2] = useState("");

  useEffect(() => {
    fetch("/markdown/about.md")
      .then((res) => res.text())
      .then((text) => setMarkdown1(text));
  }, []);

  useEffect(() => {
    fetch("/markdown/stayupdated.md")
      .then((res) => res.text())
      .then((text) => setMarkdown2(text));
  }, []);

  const markdownComponents: Components = {
    h1: ({ node, ...props }) => <h1 className="about-md-h1" {...props} />,
    h2: ({ node, ...props }) => <h2 className="about-md-h2" {...props} />,
    h3: ({ node, ...props }) => <h3 className="md-h3" {...props} />,
    p: ({ node, ...props }) => <p className="md-p" {...props} />,
    ul: ({ node, ...props }) => <ul className="md-ul" {...props} />,
    li: ({ node, ...props }) => <li className="md-li" {...props} />,
  };

  return (
   <div className="about-page">
  <div className="about-markdown-container">
    <div className="markdown-column main-column">
      <ReactMarkdown components={markdownComponents}>
        {markdown1}
      </ReactMarkdown>
    </div>
    <div className="markdown-column side-column">
      <ReactMarkdown components={markdownComponents}>
        {markdown2}
      </ReactMarkdown>
    </div>
  </div>
</div>

  );
}

export default About;
