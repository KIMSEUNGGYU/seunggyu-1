import '@emotion/react';

import { ThemeType } from '@theme/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
