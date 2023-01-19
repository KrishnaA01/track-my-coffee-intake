import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { RxReset } from 'react-icons/rx';

function Card() {

    const userInfo = [
        {name: "Krishna", cups: 4, isHundred: false},
        {name: "Joh", cups: 6, isHundred: false},
        {name: "Lucas", cups: 8, isHundred: false},
        {name: "Sanjeet", cups: 9, isHundred: false},
        {name: "Onia", cups: 14, isHundred: false},
        {name: "Laurenz", cups: 15, isHundred: false},
    ];

  return (
    <section className='card_container'>
       { userInfo.map((item) => {
            return (
                <div className='sub_card_container'>
                    <h1>{item.name}</h1>
                    <h2>{item.cups}</h2>
                    <h4>cups of ☕️ you have drunk</h4>
                    <button><AiOutlinePlusCircle /></button>
                    <button><RxReset /></button>
                </div>
            )
        })}
    </section>
  )
}

export default Card