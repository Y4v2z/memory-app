import React from 'react'
import "./MemoryCard.css";

const MemoryCard = ({ card, handleSelected, disabled, rotated }) => {
    const handleClick = () => {
        if (!disabled) {
            handleSelected(card)
        }
    }


    return (
        <div className="card">
            <div className={rotated ? "rotated" : ""} >
                <img src={card.path} alt="" className="cardFront" />
                <img src="/img/cover.jpeg" alt="" className="cardBack" onClick={handleClick} />
            </div>
        </div>

    )
}

export default MemoryCard;