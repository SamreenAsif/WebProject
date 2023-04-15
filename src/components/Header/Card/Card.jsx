import { CardContainer, TitleContainer, TextContainer } from "./Card.styles";
import "./card.css";
const Card = () => {
  return (
    <div className="CardContainer">
      <h1 className="TitleContainer ">What's your dream?</h1>
      <p className="TextContainer">
        Log in now and learn the skills to help make it happen.
      </p>
    </div>
  );
};

export default Card;
