import facepaint from 'facepaint'

const font = `Tajawal, sans-serif`

const color = {
  primary: `rgb(0, 46, 142)`,
  black: `#333333`,
  white: `#ffffff`,
}

const breakpoints = [769, 1024, 1216, 1408]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export { font, color, breakpoints, mq }
