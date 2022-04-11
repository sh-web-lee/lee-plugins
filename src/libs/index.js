import Carousel from './Carousel/'
import CarItem from './Carousel/item'

export default {
  install: (app, options) => {
    app.component(Carousel.name, Carousel)
    app.component(CarItem.name, CarItem)
  }
}
