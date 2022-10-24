import "./App.css";
import "react-slideshow-image/dist/styles.css";
import { useState, useEffect, useRef } from "react";
import { Fade } from "react-slideshow-image";
import Carousel from "react-elastic-carousel";
import Icon from "./Icon";
import HeaderIcon from "./HeaderIcon";
import Popup from "./Popup";
import Navber from "./Navber";

function App() {
  const [data, setData] = useState([]);
  const [selector, setSelector] = useState(null);

  const loadData = async () => {
    const result = await fetch(
      "https://gamertocoder.garena.co.th/api/minigames"
    );
    const json = await result.json();
    setData(json);
  };
  useEffect(() => {
    loadData();
  }, []);

  console.log(data);
  const headerIconElement = data.map((data, index) => {
    return <HeaderIcon key={index} data={data} Click={onImgClick} />;
  });

  const iconElement = data.map((data, index) => {
    return <Icon key={index} data={data} Click={onImgClick} />;
  });

  function onImgClick(datas) {
    setSelector(datas);
  }

  function onImgOut() {
    setSelector(null);
  }

  console.log(selector);

  let selected = null;
  if (!!selector) {
    selected = <Popup data={selector} Click={onImgOut} />;
  }

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
  };

  const breakPoints = [
    { width: 250, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 1286, itemsToShow: 4 },
    { width: 1600, itemsToShow: 5 },
  ];
  const itemsPerPage = 5;
  const carouselRef = useRef(null);

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(data.length);
    }
  };
  const onNextEnd = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };

  document.documentElement.style.overflowY = 'hidden';

  return (
    <div className="App">
      <Navber />
      <hr />
      <div className="game-header">
        <h3>Fade Show</h3>
        <Fade {...properties}>{headerIconElement}</Fade>
      </div>
      <div className="game-container">
        <p>Sliding Show (no auto loop)</p>
        <Carousel
          breakPoints={breakPoints}
          ref={carouselRef}
          enableAutoPlay
          autoPlaySpeed={5000}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          onPrevEnd={onNextEnd}
          onNextEnd={onNextEnd}
          disableArrowsOnEnd={false}
          itemsToShow={itemsPerPage}
        >
          {iconElement}
        </Carousel>
      </div>
      {selected}
    </div>
  );
}

export default App;
