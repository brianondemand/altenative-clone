import { Nunito } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import NavigationEvents from "airbnb/components/common/NavigationEvents";

export const metadata = {
  title: "Airbnb Finds Ke",
  description: "We got you!",
};

const font = Nunito({
  subsets: ["latin"],
  weight: "300",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
        rel="stylesheet"
        precedence="default"
      ></link>
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css"
        type="text/css"
        precedence="default"
      ></link>
      <body className={font}>
        {children}
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  );
}
