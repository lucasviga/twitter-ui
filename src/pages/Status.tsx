import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';

export function Status() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [inputNewAnswer, setInputNewAnswer] = useState('');

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([inputNewAnswer, ...answers]);
    setInputNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([inputNewAnswer, ...answers]);
      setInputNewAnswer('')
    }
  }

  return (
    <main className='status'>
      <Header title="Tweet" />
      
      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Totam accusantium quibusdam hic quia voluptas atque explicabo enim 
        maxime nesciunt quas. Odio illo itaque facere reprehenderit 
        sequi quis iste quidem debitis!" 
      />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor='tweet'>
          <img src="https://github.com/lucasviga.png" alt="Lucas Viga" />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={inputNewAnswer} 
            onChange={(e) => setInputNewAnswer(e.target.value)} 
            onKeyDown={handleHotKeySubmit}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>      

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}        
    </main>
  )
}