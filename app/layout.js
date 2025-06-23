import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const Macan = localFont({
  src: [
    {
      path: "./font/MacanPanWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/MacanPanWeb-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./font/MacanPanWeb-Semibold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./font/MacanPanWeb-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  preload: true,
});

export const metadata = {
  title: "Essenceware",
  // title: "In Maintenance Mode!",
  description:
    "Essenceware is a leading app development agency specializing in creating innovative solutions for various industries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Macan.className}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dprxdqfxc/image/upload/v1720799268/Duseca%20Logo/duseca-cloudinary-logo_qkhbjm.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,"
        />
        <meta
          name="facebook-domain-verification"
          content="t82ilvaqz8h7yp1bin4twurn8usffj"
        />

        {/* <Script
          async
          defer
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1873775679793687');
              fbq('track', 'PageView');
            `,
          }}
        /> */}
        {/* <noscript>
          <img
            height="1"
            width="1"
            style={{
              display: "none",
            }}
            src="https://www.facebook.com/tr?id=1873775679793687&ev=PageView&noscript=1"
          />
        </noscript> */}
        {/* <script
          async
          defer
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/65cb0a910ff6374032cc7be4/1hmgi2j8g';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();`,
          }}
          type="text/javascript"
        ></script> */}
        {/* <GoogleTagManager gtmId="GTM-W92JZRJS" /> */}
      </head>
      <body suppressHydrationWarning={true}>
        {/* <div className="h-screen w-screen flex justify-center items-center">
          In Maintenance Mode!
        </div> */}
        {children}
      </body>

      {/* Google Analytics */}
      {/* <Script
        defer
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-G9ESY43PV5"
      />
      <Script
        async
        defer
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G9ESY43PV5');
          `,
        }}
      />

      <Script
        async
        defer
        strategy="afterInteractive"
        id="clarity-js"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "mxdzlnusd8");
          `,
        }}
      /> */}
    </html>
  );
}
