import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { store } from "./store";
import { App } from "./components/app/app";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
    <BrowserRouter basename="/react-burger">
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
          <App />
        </Provider>
      </DndProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
