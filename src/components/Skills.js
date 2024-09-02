import { AnimatedText } from "./AnimatedText"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

export const Skills = () => {
    
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);

    return (
        <div className="skills" data-aos="fade-up">
            <section>
                <h1><AnimatedText text="Skills" /></h1>
            </section>
            
        </div>
    )
}