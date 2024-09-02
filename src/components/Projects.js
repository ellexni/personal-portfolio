import { Frontend } from "./Frontend"
import { Backend } from "./Backend"
import { Fullstack } from "./Fullstack"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { Link } from "react-router-dom"

export const Projects = () => {
    
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    
    return (        
        <div className="project" id="projects" data-aos="fade-up">
            <ul>            
                <CustomLink to="/front-end-projects"><Frontend /></CustomLink>
                <CustomLink to="/back-end-projects"><Backend /></CustomLink>
                <CustomLink to="/full-stack-projects"><Fullstack /></CustomLink>
            </ul>
        </div>

        
        
    )
}


function CustomLink({ to, children, ...props }) {
    const path=window.location.pathname

    return (
        <li className={ path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}