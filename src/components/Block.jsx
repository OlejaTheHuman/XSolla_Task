import React from "react";
import favorite from "../images/favorite.svg";
import isFavorite from "../images/isFavorite.svg";

function Block({name, date, image}) {
    const [favoriteState, setFavoriteState] = React.useState(false);
    const onClickFavorite = (state) => {
      setFavoriteState(!state);
    };

    const day = date.split('.');

    return(
        <div className="content__block">
            <img className="block__image" src={image} alt="Rave Autumn"/>
            <div className="block__utils">
                <div className="block__number">
                    {day[0]}
                </div>
                <img onClick={() => onClickFavorite(favoriteState)}
                     src={favoriteState === false ? favorite : isFavorite} alt="save" className="block__favorites"/>
                <p className="block__name">{name}</p>
            </div>
        </div>
    );
}

export default Block;