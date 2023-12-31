import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import BaseLayout from '../layouts/BaseLayout';
import theme from '../theme/theme';

export default function FormandoRoot({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <BaseLayout><Component {...pageProps} /></BaseLayout>
    </ChakraProvider>
  );
};

