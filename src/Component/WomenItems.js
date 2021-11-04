import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

export default function WomenItems() {
  return (
    <div>
      <NavigationBar />
      <div class="items-container">
        <div class="item">
          <img
            src="https://assets.burberry.com/is/image/Burberryltd/5e5a890eefb110347b257cb88967877720f28447.jpg?$BBY_V2_SL_1x1$&wid=2800&hei=2800"
            alt="item 1"
          />
          <br />
          <h4 class="description">Vintage Check Cotton Pleated Skirt</h4>
          <h4 class="description">$300.00</h4>
        </div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
        <div class="item">Item 7</div>
        <div class="item">Item 8</div>
      </div>
      <Footer />
    </div>
  );
}
