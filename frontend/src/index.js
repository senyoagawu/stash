import React from "react";

import "./index.css";

import ReactDOM from "react-dom";
import { useDispatch, Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/Modal";
import App from "./App";

import configureStore from "./store";
import { restoreCSRF, fetch } from "./store/csrf";
import * as sessionActions from "./store/session";
import * as takeNoteActions from "./store/takeNote";
import * as tabActions from "./store/tabs";
import * as notesActions from "./store/notes";
import * as usersActions from "./store/users";
import * as modalActions from "./store/modal";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.takeNoteActions = takeNoteActions;
  window.notesActions = notesActions;
  window.tabActions = tabActions;
  window.modalActions = modalActions;
}

function Root() {
  return (
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
