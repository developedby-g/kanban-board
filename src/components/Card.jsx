import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import "../styles/Card.css";

const Card = ({ id, title, tags, status }) => {
  return (
    <div className="container">
      <div className="cardHeading2">
        <span className="id">{id}</span>
        <div className="image">
          <img
            src="https://quicksell.co/assets/logo/logo.png"
            alt="QuickSell"
          />
          <div className="status"></div>
        </div>
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="tags">
        <div className="tag">
          <BsExclamationSquareFill />
        </div>
        {tags &&
          tags.map((tag, index) => (
            <div key={index} className="tag">
              <span>●</span> {tag}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;