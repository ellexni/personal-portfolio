import { Contact } from "../components/Contact"
import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { Hobbies } from "../components/Hobbies"
import { CollageFirst } from "../components/CollageFirst"
import { CollageSecond } from "../components/CollageSecond"
import { SkillsItems } from "../components/SkillsItems"


export default function AboutPage() {
    return (
        <div className="aboutpage">
            <About />
            <Skills />
            <br></br>
            <br></br>
            <SkillsItems />
            <Hobbies />
            <br></br>
            <CollageFirst />
            <CollageSecond />
            <Contact />
        </div>
    )
}