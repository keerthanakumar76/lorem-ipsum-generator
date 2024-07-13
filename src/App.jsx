import { useState } from 'react';
import Lorem from './lorem';
import './App.css';

function App() {
  const [paragraphs, setParagraphs] = useState(1);
  const [loremText, setLoremText] = useState([]);

  const handleChange = (e) => {
    setParagraphs(e.target.value);
  };

  const generateLorem = () => {
    let paragraphCount = paragraphs;
    if (paragraphCount > 10) {
      alert("Oh God! you are demanding many paragraphs in one go, kindly give little😀");
      paragraphCount = 10;
    }

    fetch(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphCount}&start-with-lorem=1`)
      .then(response => response.json())
      .then(data => setLoremText(data))
      .catch(error => console.error('Error fetching lorem ipsum:', error));
  };

  return (
    <div className="App">
      <h1>Lorem Generator</h1>
      <label>
        Number of Paragraphs:
         <input type="number" value={paragraphs} onChange={handleChange} min="1" />
      </label>
      <button onClick={generateLorem}>Generate</button>
      <Lorem text={loremText} />
    </div>
  );
}

export default App;
