import stardew from "../assets/img/stardew.png"
import bag from "../assets/img/bag.JPG"
import masterball from "../assets/img/masterball.jpg"
import spiderman from "../assets/img/spiderman.jpg"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


export const CollageFirst = () => {

    useEffect(() => {
        Aos.init({duration:2000});
    }, []);

    return (
        <div className="collage" data-aos="fade-up">
            <img src={stardew}/>
            <img src={bag}/>
            <img src={masterball}/>
            <img src={spiderman}/>
        </div>
    )
}