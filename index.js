/*

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}


// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)

*/




/*

//Imperative way of writing which will take many lines of code
// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

//Challenge - recreate the above line of code in vanilla JS by creating and
//appending an h1 to our div#root (without using innerHTML).
//- Create a new h1 element
//- Give it some textContent
//- Give it a class name of "header"
//- append it as a child of the div#root
    
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

//Declerative and easy way
ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

*/




/*

// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// JSX
ReactDOM.render(
    <h1 className="header">This is JSX</h1>, 
    document.getElementById("root")
)

// JSX
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("root")
)

*/




/*

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

//Challenge: 

//Create a navbar in JSX:
//    - Use the semantic `nav` element as the parent wrapper
//    - Have an h1 element with the brand name of your "website"
//    - Insert an unordered list for the other nav elements
//    - Inside the `ul`, have three `li`s for "Pricing",
//      "About", and "Contact"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))

*/




/*

//THIS IS HOW WE RENDER WITH REACT 18!!!!!!
import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

// ReactDOM.render(navbar, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

*/



/*
import React from "react"
import ReactDOM from "react-dom"
//ReactDOM won't work without importing ReactDOM from "react-dom"

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.


const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))
*/



/*

//Challenge: Starting from scratch, build and render the 
//HTML for our section project. Check the Google slide for 
//what you're trying to build.

//We'll be adding styling to it later.

//Hints:
// The React logo is a file in the project tree, so you can
//  access it by using `src="./react-logo.png" in your image
//  element
// You can also set the `width` attribute of the image element
//  just like in HTML. In the slide, I have it set to 40px
 

  import React from "react"
  import ReactDOM from "react-dom"
  
  const mypage = (
      <div>
          <img src="./react-logo.png" width="40px" height="40px"/>
          <h1>Fun facts about React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100k stars on Github</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </div>
  )
  
  ReactDOM.render(mypage, document.getElementById("root"))
  
 */

/*



*/