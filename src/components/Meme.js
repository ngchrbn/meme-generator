function Meme() {
    return (
        <main>
            <form className="form">
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button className="form--button">Get a new meme image  🖼</button>
            </form>
        </main>
    )
}

export default Meme;