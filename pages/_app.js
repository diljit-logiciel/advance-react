import store from "../src/make-store"
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

store.subscribe(() => {
  // console.log(store.getState());
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
