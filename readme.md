# koi v javascript mei hume suggestion milta hai wo milta hai with the help js engine browser ko sara chiz pahale se pata hota hai

# browser ko react pahale se pata nhi hota hai sirf wo js engine janta hai agar usa react janna hai to react ko vs code mei install karna parega

# CDN(content Delivery network)

CDN ka full form hota hai:

Content Delivery Network

🔹 Simple Definition:

CDN ek network of servers hota hai jo duniya ke alag-alag jagah par hote hain,
aur inka kaam hota hai —

website ke static files (jaise images, CSS, JS, videos, fonts) user ke paas sabse nazdeeki server se fast load karwana ⚡

🧠 Example Samajh Lo:

Maan lo tumhara website India mein host hai,
aur koi user USA se open karta hai.

👉 Without CDN:
User ko data India ke server se aayega → slow load hoga.

👉 With CDN:
Website ka data USA ke nearest CDN server (cache copy) se load hoga → page fast khul jaayega 🚀

# cdn ko code mei dalne se react ko browser jan jata hai neeche hai cdn ka link

<script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>

# pahale wale link se React milta hai

    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

# CORS kya hai?

CORS (Cross-Origin Resource Sharing) ek browser security rule hai
jo bolta hai:

“Agar frontend aur backend alag domain par hain,
to backend ko permission deni hogi ki kaun access kar sakta hai.”

Example:

Frontend: http://localhost:3000
Backend: http://localhost:5000

# Yahan crossorigin="anonymous" bol raha hai:

“Ye React library dusre domain se aayegi (CDN se),
lekin main credentials (cookies, tokens) nahi bhejunga.”

# second wale link se React dom milega

# react mei ish type se initalization karte hai

const h1 = React.createElement(
"h1",
{ id: " heading" },
"Hello World in React"
);
where
h1 :- ye heading hai
id :- ye attribute hai and multiple attribute ho sakte hai
children :-jo v print hoga wo attribute ke baad likhna hai

# 1. React Element kya hota hai

React element ek UI ka building block hota hai.
Ye basically ek JavaScript object hota hai jo batata hai ki screen pe kya dikhna chahiye (HTML structure ke form mein).

# 2. Root kya hota hai

React mei root wo jagah hoti hai jahan React app mount (render) hoti hai — yaani HTML page ke andar entry point.

React application ko DOM (HTML page) se connect karne ke liye ek root banana padta hai.

# ReactElement and object

React mein React Element aur Object same nahi hote, lekin React Element actually ek JavaScript object hi hota hai.

react element
const element = <h1>Hello World</h1>;
React internally isko aise object mein convert kar deta hai 👇

# react element

const element = {
type: 'h1',
props: {
children: 'Hello World'
}
};

# react ek single part mei v run ho sakta hai

\***\*\*\*\*\*\*\***\*\*\*\***\*\*\*\*\*\*\*** PART 2 **\*\*\*\***\*\***\*\*\*\***

# Ajj hum dekhenge React bahut fast hai uska mechanism

# Parcel kya hota hai (simple words mein)?

Parcel ek web application bundler hai —
jo aapke React project ke saare files (JS, CSS, images, etc.) ko ek sath bundle karke
browser ke liye ready karta hai.

💡 Simple mein bolo to — Parcel ek helper tool hai jo React code ko optimize karke
fast aur easy run karne layak bana deta hai.

# what do you mean by ^ carrat and ~ tilde

carrt wo minor change karte hai jab v version change hota hai

and tilde major change karta hai jab v version change hota hai

# react fast isliye hota hai kyuki parcel use hota hai and parecel ke ander bundlers use hota hai and diagonistics , hot reloading , tanspilation , code spilliting dev server ye sab use hota hai isliye react fast hota hai

# package lock json exact version ko lock karke rakhta hai

# package.json — project ka summary & dependency list

Ye ek main configuration file hoti hai jisme likha hota hai:

Project ka name, version

Scripts (start, build, etc.)

Dependencies (kaunse packages chahiye)

Versions (approximate range)

# app.js ka hai

// <div id="container">
// <h1> I am Heading 1</h1>
// <h2> I am Heading 2</h2>
// </div>;
// }

// upar jo code hai wo javascript mei hai hume usi ko React mei likhna hai

// const containerDiv = React.createElement("div", { id: "container" }, [
// React.createElement("h1", {}, "I am Heading 1"),
// React.createElement("h2", {}, "I am Heading 2"),
// ]);

// console.log(containerDiv); // ye htmlelement nhi hai ye object hai
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(containerDiv);

// const containerDiv = React.createElement(
// "div",
// { id: "container1" },
// [
// React.createElement("h1", { key: "h1" }, " I am Heading 1"),
// React.createElement("h2", { key: "h2" }, "I am Heading 2"),
// ],

// React.createElement("div", { id: "container2" }, [
// React.createElement("h3", { key: "h3" }, "I am Heading 3"),
// React.createElement("h4", { key: "h4" }, " I am Heading 20"),
// ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(containerDiv);

// const age = 21;

// const fn = () => {
// return true;
// };

// const fun2 = () => true;

// const heading = () => {
// <h1 id="heading"> Heading 2</h1>;
// };

// const Heading3 = () => {
// return (
// <div className="container">
// <h1 id="heading">{age}</h1>
// </div>
// );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Heading3 />);

# npm and npx

npm package install karne ke liye use hota hai
npx jo v package install kiye hai usko run karne ke liye

# abhi tak cdn link se hum react use kar ahe the ab hum with the help of package hum react use karenege

npm i react
npm i react-dom

npm run build code ko production level banata hai agar koi comment spaces ye sab hai to usko remove karke production level banata hai

# neeche jo code hai wo jsx hai lekin browser ko js engine and react pata hai to wo jsxheading ko babel ke help se transpilation karta hai and usko react element banata hai tabhi wo browser ko smaj aata h

const jsxheading = <h1> I am heading 1</h1>;

# babel ko install nhi karta hai parcel jo tha package wahi isko handle karta h

# react mei jo v hai navbar , footer ye sab sab koi components hai

# compents is basically a javacscript function

two types of component

1 . class based component -> old version

2. functional based component :- new version to write react code

**\*\***\*\*\*\***\*\***part 4**\*\***\*\*\***\*\***

# Ish part mei dekhenge agar hume react mei project banayenge to uska kis type se planning karke banana chaiye

# ajio bnaayenge usme pahale humm navbar banayenge

// navabar
// logo
// menuItems

# props in react

jis tarah ek hum fumction with parameters bana lete hai then usko bar bar use karte hai arguments pass karke usi tarah hum react mei hum ek function bana lete hai usko use karte hai usa props kehte hai4

# file structure kaise rakhe react mei

// source ke ander components rahega and then app.js ko src ke ander rakhenge
