import React, {useState} from 'react';
import fetch from 'node-fetch';
import './App.css';

console.log(JSON.stringify(process.env))
const PORT = process.env.REACT_APP_API_PORT || 5000;
const URL = process.env.REACT_APP_API_URL || "localhost";

const API_ENDPOINT=`http://${URL}:${PORT}/api/scrape`

const createApiQuery = (url) => `${API_ENDPOINT}?website=${url}`

function App() {
  const [html, setHtml] = useState("");
  const [url, setUrl] = useState("");
  const [fetching, setFetching] = useState(false);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);   
  }

  const handleFormSubmit = () => {
    setFetching(true);
    fetch(createApiQuery(url))
      .then(response => response.text())
      .then(response => setHtml(response))
      .then(() => setFetching(false))
  }

  return (
    <div className="App ConsumeSpace Flexible Borderless">
      <div>
        Scrape URL: <input type="text" value={url} onChange={handleUrlChange}/>
        <button disabled={fetching} type="submit" onClick={handleFormSubmit}>Submit</button>
      </div>
      <div className="Flexible ConsumeSpace">
      <div className="Fillable">
      {
        fetching ? <div>Fetching Data...</div> 
        : html ? <textarea className="HtmlHeader ConsumeSpace Borderless" disabled value={html}></textarea> : <></>
      }
      </div>
      </div>
    </div>
  );
}

export default App;
