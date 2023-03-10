import { FormEvent, KeyboardEvent, useState } from 'react';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';

import './Timeline.css';

export function Timeline() {
  const [tweets, setTweets] = useState<string[]>([]);
  const [inputNewTweet, setInputNewTweet] = useState('');

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([inputNewTweet, ...tweets]);
    setInputNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([inputNewTweet, ...tweets]);
      setInputNewTweet('')
    }
  }

  return (
    <main className='timeline'>
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor='tweet'>
          <img src="https://github.com/lucasviga.png" alt="Lucas Viga" />
          <textarea 
            id="tweet" 
            placeholder="What's happening?"
            value={inputNewTweet}
            onChange={(event) => setInputNewTweet(event.target.value)}
            onKeyDown={handleHotKeySubmit}
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}        
    </main>
  )
}