import React, { useState, useEffect } from 'react';
import './App.css';
import Sentiment from 'sentiment';
function App() {
  const [phrase, setPhrase] = useState('');
  const sentiment = new Sentiment();

  const [sentimentScore, setSentimentScore] = useState(null);

  useEffect(() => {
      setSentimentScore(sentiment.analyze(phrase));
    }, [phrase]);


  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{fontFamily:"verdana", fontSize: '40px'}}>Sentiment Analysis</h2>
        <input value={phrase} onChange={e => setPhrase(e.target.value)}
          style={{ padding: '10px', fontSize: '20px', width: '90%', borderRadius: '10px', margin: '5rem'}} />
        {
          sentimentScore ?
            sentimentScore.score === 0 ?
            
              <img src="https://media.tenor.com/JcjzAB2M_E8AAAAC/meh-shrug.gif"  alt="neutral" style={{width: '20%', height: '100%', borderRadius: '10px'}} />
              :
              sentimentScore.score > 0 ?
                <img src="https://media1.giphy.com/media/xT5LMHxhOfscxPfIfm/200.webp?cid=ecf05e47akhw5vdi9bec726pxk8qhoj2b3suqj7ve34frkhk&ep=v1_gifs_search&rid=200.webp&ct=g" alt="postive"  style={{width: '20%', height: '100%', borderRadius: '10px'}}/>
                :
                <img src="https://media.giphy.com/media/Mkz2IbZUINmM1kfHzg/giphy.gif" alt="negative" style={{width: '20%', height: '100%', borderRadius: '10px'}}/>
            : ''
        }
      </header>
    </div>
  );
}

export default App;
