import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '22px',
  googleFonts: [
    {
      name: 'Amatic SC',
      styles: [
        '400',
      ],
    },
  ],
  bodyFontFamily: ['Amatic SC', 'sans-serif'],
  headerFontFamily: ['Amatic SC', 'sans-serif'],
  headerWeight: 'normal',
});

export default typography;
