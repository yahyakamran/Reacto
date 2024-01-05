const element = {
    type : "h1",
    props: {
        title    : "Foo",
        children : "bar",
    },
};
const node = document.createElement(element.type);
node["title"] = element.props.title;
const text = document.createTextNode(element.props.children);
node.appendChild(text)
const root = document.getElementById("root");
root.appendChild(node)

