import TrollFace from "../img/TrollFace.png";

function Header() {
    return (
        <header className="navbar">
            <img 
                src={TrollFace} 
                alt="Logo" 
                className="navbar--image"
            />
            <h2 className="navbar--title">Meme Generator</h2>
        </header>
    )
}

export default Header;