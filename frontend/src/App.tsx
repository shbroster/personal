import { useState } from 'react';

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <button onClick={() => setOpen(!open)}>{title}</button>
      {open && <div>{children}</div>}
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>Your Name</h1>
      <img className="photo" src="/photo.jpg" alt="Your portrait" />
      <div className="links">
        <a href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <Accordion title="CV">
        <p>Insert your CV information here.</p>
      </Accordion>
      <Accordion title="Projects">
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </Accordion>
    </div>
  );
}
