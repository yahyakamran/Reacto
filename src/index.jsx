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
                typeof child === "object"
                ? child
                : createTextElement(child)
            ),
        },
    }
}

function render(element,root){
    let dom = element.type === "TEXT_ELEMENT"
                ? document.createTextNode("")
                : document.createElement(element.type)
    const isProperty = (key) => key !== "children"
    Object.keys(element.props)
          .filter(isProperty)
          .forEach(name =>
                dom[name] = element.props[name]
          )
        element
        .props
        .children
        .forEach(child =>
            render(child , dom)
        )
    root.append(dom);
}

const Reacto = {
    createElement,
    render,
}
const element = Reacto.createElement(
  "div",
  { id: "foo" },
  Reacto.createElement("a", null, "bar"),
  Reacto.createElement("b")
);
const root = document.getElementById("root");
Reacto.render(element,root)
