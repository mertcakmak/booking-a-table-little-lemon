import { useNavigate } from "react-router-dom";
import { Button, Heading } from "../../../../components";
import "./Hero.css";
import heroImage from "../../../../assets/little-lemon-hero.webp";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="LL-Hero">
      <div className="LL-Hero-left">
        <Heading tag="h1" size="2xl">
          Little Lemon
        </Heading>
        <p className="subtitle">Chicago</p>
        <p id="LL-Hero-desc">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button
          ariaLabel="Reserve a Table"
          id="LL-Hero-btn"
          primary
          onClick={() => navigate("/bookings")}
        >
          Reserve a Table
        </Button>
      </div>
      <div className="LL-Hero-right">
        <img src={heroImage} alt="Little Lemon - Hero" />
      </div>
    </section>
  );
};
