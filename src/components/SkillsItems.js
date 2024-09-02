import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


export const SkillsItems = () => {

    useEffect(() => {
        Aos.init({duration:2000});
    }, []);

    return (
        <div className="skillsitems" data-aos="fade-up">
            <FontAwesomeIcon icon={faPython} className="icon"/>
            <h1>Python</h1>
            <FontAwesomeIcon icon={faCopyright} className="icons"/>
            <h1>C</h1>
            <FontAwesomeIcon icon={faReact} className="icons"/>
            <h1>React</h1>
            
        </div>
    )
}