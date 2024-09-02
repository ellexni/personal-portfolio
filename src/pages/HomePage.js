import { Home } from "../components/Home"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"

export default function HomePage() {
    return (
        <div className="homepage">
            <Home />
            <Projects />
            <Contact />
        </div>
    
    )
}