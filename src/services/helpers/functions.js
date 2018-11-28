import { popupToggleDispatch } from '../../store/actions/popup'

export const handleInputChange = e => {
  let obj = Object()

  obj[e.target.name] = e.target.value
  this.setState(obj)
}

export const closePopupOnClickBackground = (curr_popup, e) => {
  console.log(curr_popup)
  if (e.target.className.split(' ')[0] === 'popup-background') {
    console.log('aaa')
    popupToggleDispatch(`${curr_popup}_TOGGLE`)
    return true
  }
  return false
}