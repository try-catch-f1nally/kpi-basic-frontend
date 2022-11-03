import React, {Component} from 'react';
import ScalableImage from '../ScalableImage/ScalableImage';

class Content extends Component {

  constructor(props) {
    super(props);
    this.setRandomBackgroundAndTextColor = this.setRandomBackgroundAndTextColor.bind(this);
    this.ffffffInDecimal = 15 + 15 * 16 + 15 * 16 ** 2 + 15 * 16 ** 3 + 15 * 16 ** 4 + 15 * 16 ** 5;
  }

  getRandomHexColor() {
    return '#' + Math.floor(Math.random() * this.ffffffInDecimal).toString(16);
  }

  setRandomBackgroundAndTextColor(event) {
    event.target.style.background = this.getRandomHexColor();
    event.target.style.color = this.getRandomHexColor();
  }

  render() {
    return (
      <>
        <p>Дата і місце народження: 21 липня 2003 року, м. Житомир, Житомирський р-н, Житомирська обл., Україна.</p>
        <p>Освіта: Житомирський міський ліцей при ЖДТУ - повна загальна середня освіта.</p>
        <p>Хобі:</p>
        <ul>
          <li>Спорт (футбол, волейбол, теніс, тренажерна зала тощо)</li>
          <li>Програмування</li>
          <li>Екстремальні атракціони</li>
        </ul>
        <p>Улюблені фільми:</p>
        <ol style={{cursor: 'pointer'}} onClick={this.setRandomBackgroundAndTextColor}>
          <li>Гнів людський</li>
          <li>Початок</li>
          <li>Області темряви</li>
        </ol>
        <p style={{cursor: 'pointer'}} onClick={this.setRandomBackgroundAndTextColor}>
          Львів — місто в Україні, адміністративний центр області, агломерації, району, міської громади,
          національно-культурний та освітньо-науковий осередок країни, великий промисловий центр і транспортний вузол,
          вважається столицею Галичини та центром Західної України. За кількістю населення — сьоме місто країни (717 273
          станом на 01.01.2022).
          <br/>
          Історичний центр Львова занесено до списку Світової спадщини ЮНЕСКО. У місті розташована найбільша кількість
          пам'яток архітектури в Україні. 2009 року Львову надано звання Культурної столиці України. Місто періодично
          посідає чільні місця в рейтингах туристичної та інвестиційної привабливості.
        </p>
        <a href="https://uk.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2" target="_blank">
          <img
            src="https://www.mandria.ua/wp-content/uploads/2018/08/площадь-рвнок.jpg"
            alt="lviv"/>
        </a>
        <ScalableImage imgUrl="./img/web-programming-languages.webp" defaultWidth={500}/>
      </>
    );
  }
}

export default Content;
