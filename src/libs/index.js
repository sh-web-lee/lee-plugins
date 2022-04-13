import Carousel from './Carousel/'
import CarItem from './Carousel/item'
import SlideNav from './SlideNav/'
import Selector from './SearchMenu/'

export default {
  install: (app, options) => {
    app.component(Carousel.name, Carousel)
    app.component(CarItem.name, CarItem)
    app.component(SlideNav.name, SlideNav)
    app.component(Selector.name, Selector)
  }
}
