import { popupToggleDispatch } from '../../store/actions/popup'

export function handleInputChange(e) {
  return (
    this.setState({ [e.target.name]: e.target.value })
  )
}

export function closePopupOnClickBackground(curr_popup, e) {
  console.log(curr_popup)
  if (e.target.className.split(' ')[0] === 'popup-background') {
    console.log('aaa')
    popupToggleDispatch(`${curr_popup}_TOGGLE`)
    return true
  }
  return false
}