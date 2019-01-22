import { ModalBackground } from "../styles/modal_styles";

export function changeStateValue(e) {
  return (
    this.setState({ [e.target.name]: e.target.value })
  )
}

export const modalClickOnBackground = (e) => {
  let selected_class = e.target.className
  let modal_background_class = ModalBackground.styledComponentId

  if (selected_class.indexOf(modal_background_class) === -1) {
    return false
  }

  return true
}