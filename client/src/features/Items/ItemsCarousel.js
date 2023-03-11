import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ItemsCarousel = ({ items }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [initialPosition, setInitialPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const carouselRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const mobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    setIsMobile(mobile);
  }, []);

  useEffect(() => {
    const carouselWidth = carouselRef.current.getBoundingClientRect().width;
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const itemsWidth = carouselWidth / items.length;
    const itemsIn = (containerWidth / itemsWidth).toFixed();

    if (!isMobile) {
      if (currentPosition > 0) {
        setCurrentPosition(0);
      }
      if (currentPosition - itemsIn * itemsWidth <= -carouselWidth) {
        setCurrentPosition(-carouselWidth + itemsIn * itemsWidth);
      }
    }
  }, [currentPosition, isMobile, items]);

  if (isMobile) {
    const handlePointerDown = (e) => {
      setIsDown(true);
      setInitialPosition(e.clientX);
      carouselRef.current.style.transition = "linear 0.01s";
    };

    const dragCarousel = (e) => {
      if (isDown) {
        const diff = initialPosition - e.clientX;
        carouselRef.current.style.transform = `translateX(${
          currentPosition - diff
        }px)`;
      }
    };

    const leaveCarousel = () => {
      if (setIsDown) {
        carouselRef.current.style.transition = "linear 0.2s";
        setIsDown(false);
        const containerWidth =
          containerRef.current.getBoundingClientRect().width;
        const carouselWidth = carouselRef.current.getBoundingClientRect().width;
        const transformPosition = parseInt(
          carouselRef.current.style.transform.match(/-?[\d]+/)
        );

        if (transformPosition > 0) {
          setCurrentPosition(0);
          carouselRef.current.style.transform = "translateX(0)";
        } else if (containerWidth > transformPosition + carouselWidth) {
          const newPosition =
            transformPosition + carouselWidth - containerWidth;

          setCurrentPosition(transformPosition - newPosition);
          carouselRef.current.style.transform = `translateX(${
            transformPosition - newPosition
          }px)`;
        } else {
          setCurrentPosition(transformPosition);
        }
      }
    };

    return (
      <div className="items-carousel" ref={containerRef}>
        <div
          className="items-wrapper"
          ref={carouselRef}
          onPointerDown={handlePointerDown}
          onPointerLeave={leaveCarousel}
          onPointerUp={leaveCarousel}
          onPointerMove={dragCarousel}
          style={{ transform: `translateX(${currentPosition}px)` }}
        >
          {items.map((item) => (
            <Item item={item} key={item._id} />
          ))}
        </div>
      </div>
    );
  } else {
    const onArrowPressed = (side) => {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const carouselWidth = carouselRef.current.getBoundingClientRect().width;

      const itemsIn = (
        containerWidth /
        (carouselWidth / items.length)
      ).toFixed();

      if (side === "right") {
        setCurrentPosition(
          currentPosition - (carouselWidth / items.length) * itemsIn
        );
      } else {
        setCurrentPosition(
          (carouselWidth / items.length) * itemsIn + currentPosition
        );
      }
    };

    return (
      <div className="items-carousel" ref={containerRef}>
        <div
          className="items-wrapper"
          ref={carouselRef}
          style={{ transform: `translateX(${currentPosition}px)` }}
        >
          {items.map((item) => (
            <Item item={item} key={item._id} />
          ))}
        </div>

        <div className="arrows">
          <button className="left-arrow" onClick={onArrowPressed}>
            <i>
              <AiOutlineArrowLeft />
            </i>
          </button>
          <button
            className="right-arrow"
            onClick={() => onArrowPressed("right")}
          >
            <i>
              <AiOutlineArrowRight />
            </i>
          </button>
        </div>
      </div>
    );
  }
};

export default ItemsCarousel;
