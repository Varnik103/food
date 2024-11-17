import { Link } from "react-router-dom";

import css from "./SmallCard.module.css";

let SmallCard = ({ imgSrc, text, present }) => {
  return (
    <div className={present === true ? css.card : css.cardd}>
      <div className={css.imgBox}>
        <img src={imgSrc} alt="card image" className={css.img} />
        {present !== true && (
          <div className={css.overlay}>
            <span className={css.comingSoon}>Coming Soon</span>
          </div>
        )}
      </div>
      <div className={css.txtBx}>
        <div className={css.txt}>{text}</div>
      </div>
    </div>
  );
};

export default SmallCard;
