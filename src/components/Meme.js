import React from "react"
import memesData from "../memesData"

function Meme() {

    const [meme, setMeme] = React.useState(
        {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            name: 'One Does Not Simply'
        }
    )

    const [allMemeImgs] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImgs.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        const randomImgUrl = memesArray[randomNum].url;
        const randomImgName = memesArray[randomNum].name;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: randomImgUrl,
            name: randomImgName
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    className="form--input"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    className="form--input"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImg} alt={meme.name} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;