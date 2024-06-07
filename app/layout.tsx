import { Metadata } from 'next';
import { SITE } from '~/config.js';
import Providers, { PHProvider } from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';
import '~/assets/styles/base.css';
import Banner from '~/components/atoms/Banner';
import ChatBox from '~/components/widgets/chat-box/ChatBox';
import Script from 'next/script';
export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth  `}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* link for the roboto  */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lemon&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        {/* link for the poppins  */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased text-white bg-black">
        <PHProvider>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
          <Banner />
        </PHProvider>
        <ChatBox />
        <script src="https://unpkg.com/@rasahq/rasa-chat" type="application/javascript" defer></script>
        {/* <Script
          async
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process?.env?.NEXT_APP_GOOGLE_ANALYTICS_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config',${process?.env?.NEXT_APP_GOOGLE_ANALYTICS_ID});
          `}
        </Script> */}
      </body>
    </html>
  );
}
