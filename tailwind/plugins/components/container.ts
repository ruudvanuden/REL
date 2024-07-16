import plugin from 'tailwindcss/plugin';

export const container = plugin(({ addComponents }) => {
  addComponents({
    '.container': {
      margin: '0 auto',
      maxWidth: '100%',
      width: '100%',
      '@screen sm': {
        paddingLeft: '25px',
        paddingRight: '25px',
      },
      '@screen md': {
        paddingLeft: '50px',
        paddingRight: '50px',
      },
      '@screen lg': {
        paddingLeft: '100px',
        paddingRight: '100px',
      },
      '@screen xl': {
        maxWidth: '1441px',
      },
    },
  });
});
