import { useEffect, useState, useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RxReset } from "react-icons/rx";
import quotes from "./quotes";

function Card() {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("data")) || []
  );

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      localStorage.setItem(
        "data",
        JSON.stringify([
          {
            id: 1,
            name: "Laurenz",
            cups: 4,
            isHundred: false,
            quotation: quote,
          },
          { id: 2, name: "Onia", cups: 8, isHundred: false, quotation: quote },
          {
            id: 3,
            name: "Sanjeet",
            cups: 8,
            isHundred: false,
            quotation: quote,
          },
          { id: 4, name: "Joh", cups: 9, isHundred: false, quotation: quote },
          {
            id: 5,
            name: "Krishna",
            cups: 14,
            isHundred: false,
            quotation: quote,
          },
          { id: 6, name: "Lukas", cups: 6, isHundred: false, quotation: quote },
          {
            id: 7,
            name: "Firas",
            cups: 15,
            isHundred: false,
            quotation: quote,
          },
        ])
      );
    } else localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const quote = "I love my ☕️";
  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    return randomQuote;
  };

  const handleClick = (id) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, cups: item.cups + 1, quotation: randomQuote() };
        }
        return item;
      })
    );
  };

  const handleClean = (id) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, cups: 0 };
        }
        return item;
      })
    );
  };

  return (
    <section className="card_container">
      {data.map((item) => {
        return (
          <div className="sub_card_container" key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.cups}</h1>
            <p>{item.quotation}</p>
            <button onClick={() => handleClick(item.id)}>
              <AiOutlinePlusCircle />
            </button>
            <button onClick={() => handleClean(item.id)}>
              <RxReset />
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default Card;
