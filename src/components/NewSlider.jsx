import { Carousel } from 'antd';
import 'antd/dist/antd.css';
const contentStyle = {
  height: '800px',
  width: 'fit-content',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

/*const NewSlider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };*/

  const NewSlider = () =>  (
    <div className='newslider'>
    <Carousel autoplay>
      <div>
        <img height="400px" width="600px" src="https://i.ibb.co/rFhtydv/slide1.jpg" />
      </div>
      <div>
        <img height="400px" width="600px" src="https://i.ibb.co/7W3kM0L/Slide2.jpg" />
      </div>
      <div>
        <img height="400px" width="600px" src="https://i.ibb.co/HDc2B1n/Slide3.webp" />
      </div> 
    </Carousel>
    </div>
  );


export default NewSlider;