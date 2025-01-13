import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const facts = [
    {
      id: 1,
      title: "Was fist relesed in  2013",

    },
    {
      id: 2,
      title: "Was originaly creted by Jordan",
    },
    {
      id: 3,
      title: "Has 100k on github",
    },
  ];
  return (
    < >
    <div style={{ textAlign: "left" }} >
      <a  href="https://react.dev" target="_blank">
        <img
          src={reactLogo}
          className="logo react"
          alt="React logo"
        />
      </a>
      <h1>Fan facts about React</h1>
      <h2  >
        {facts.map((fact) => (
          <li key={fact.id}>{fact.title}</li> 
        ))}
      </h2>
      </div>
    </>
  );
  
}

export default App
