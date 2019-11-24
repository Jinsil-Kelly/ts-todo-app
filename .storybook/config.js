import { configure } from '@storybook/react';

//https://github.com/storybookjs/storybook/issues/5684
import '!style-loader!css-loader!sass-loader!../src/styles/main.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|tsx)$/), module);
