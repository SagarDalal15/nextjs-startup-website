import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";
import NavigationBar from "../components/navigation-bar";

function MyApp({ Component, pageProps }) {
  return (
    <NavigationBar>
      <Component {...pageProps} />
    </NavigationBar>
  );
}

export default MyApp;
