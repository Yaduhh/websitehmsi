import "@/styles/globals.css";
import Navbar from "./component/navbar/navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
