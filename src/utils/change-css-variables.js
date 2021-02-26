import randomColors from './random-colors'

const changeVariables = () => {
  const colors = randomColors()

  // set the colors of CSS variable
  document.documentElement.style.setProperty("--main-color", colors[0])
  document.documentElement.style.setProperty("--light-color", colors[1])
  document.documentElement.style.setProperty("--dark-color", colors[2])
}

export default changeVariables
