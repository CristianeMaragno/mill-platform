import { type AppType } from "next/app";
import { ClerkProvider } from '@clerk/nextjs'
import { api } from "~/utils/api";
import "~/styles/globals.css";
import GoogleAnalytics from '~/components/googleAnalytics';
import CookieBanner from '~/components/cookieBanner';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-8BXTSKELP2'/>
      <CookieBanner/>
      <Component {...pageProps} />
    </ClerkProvider>
  );

};

export default api.withTRPC(MyApp);
