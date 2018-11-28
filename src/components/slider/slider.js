import React, { Component } from 'react'
import SliderItem from './slider_item'

import { slider_items } from './slider_maps'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slider_active: '',
    }
  }

  handleSlideClick(e) {
    console.log('dsadsa')
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
                  idx={idx}
                  title={obj.title}
                  className={obj.className}
                />
              )
            })}
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
