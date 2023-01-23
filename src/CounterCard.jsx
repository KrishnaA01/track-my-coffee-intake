import { useEffect, useState, useRef } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { RxReset } from 'react-icons/rx';



function Card() {

    const [ data, setData ] = useState(
            () => JSON.parse(localStorage.getItem('data'))|| []);
     
    
    useEffect(()=> {
        if (Object.keys(data).length === 0) {
            localStorage.setItem('data', JSON.stringify(
                [
                   {id:1, name: "Laurenz", cups: 4, isHundred: false},
                   {id:2, name: "Onia", cups: 8, isHundred: false},
                   {id:3, name: "Sanjeet", cups: 8, isHundred: false},
                   {id:4, name: "Joh", cups: 9, isHundred: false},
                   {id:5, name: "Krishna", cups: 14, isHundred: false},
                   {id:6, name: "Lukas", cups: 6, isHundred: false},
                   {id:7, name: "Firas", cups: 15, isHundred: false}
                ] 
                 ));
        } else
            localStorage.setItem('data', JSON.stringify(data));
        }, [data]);


    const handleClick = (id) => {
        setData(prevData => prevData.map(item => {
        if (item.id === id) {
             return {...item, cups: item.cups + 1 }
        }
        return item;
        }));
    };
    

    const handleClean = (id) => {
        setData(prevData => prevData.map(item => {
        if (item.id === id) {
             return {...item, cups: 0 }
        }
        return item;
        }));
    };

  return (
    <section className='card_container'>
       {data.map((item) => {
            return (
                <div className='sub_card_container' key={item.id}>
                    <h1>{item.name}</h1>
                    <h1>{item.cups}</h1>
                    <p>cups of ☕️ you have drunk</p>
                    <button onClick={() => handleClick(item.id)}><AiOutlinePlusCircle /></button>
                    <button onClick={() => handleClean(item.id)}><RxReset /></button>
                </div>
            )
        })}
    </section>
  )
}

export default Card