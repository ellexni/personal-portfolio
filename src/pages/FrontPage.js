import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { Website } from "../components/Website";

export default function FrontPage() {

    useEffect(() => {
        Aos.init({duration:2000});
    }, []);

    return (
        <div className="frontpage" data-aos="fade-up">
            <Website />       
        </div>
    )
}