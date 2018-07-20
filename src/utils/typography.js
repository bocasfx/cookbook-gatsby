import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
      ],
    },
    {
      name: 'Knewave',
      styles: [
        '400',
      ],
    },
  ],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  headerFontFamily: ['Knewave', 'cursive'],
  headerWeight: 'normal',
});

export default typography;
