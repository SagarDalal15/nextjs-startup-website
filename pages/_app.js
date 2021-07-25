import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";
import NavigationBar from "../components/navigation-bar";
import GithubLink from "../components/github-link";

function MyApp({ Component, pageProps }) {
  return (
    <NavigationBar>
      <Component {...pageProps} />
      <GithubLink />
    </NavigationBar>
  );
}

export default MyApp;
