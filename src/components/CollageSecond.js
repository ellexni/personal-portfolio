import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import mushroom from "../assets/img/mushroom.jpg"
import omori from "../assets/img/omori.jpg"
import plants from "../assets/img/plants.jpg"
import winnie from "../assets/img/winnie.jpg"

export const CollageSecond = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);

    return (
        <div className="collagesec" data-aos="fade-up">
            <img src={mushroom}/>
            <img src={omori}/>
            <img src={plants}/>
            <img src={winnie}/>
        </div>
    )
}
