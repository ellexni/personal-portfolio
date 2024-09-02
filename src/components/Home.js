import { AnimatedText } from "./AnimatedText";
import main from "../assets/img/main.jpg"

export const Home = () => {
    return (
        <div className="home" id="home">
          <section className="banner">
          <h1 className="fade-in-text">Hi, I'm</h1>
          <p>
            <AnimatedText text="Denielle Camacho" />
          </p>
          <h1 className="fade-in-text">Welcome to my portfolio!</h1>
          </section>

          <img className="fade-in-text" src={main}/>
          
        </div>
      );
}