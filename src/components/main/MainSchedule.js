import React from "react";
import PropTypes from "prop-types";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask
} from "mdbreact";

const MainSchedule = props => {
  return (
    <Carousel
      activeItem={1}
      length={4}
      showControls={true}
      showIndicators={false}
      interval={false}
      className="z-depth-1"
    >
      <CarouselInner>
        <CarouselItem itemId="1">
          <View>
            <img
              className="d-block w-100"
              src="https://imgnews.pstatic.net/image/sports/basketball_word/bg_wordkbl_ground.jpg"
              alt="First slide"
            />
            <p className="p-responsive">현대모비스 VS KCC</p>
            <Mask overlay="black-light" />
          </View>
          <CarouselCaption />
        </CarouselItem>
        <CarouselItem itemId="2">
          <View>
            <img
              className="d-block w-100"
              src="https://imgnews.pstatic.net/image/sports/basketball_word/bg_wordkbl_ground.jpg"
              alt="First slide"
            />
            <Mask overlay="black-light" />
          </View>
          <CarouselCaption>
            <p className="p-responsive">현대모비스 VS KCC</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem itemId="3">
          <View>
            <img
              className="d-block w-100"
              src="https://imgnews.pstatic.net/image/sports/basketball_word/bg_wordkbl_ground.jpg"
              alt="First slide"
            />
            <Mask overlay="black-light" />
          </View>
          <CarouselCaption>
            <p className="p-responsive">현대모비스 VS KCC</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem itemId="4">
          <View>
            <img
              className="d-block w-100"
              src="https://imgnews.pstatic.net/image/sports/basketball_word/bg_wordkbl_ground.jpg"
              alt="First slide"
            />
            <Mask overlay="black-light" />
          </View>
          <CarouselCaption>
            <p className="p-responsive">현대모비스 VS KCC</p>
          </CarouselCaption>
        </CarouselItem>
      </CarouselInner>
    </Carousel>
  );
};

MainSchedule.propTypes = {};

export default MainSchedule;
