import uranusimg from "../assets/img/uranusimg.png"

export const Uranus = () => {
    return (
        <div className="uranus">
            <a href="https://github.com/ellexni/ur-anus" target="_blank" rel="noopener noreferrer">
            <button>
                <img src={uranusimg} />
                <br></br>
                <br></br>
                <h1>Ur-anus</h1>
                <br></br>
                <br></br>
                <li>Used Discord's API to code a bot that sends images in text channels and plays audios in voice channels</li>
                <li>Gained experience in backend coding</li>
                <li>Tools: Python</li>
                </button>
                </a>
        </div> 
    )
}