
const heading = React.createElement("h1",{style:{fontSize: "2.5rem",fontWeight: 'bold'}},"About US ")


const tag =React.createElement("p",{style:{fontSize: "1.2rem",}},"At Zappos.com,our purpose is simple: to live and deliver WOW ")

const  para=React.createElement("p",{style:{fontSize: "1.2rem",textAlign:"center"}},"Twenty years ago, we began as a small online retailer that only sold shoes. Today, we still sell shoes - as well asclothing, handbags, accessories, and more. That more is providing the very best customer service, customer experience, and company culture. We aim to inspire the world by showing it's possible to simultaneously deliver happiness to customers, employees, vendors, shareholders, and the community in a long-term, sustainable way.")

const para2=React.createElement("p",{style:{fontSize: "1.2rem",textAlign:"center"}},"We hope that in the future people won't even realize we started selling shoes online. Instead, they'll know Zappos as a service company that just happens to sell________.")


const div = React.createElement("div",{className:"aboutus"},[heading,tag,para,para2])


const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(div)

