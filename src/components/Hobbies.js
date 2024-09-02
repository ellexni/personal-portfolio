import { AnimatedText } from "./AnimatedText"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

export const Hobbies = () => {

    useEffect(() => {
        Aos.init({duration:2000});
    }, []);

    return (
        <div className="hobbies" data-aos="fade-up">
            <section>
                <h1><AnimatedText text="Hobbies" /></h1>
            </section>
            
        </div>
    )
}