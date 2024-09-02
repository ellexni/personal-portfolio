import { AnimatedText } from "./AnimatedText";
import about from "../assets/img/about.jpeg"


export const About = () => {
    return (
        <div className="about" id="about">
            <img className="fade-in-text" src={about}/>
          <section className="aboutbanner">
            <br></br>
            <br></br>
            <br></br>
          <h1><AnimatedText text="Hi, I'm Denielle Camacho!" /></h1>
          <br></br>
            <br></br>
                <p className="fade-in-text">I'm a second year Honours Math student at the University of Waterloo seeking to gain experience in the coding world. I am always looking forward to learning new things and being innovative</p>
                <br></br>
                <p className="fade-in-text">Outside of schoolwork and coding, I enjoy channeling my creativity in crocheting and performing arts. I graduated high school with a SHSM in Arts and Culture and have completed up to RCM 10 piano. Currently, I enjoy giving exhilarating and entertaining performances with UWaterloo A Cappella Club.</p>
                <br></br>
                <p className="fade-in-text">I love taking my creative and detail-oriented tendencies and applying it to my coding and math work. Thus, creating this website was the perfect way for me to combine the two.</p>
                <br></br>
            <br></br>
            <br></br>
          </section>

          
          
        </div>
      );
}