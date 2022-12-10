import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import store from  "./store/store"
let persistor = persistStore(store);

 
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HelmetProvider>
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
      <App />
      </PersistGate>
  </Provider>
    </BrowserRouter>
  </HelmetProvider>
);
