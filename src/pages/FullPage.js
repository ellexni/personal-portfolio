import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function FullPage() {

    useEffect(() => {
        Aos.init({duration:2000});
    }, []);

    return (
        <div className="fullpage">
            <div className="wip" data-aos="fade-up">
                <h1>Sorry!</h1>
                <br></br>
                <p>Nothing to see here for now</p>
            </div>
        </div>
    )
}