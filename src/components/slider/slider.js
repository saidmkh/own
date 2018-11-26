import React, { Component } from 'react'
import SliderItem from './slider_item'

import { slider_items } from './slider_maps'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slider_active: '',
    }

    this.handleSlideClick = this.handleSlideClick.bind(this)
  }

  handleSlideClick(e) {
    console.log('dsadsa')
    this.setState({
      slider_active: this.name
    })
    console.log(this.state.slider_active)
  }

  render() {
    return (
      <div className="slider">
        <div className="container">
          <div className="slider-container">
            {slider_items.map((obj, idx) => {
              return (
                <SliderItem
                  key={idx}
                  title={obj.title}
                  className={obj.className === this.name ? `${obj.className} slide-active` : obj.className}
                  onClick={this.handleSlideClick}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
