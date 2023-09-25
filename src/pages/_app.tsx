import { type AppType } from "next/app";
import { ClerkProvider } from '@clerk/nextjs'
import { api } from "~/utils/api";
import "~/styles/globals.css";
import GoogleAnalytics from '~/components/googleAnalytics';
import CookieBanner from '~/components/cookieBanner';
import { Bubble } from "@typebot.io/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-8BXTSKELP2'/>
      <CookieBanner/>
      <Bubble
        typebot="my-typebot-mg8w5tz"
        theme={{ button: { backgroundColor: "#479AC2" } }}
      />
      <Component {...pageProps} />
    </ClerkProvider>
  );

};

export default api.withTRPC(MyApp);
