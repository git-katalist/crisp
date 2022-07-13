import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";
import { Global } from "styles/Global";
import Nav from "@Components/navigation/Navigation";
import Footer from "@Components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <Nav/>
       <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}

export default MyApp;
