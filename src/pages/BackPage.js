import { Uranus } from "../components/Uranus"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


export default function BackPage() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
    return (
        <div className="backpage" data-aos="fade-up">
            <Uranus />
        </div>
    )
}