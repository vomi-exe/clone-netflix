import { useRef, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSlideNumber(slideNumber - 1);
        }
        if (direction === "right" && slideNumber < 6) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSlideNumber(slideNumber + 1);
        }

    }





    return <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIos style={{ display: !isMoved && "none" }} className="sliderArrow left" onClick={() => handleClick("left")} />
            <div className="container" ref={listRef}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <ArrowForwardIos className="sliderArrow right" onClick={() => handleClick("right")} />
        </div>
    </div>;
};

export default List;
