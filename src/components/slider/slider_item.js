import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SliderItem(props) {
  console.log(props)
  return (
    <NavLink
      to={`/${props.className}/`}
      className="slider--item"
      activeClassName="slide-active"
      name={props.className}
    >
      <div className="slider__block">
        <div className="slider-description__block">
          <div className="slider-title_block">
            <h1 className="slider-title">{props.title}</h1>
          </div>
        </div>
        <div className={`slider-background ${props.className}__slider--item`} />
      </div>
    </NavLink>
  )
}
