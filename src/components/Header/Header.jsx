
import "./Header.css";
import Card from "./Card/Card";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <img id="header-img" src="images/header/bggreen.jpg" alt="header img" />
      <div className="header-card-container">
         <Card/>
      </div>
    </div>
    // // <HeaderContainer>

    // // <ImageBoxContainer>
    // //   <ImageContainer src="images/header/bggreen.jpg" alt height={450} />
    // //   <Card />
    // // </ImageBoxContainer>
    // // </HeaderContainer>
    // <>
    // </>
  );
};

export default Header;

