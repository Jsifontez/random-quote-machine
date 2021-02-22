// to call randomize the custime the colors
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const randomColors = () => {
  // select random hue, light and saturation
  const baseHue = random(0, 360)
  const baseSat = random(40, 80)
  const baseLight = random(15, 60)

  // assign colors using hsl() CSS function
  const mainColor = `hsl(${baseHue}, ${baseSat}%, ${baseLight}%)`
  const lightColor = `hsl(${baseHue}, ${baseSat-35}%, ${baseLight+35}%)`

  return [mainColor, lightColor]
}

export default randomColors
