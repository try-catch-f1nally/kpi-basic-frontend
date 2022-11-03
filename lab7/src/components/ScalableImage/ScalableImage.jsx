import React, {useState} from 'react';

const ScalableImage = ({imgUrl, defaultWidth}) => {
  const [addBtnDisabled, setAddBtnDisabled] = useState(false);
  const [enlargeBtnDisabled, setEnlargeBtnDisabled] = useState(true);
  const [shrinkBtnDisabled, setShrinkBtnDisabled] = useState(true);
  const [imgWidth, setImgWidth] = useState(defaultWidth);

  function addImg() {
    setAddBtnDisabled(true);
    setEnlargeBtnDisabled(false);
    setShrinkBtnDisabled(false);
  }

  function removeImg() {
    setAddBtnDisabled(false);
    setEnlargeBtnDisabled(true);
    setShrinkBtnDisabled(true);
  }

  function enlargeImg() {
    if (imgWidth > 1000) setEnlargeBtnDisabled(true);
    setImgWidth(imgWidth + 20);
    setShrinkBtnDisabled(false);
  }

  function shrinkImg() {
    if (imgWidth < 200) setShrinkBtnDisabled(true);
    setImgWidth(imgWidth - 20);
    setEnlargeBtnDisabled(false);
  }

  return (
    <figure>
      <figcaption>
        <button type="button" onClick={addImg} disabled={addBtnDisabled}>Додати</button>
        <button type="button" onClick={enlargeImg} disabled={enlargeBtnDisabled}>Збільшити</button>
        <button type="button" onClick={shrinkImg} disabled={shrinkBtnDisabled}>Зменшити</button>
        <button type="button" onClick={removeImg} disabled={!addBtnDisabled}>Видалити</button>
      </figcaption>
      <img
        src={imgUrl}
        alt="web-pl"
        hidden={!addBtnDisabled}
        width={imgWidth}
      />
    </figure>
  );
};

export default ScalableImage;
