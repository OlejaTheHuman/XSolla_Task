import React from "react";
import arrow from "../images/arrow.svg";

function Menu({type, options}){
    const [itemsState, setItemsState] = React.useState(0);
    const [menuState, setMenuState] = React.useState(false);

    const menuRef = React.useRef();

    const onClickItem = (index) => {
        setItemsState(index);
        setMenuState(false);
    };

    const onClickMenu = (state) => {
      setMenuState(!state);
    };

    const outsideClick = (e) => {
        if(!e.path.includes(menuRef.current)) {
            setMenuState(false);
        }
    };

    React.useEffect(() => {
        setMenuState(menuState);
    }, [menuState]);


    React.useEffect(() => {
        document.body.addEventListener('click', outsideClick);
    }, []);



    return(
        <div>
            <p>{type}: </p>
            <div className="menu__city">
                <span>{options[itemsState]}</span>
                <img className={menuState === true ? 'flip' : ''} onClick={() => onClickMenu(menuState)} src={arrow} alt="ˬ"/>
            </div>
            {menuState && <div ref={menuRef} className={'menu__popup'}>
                {options.map((item, index) => <p
                    onClick={() => onClickItem(index)}
                    key={`${item}__${index}`}>{item}</p>)}
            </div>}
        </div>
    );
}

export default Menu;