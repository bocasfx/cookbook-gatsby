import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '700']
    },
    {
      name: 'Permanent Marker',
      styles: ['400']
    }
  ],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  headerFontFamily: ['Montserrat', 'sans-serif'],
  headerWeight: 'normal'
})

export default typography
