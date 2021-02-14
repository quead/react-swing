0/**
 * @project react-swing
 * Created by quead
 */

import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import ReactSwing from '../../dist/react-swing.js';
import './style.css';

const App = () => {
  const [cardCount, setCardCount] = useState(4);
  const stackEl = useRef();

  const addCard = () => {
    setCardCount(cardCount + 1);
  };

  const removeCard = () => {
    setCardCount(cardCount - 1);
  }

  const renderCards = () => {
    const cardData = [
      {
        icon: '♣',
        className: 'clubs',
      },
      {
        icon: '♦',
        className: 'diamonds',
      },
      {
        icon: '♥',
        className: 'hearts',
      },
      {
        icon: '♠',
        className: 'spades',
      },
    ];

    const cards = [];

    for (let i = 0; i < cardCount; i++) {
      const data = cardData[i % cardData.length];

      cards.push(
        <div key={i} className={`card ${data.className}`} ref={`card${i}`}>
          {data.icon}
        </div>,
      );
    }

    return cards;
  };

  return (
    <div>
      <div id="viewport">
        {/*
          ReactSwing Element
        */}
        <ReactSwing
          className="stack"
          stackStyle="DECK"
          ref={stackEl}
          throwout={e => console.log('throwout', e)}
        >
          {/*
              children elements is will be Card
          */}
          {/** 
          <div className="card clubs" ref="card1" throwout={(e) => console.log('card throwout', e)}>
            ♣
          </div>
          <div className="card diamonds" ref="card2">
            ♦
          </div>
          <div className="card hearts" ref="card3">
            ♥
          </div>
          <div className="card spades" ref="card4">
            ♠
          </div>
          */}
          {renderCards()}
        </ReactSwing>
      </div>
      <div className="control">
        <button type="button" onClick={() => removeCard()}>
          remove Card
        </button>
        <button type="button" onClick={() => addCard()}>
          add Card
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
