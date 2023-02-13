const heading =React.createElement("h1",{style:{fontSize:"4rem", textAlign:"center"}},"The Evolution of Airbnb's Frontend")

const para =React.createElement("p",{style:{fontSize:"1.5rem", textAlign:"center"}},"@spikebrehum")
const icon =React.createElement("i",{className:"fa-brands fa-airbnb",style:{fontSize:"2rem",color:"#f9ddde"}},)
const logopara= React.createElement("p",{},"airbnb")

const para2=React.createElement("p",{style:{textAlign:"center"}},[icon,logopara])

const div= React.createElement("div",{className:"logocont"},[para,para2])

const main =React.createElement("div",{className:"container"},[heading,div])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main)