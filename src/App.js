import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import MemoryCard from './components/MemoryCard';
const cardList = [
  { "path": "/img/1.jpeg", matched: false },
  { "path": "/img/2.jpeg", matched: false },
  { "path": "/img/3.jpeg", matched: false },
  { "path": "/img/4.jpeg", matched: false },
  { "path": "/img/5.jpeg", matched: false },
  { "path": "/img/6.jpeg", matched: false }
]
function App() {
  const [cards, setCards] = useState([]);
  const [selectedOne, setSelectedOne] = useState(null)
  const [selectedTwo, setSelectedtwo] = useState(null)
  const [disabled, setDisable] = useState(false)


  const sortedCards = [...cardList, ...cardList]
    .sort(() => 0.5 - Math.random())
    .map((card) => ({ ...card, id: Math.random() }))
  const prepareCards = () => {
    setCards(sortedCards);
    setSelectedOne(null);
    setSelectedtwo(null);
  }

  const handleSelected = (card) => {
    selectedOne ? setSelectedtwo(card) : setSelectedOne(card)
  }

  useEffect(() => {
    prepareCards();
  }, [])

  useEffect(() => {
    if (selectedOne && selectedTwo) {
      setDisable(true);
      if (selectedOne.path === selectedTwo.path) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.path === selectedOne.path) {
              return { ...card, matched: true }
            } else {
              return card;
            }
          })
        })
        resetState();

      } else {
        setTimeout(() => {
          resetState();
        }, 1000);
      }
    }
  }, [selectedOne, selectedTwo])

  const resetState = () => {
    setSelectedOne(null);
    setSelectedtwo(null);
    setDisable(false)

  }

  return (
    <div className="container">
      <h1>Memory App</h1>
      <button onClick={prepareCards}>Oyunu Başlat</button>
      <div className="card-grid">
        {
          cards.map(card => (
            < MemoryCard
              card={card} key={card.id}
              handleSelected={handleSelected}
              disabled={disabled}
            />
          ))
        }
      </div>
    </div>
  );
}
export default App;

