import { Carousel } from "react-bootstrap";
import "./styles/MainCarousel.css";

function MainCarousel() {
    return (
        <Carousel >
            <Carousel.Item className="item">
                <img
                    className="img "
                    src="https://res.cloudinary.com/nilesh-dev/image/upload/v1662958924/MainPageCaroussel/razer-kraken-ultimate.jpg"
                    alt="First slide"

                />
                <Carousel.Caption style={{ textAlign: "left" }}>
                    <h3>Click Your Way to Victory</h3>
                    <p>Get ready to win every battle with our wide range of mice perfect for work or play.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="img "
                    src="https://res.cloudinary.com/nilesh-dev/image/upload/v1662959248/MainPageCaroussel/blackWiddowEliteMainPage.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption style={{ textAlign: "left" }} >
                    <h3>Play With Passion</h3>
                    <p>Gaming or working with the newest RGB ready keyboards now!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="img "
                    src="https://res.cloudinary.com/nilesh-dev/image/upload/v1662958924/MainPageCaroussel/razer-kraken-ultimate.jpg"
                    alt="Third slide"
                />


                <Carousel.Caption style={{ textAlign: "left" }}>
                    <h3>"FPS Gaming? Just nail it!"</h3>
                    <p>Bring your gameplay to the next level with our audio system.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="img "
                    src="https://res.cloudinary.com/nilesh-dev/image/upload/v1662958958/MainPageCaroussel/RazerFireflyv2.jpg"
                    alt="Third slide"
                />


                <Carousel.Caption style={{ textAlign: "left" }}>
                    <h3>Own Your Style</h3>
                    <p>Design your own light effect with our RGB equipped mousepad.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default MainCarousel;
