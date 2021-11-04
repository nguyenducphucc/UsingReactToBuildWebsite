import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.jpg";
import image6 from "../../images/6.jpg";
import image7 from "../../images/7.jpg";
import image8 from "../../images/8.jpg";
import image9 from "../../images/9.jpeg";
import image10 from "../../images/10.jpg";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

export default function Home() {
  const newimages = [
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
  ];

  const mostpopularimages = [
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
    { id: 10, image: image10 },
  ];
  return (
    <div class="home">
      <NavigationBar />
      <div class="home-image-container">
        <img class="home-image-1" src={image1} alt="1" />
        <h2>Feel bored?</h2>
      </div>
      <div class="home-component">
        <div class="home-overlay-container">
          <h2>Upcoming new</h2>
          <div class="home-overlay" />
        </div>
        <div class="home-image-container-2">
          {newimages.map((image) => (
            <div class="home-image-component">
              <div class="home-image-rating">
                <div class="red" />
                <div class="green" />
              </div>
              <img class="home-image-2" src={image.image} alt={image.id} />
            </div>
          ))}
        </div>
      </div>
      <div class="home-component">
        <div class="home-overlay-container">
          <h2>Most popular</h2>
          <div class="home-overlay" />
        </div>
        <div class="home-image-container-2">
          {mostpopularimages.map((image) => (
            <div class="home-image-component">
              <div class="home-image-rating">
                <div class="red" />
                <div class="green" />
              </div>
              <img class="home-image-2" src={image.image} alt={image.id} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
