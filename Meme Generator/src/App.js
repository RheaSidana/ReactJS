import { useState } from "react";
import "./App.css";
import ImagesCollection from "./components/ImageCollection";
import ImageForMeme from "./components/ImageForMeme";
import NavBar from "./components/NavBar";
import DisplayMeme from './components/DisplayMeme';

function App() {
  const pictureSeleted = false;
  const imgForMeme = null;
  const textForMeme = null;
  const textPos = null;

  const imageList = {
    pic1: require("./images/picture1.png"),
    pic2: require("./images/picture2.png"),
    pic3: require("./images/picture3.png"),
    pic4: require("./images/picture4.png"),
    pic5: require("./images/picture5.png"),
    pic6: require("./images/picture6.png"),
    pic7: require("./images/picture7.png"),
    pic8: require("./images/picture8.png"),
    pic9: require("./images/picture9.png"),
    pic10: require("./images/picture10.png"),
    pic11: require("./images/picture11.png"),
    pic12: require("./images/picture12.png"),
  };

  let [selectButton, toggleSelectButton] = useState(pictureSeleted);
  let [imgMeme, setImage] = useState(imgForMeme);
  let [textMeme, setText] = useState(textForMeme);
  let [textMemePos, setTextPos] = useState(textPos);

  let toggleSelectPictureButton = (imgKey) => {
    let selectBtn = selectButton;
    selectBtn ? (selectBtn = false) : (selectBtn = true);
    toggleSelectButton(selectBtn);
    setImage(imgKey);
  };

  let setMemeImageWithText = (text,pos) => {
    setText(text);
    setTextPos(pos);
  };

  return (
    <div>
      <NavBar />
      <main className="mt-5 ms-5">
        {selectButton === false ? (
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 ps-2">
            <ImagesCollection
              imageList={imageList}
              picSelectBtn={toggleSelectPictureButton}
            />
          </div>
        ) : (
          <center>
            {textMeme === null ? (
              <ImageForMeme
                image={imageList[imgMeme]}
                backBtn={toggleSelectPictureButton}
                memeConfirm={setMemeImageWithText}
              />
            ) : (
              <DisplayMeme image={imageList[imgMeme]} text={textMeme} position={textMemePos}/>
            )}
          </center>
        )}
      </main>
    </div>
  );
}

export default App;
