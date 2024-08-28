import { createRoot } from "react-dom/client";
import React from 'react';
import App from "./App";
import {store} from "./store";
import { Provider } from "react-redux";
import 'bulma/css/bulma.css';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(<Provider store={store}><App/></Provider>);