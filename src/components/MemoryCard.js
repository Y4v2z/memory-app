import React from 'react'
import "./MemoryCard.css";

const MemoryCard = ({ card, handleSelected, disabled }) => {
    const handleClick = () => {
        if (!disabled) {
            handleSelected(card)
        }
    }


    return (
        <div className="card">
            <img src={card.path} alt="" className="cardFront" />
            <img src="/img/cover.jpeg" alt="" className="cardBack" onClick={handleClick} />
        </div>

    )
}

export default MemoryCard;