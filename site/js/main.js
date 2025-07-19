const { useState } = React;

function Section({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    React.createElement('div', { className: 'section' },
      React.createElement('h2', { onClick: () => setOpen(!open) }, title),
      open && React.createElement('div', null, children)
    )
  );
}

function App() {
  return (
    React.createElement('div', null,
      React.createElement('header', null,
        React.createElement('h1', null, 'John Doe'),
        React.createElement('img', { src: 'photo.jpg', alt: 'Profile photo' }),
        React.createElement('div', { className: 'links' },
          React.createElement('a', { href: 'https://github.com/' }, 'GitHub'),
          React.createElement('a', { href: 'https://www.linkedin.com/' }, 'LinkedIn')
        )
      ),
      React.createElement(Section, { title: 'Curriculum Vitae' },
        React.createElement('p', null, 'Add your CV details here.')
      ),
      React.createElement(Section, { title: 'Projects' },
        React.createElement('ul', null,
          React.createElement('li', null, 'Project A'),
          React.createElement('li', null, 'Project B')
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
