import React, { Component } from 'react'

export default class CaesarCihper extends Component {
  render() {
    return (
      <div className="banner caesar-cipher__banner">
        <div className="container">
          <div className="banner__block">
            <div className="banner-container">
              <div className="caesar-input-container">
                <div className="caesar-input_block">
                  <textarea className="caesar-textarea str" placeholder="Enter the text"></textarea>
                </div>
                <div className="caesar-value__block">
                  <div className="caesar-value--item">
                    <label className="label_caesar">Select key value</label>
                    <select className="caesar-select key">
                      <option className="caesar-chipe__select-option">1</option>
                      <option className="caesar-chipe__select-option">2</option>
                      <option className="caesar-chipe__select-option">3</option>
                      <option className="caesar-chipe__select-option">4</option>
                      <option className="caesar-chipe__select-option">5</option>
                      <option className="caesar-chipe__select-option">6</option>
                      <option className="caesar-chipe__select-option">7</option>
                      <option className="caesar-chipe__select-option">8</option>
                      <option className="caesar-chipe__select-option">9</option>
                      <option className="caesar-chipe__select-option">10</option>
                      <option className="caesar-chipe__select-option">11</option>
                      <option className="caesar-chipe__select-option">12</option>
                      <option className="caesar-chipe__select-option">13</option>
                      <option className="caesar-chipe__select-option">14</option>
                      <option className="caesar-chipe__select-option">15</option>
                      <option className="caesar-chipe__select-option">16</option>
                      <option className="caesar-chipe__select-option">17</option>
                      <option className="caesar-chipe__select-option">18</option>
                      <option className="caesar-chipe__select-option">19</option>
                      <option className="caesar-chipe__select-option">20</option>
                      <option className="caesar-chipe__select-option">21</option>
                      <option className="caesar-chipe__select-option">22</option>
                      <option className="caesar-chipe__select-option">23</option>
                      <option className="caesar-chipe__select-option">24</option>
                      <option className="caesar-chipe__select-option">25</option>
                    </select>
                  </div>
                  <div className="caesar-value--item">
                    <label className="label_caesar">Encrypt or decrypt?</label>
                    <select className="caesar-select crypt-type">
                      <option className="caesar-chipe__select-option">Encrypt</option>
                      <option className="caesar-chipe__select-option">Decrypt</option>
                    </select>
                  </div>
                  <div className="caesar-value--item">
                    <button className="caesar-btn btn" id="enc">Press me</button>
                  </div>
                </div>
                <div className="caesar-input_block">
                  <textarea className="caesar-textarea cipher-result" readOnly></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
