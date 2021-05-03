import 'styled-components';

const theme = {
  colors: {
    primary: '#dab',
    black: Object.assign('#000000', { test: '#0001' }),
  },
} as const;

export default theme;
