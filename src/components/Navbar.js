import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/" className="site-title">
                <img src={logo} alt="Logo" />
        </Link>
        <ul>
            <CustomLink to="/">Portfolio</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:6d781a24-9f2c-4fd2-8207-7f1ae82033af" target="_blank" rel="noopener noreferrer">Resume</a>
        </ul>
    </nav>
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