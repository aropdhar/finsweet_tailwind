tailwind.config = {
    theme: {
      extend: {
        colors: {
          navbarbg: '#0D0D0D',
          color: '#fff',
          primary: '#FFD2A4',
          black: '#000',
          header: 'linear-gradient(rgba(165, 78, 43, 0.8),rgba(220, 152, 83, 0.6))',
        },
        maxWidth: {
            'container': '1280px',
        },

        fontFamily: {
            'roboto': " 'Roboto Condensed', sans-serif ",
            
        },

        backgroundImage: {
            'bannerbg': "url('./images/image.png')",
            'ctabg': "url('./images/cta_bg.png')",
            
          },
      }
    }
  }