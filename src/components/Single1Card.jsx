
import React from 'react'
import './SingleCard.css'
function Single1Card({card,handleChoice,flipped,disabled  }) {
    const handleClick=()=>{
      if(!disabled){
        handleChoice(card)
      }
    }

  return (
    
      <div className='card'>
        <div className={flipped ? "flipped" : ""}>
      <img className='front' src={card.src} alt="card-font" />
      <img className='back' src="/img/cover.png" onClick={handleClick}  alt="card-back" />
      </div> 
    </div>
  )
}

export default Single1Card

