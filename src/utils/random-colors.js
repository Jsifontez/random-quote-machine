// to call randomize the custime the colors
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const randomColors = () => {
  // select random hue, light and saturation
  const baseHue = random(0, 360)
  const baseSat = random(55, 80)
  const baseLight = random(15, 35)

  // assign colors using hsl() CSS function
  const mainColor = `hsl(${baseHue}, ${baseSat}%, ${baseLight}%)`
  const lightColor = `hsl(${baseHue}, ${baseSat-35}%, ${baseLight+35}%)`
  const darkColor = `hsl(${baseHue}, ${baseSat+40}%, ${baseLight-8}%)`

  return [mainColor, lightColor, darkColor]
}

export default randomColors
