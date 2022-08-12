import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { sliderItems } from "../../Utils/data";
import { Button } from "../../Utils/styles/styles";
import { Container, Arrow, Wrapper, Slide, ImgContainer, Image, InfoContainer,Title, Desc } from "./styles";


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button variant="contained">SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;





// import React, { useState } from 'react';
// import { Container, MobileStepperCustom, Image } from './styles';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils';

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     description: 'Quilted image lists emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios.',
//     title: 'Mushrooms'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     description: 'Quilted image lists emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios.',
//     title: 'Tomato basil'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     description: 'Quilted image lists emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios.'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     description: 'Quilted image lists emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios.'
//   },
// ];

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// const SwipeableViewsCustom = bindKeyboard(AutoPlaySwipeableViews);

// // Quilted image lists emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios.

// const Slider = () => {
//   const [index, setIndex] = useState(0);

//   const handleChangeIndex = i => {
//     setIndex(i);
//   };

//   const items = itemData.map((image) => <Image src={image.img} alt={image.title}/>
//   )
  
//   return (
//     <Container>
//       <SwipeableViewsCustom index={index} onChangeIndex={handleChangeIndex}>
//         {items}
//       </SwipeableViewsCustom>
//       <MobileStepperCustom variant='dots' steps={4} activeStep={index} />
//     </Container>
//   );
// }

// export default Slider;