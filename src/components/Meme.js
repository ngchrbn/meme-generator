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
    return (
        <main>
            <div className="form">
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
                <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="meme--image">
            <img src={meme.randomImg} alt={meme.name}/>
            </div>
        </main>
    )
}

export default Meme;