import React, { useEffect, useState } from "react";
import quoteLogo from "./quote.png";
import fire from "./fire.png";
import axios from "axios";
import { FaChevronRight } from "react-icons/fa";
import Loading from "./Loading";

const Card = () => {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    const response = await axios.get("https://type.fit/api/quotes");
    setLoading(false);
    setQuotes(response.data);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const random = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    setIndex(randomNumber);
  };

  return (
    <>
      <h1 className="title">Motivational Quotes</h1>
      <div className="container">
        <img src={quoteLogo} alt="logo" className="quote" />
        <div className="textArea">
          <h2> {quotes[index].text} </h2>
          <h1> - {quotes[index].author}</h1>
        </div>

        <img src={fire} className="fire" alt="fire-logo" />
      </div>
      <button className="next-btn" onClick={random}>
        <FaChevronRight />
      </button>
    </>
  );
};

export default Card;
