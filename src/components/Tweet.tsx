import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './Tweet.css';

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/lucasviga.png" alt="Lucas Viga" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Lucas Viga</strong>
          <span>@lucasviga</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>

          <button type='button'>
            <ArrowClockwise />
            4
          </button>

          <button type='button'>
            <Heart />
            8
          </button>
        </div>
      </div>
    </Link>
  )
}