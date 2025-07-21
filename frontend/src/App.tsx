import { useState } from 'react';

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-left">
      <button
        className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>
      {open && <div className="mt-2 px-3">{children}</div>}
    </div>
  );
}

export default function App() {
  return (
    <div className="mx-auto max-w-2xl p-6 text-center space-y-6">
      <h1 className="text-3xl font-semibold">Your Name</h1>
      <img className="w-32 h-32 rounded-full object-cover mx-auto" src="/photo.jpg" alt="Your portrait" />
      <div className="flex justify-center space-x-4">
        <a className="text-blue-600 hover:underline" href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
        <a className="text-blue-600 hover:underline" href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div className="space-y-4">
        <Accordion title="CV">
          <p>Insert your CV information here.</p>
        </Accordion>
        <Accordion title="Projects">
          <ul className="list-disc list-inside">
            <li>Project 1</li>
            <li>Project 2</li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
}
