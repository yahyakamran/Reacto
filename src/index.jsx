/*
  //React With Plain Js
  const element = {
    type : "h1",
    props: {
        title    : "Foo",
        children : "bar",
    },
};
const node = document.createElement(element.type);
node["title"] = element.prop.title;
const text = document.createTextNode(element.props.children);
node.appendChild(text)
const root = document.getElementById("root");
root.appendChild(node)*/


import {createRoot} from "react-dom/client";

function createTextElement(text){
    return{
        type  : "TEXT_ELEMENT",
        props : {
            nodeValue :text,
            children : [],
        }
    }
}

function createElement( type , props , ...children ){
    return{
        type,
        props : {
            ...props,
                children : children.map(child =>
                typeof child == "object"
                ? child
                : createTextElement(child)
            ),
        },
    }
}

const Reacto = {
    createElement,
}
/** @jsx Reacto.createElement */
const element = Reacto.createElement(
    <div id="bar" >
        <p>foo</p>
        <a/>
    </div>
);
const root = createRoot(document.getElementById("root"));
root.render(element)


