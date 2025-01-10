import logo from "../assets/img/logo.png"

export const Website = () => {
    return (
        <div className="website">
            <a href="https://github.com/ellexni/personal-portfolio" target="_blank" rel="noopener noreferrer">
            <button>
                <img src={logo} />
                <br></br>
                <br></br>
                <h1>Website</h1>
                <br></br>
                <br></br>
                <li>Created an interactive portfolio website</li>
                <li>Honed UI/UX skills</li>
                <li>Gained experience in HTML, CSS, and JavaScript</li>
                <li>Tools: React, Figma</li>
                </button>
                </a>
        </div> 
    )
}