function customRender(reactElement,mainContainer){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    mainContainer.appendChild(domElement)*/


   const domElement= document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const props in reactElement.props) {
    
    if(prop==='chidren') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
    
   }
  mainContainer.appendChild(domElement)
}
const reactElement={
    type: 'a',
    props: {
        href:"https://google.com",
        target: '_blank'
    },
    children: "Click me vist to google"
}

const mainContainer =document.getElementById('root')

customRender(reactElement,mainContainer )
