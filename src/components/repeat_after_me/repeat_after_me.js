import React, { Component } from 'react'

export default class RepeatAfterMe extends Component {
  render() {
    return (
      <div className="banner repeat-after-me__banner">
        <div className="container">
          <div className="banner__block">
            <div className="banner-container">
              <div class="blocks_title">
                <span class="title__value">Ready?</span>
                <div class="title-button_block">
                  <button class="title-ready__btn">go</button>
                </div>
              </div>
              <div class="blocks-container">
                <div id="black" class="block--item">
                  <div class="block__color black"></div>
                </div>
                <div id="orange" class="block--item">
                  <div class="block__color orange"></div>
                </div>
                <div id="yellow" class="block--item">
                  <div class="block__color yellow"></div>
                </div>
                <div id="blue" class="block--item">
                  <div class="block__color blue"></div>
                </div>
                <div id="green" class="block--item">
                  <div class="block__color green"></div>
                </div>
                <div id="red" class="block--item">
                  <div class="block__color red"></div>
                </div>
                <div id="purple" class="block--item">
                  <div class="block__color purple"></div>
                </div>
                <div id="cyan" class="block--item">
                  <div name="cyan" class="block__color cyan"></div>
                </div>
                <div id="white" class="block--item">
                  <div class="block__color white"></div>
                </div>
              </div>
              <div class="blocks-score">
                <span>Score: </span>
                <span class="score__value">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
