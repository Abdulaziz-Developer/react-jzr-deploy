import React from "react";
import alphabetData from "./alphabet.json";
class Card extends React.Component {
  render() {
    const result = alphabetData.filter((name) =>
      name.alphabet.includes(this.props.inputAlph)
    );
    const cards = result.map((card) => {
      return (
        <>
          <div className="cards">
            <div className="card">
              <div className="card__image">
                <img src={card.image} width="80" height="120" />
              </div>
              <div className="card__desc">{card.alphabet}</div>
            </div>
          </div>
        </>
      );
    });
    return <>{cards}</>;
  }
}

export default Card;
