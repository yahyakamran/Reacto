import {createElement} from "react";
import {createRoot} from "react-dom/client";
const App = <h1 title="conponent">I am component</h1>
const element = createElement(
    "p",
    {title : "isit"},
    "paragraph"
);
const root = createRoot(document.getElementById("root"));
root.render(element)

