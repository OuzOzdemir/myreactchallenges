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
quizz
1. Why do we need to `import React from "react"` in our files?
*React will not be rendered on the page without importing it.
-React is what defines JSX. It won't work without importing it.

2. If I were to console.log(page) in index.js, what would show up?
*It would tell us that it is an object since it's a JSX code.
-A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
*It is not rendered wiht ReactDOM.render() method. Moreover, it should be nested
in parent element such as div
-We need our JSX to be nested under a single parent element


4. What does it mean for something to be "declarative" instead of "imperative"?
*Declarative means that computer will be dealing with the process instead of us
telling computer about each step as it is in imperative way.
-Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.


5. What does it mean for something to be "composable"?
*It is about relation between components that you can create connections with.
-We have small pieces that we can put together to make something
larger/greater than the individual pieces.
*/




/*
import React from "react"
import ReactDOM from "react-dom"

function TemporaryName() {
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"))

//Challenge: 

//Part 1: Create a page of your own using a custom Page component

//It should return an ordered list with the reasons why you're
//excited to be learning React :)

//Render your list to the page

import React from "react"
import ReactDOM from "react-dom"

function Custompage () {
    return (
        <div>
            <h1>Blending love into my work since you are everything to me</h1>
            <ol>
                <li>Reasons how much I adore my NUI</li>
                <li>Reasons how much I want to be with my NUI</li>
                <li>Reasons how much I love my NUI</li>
            </ol>
            </div>
    )
}

ReactDOM.render(<Custompage />, document.getElementById("root"))

*/




/*
//Challenge: 
//Part 2: 
//- Add a `header` element with a nested `nav` element. Inside the `nav`,
//  include a `img` element with the image of the React logo inside
//  (src="./react-logo.png") and make sure to set the width to something
//  more manageable so it doesn't take up the whole screen
//- Add an `h1` with some text describing the page. (E.g. "Reasons
// I'm excited to learn React"). Place it above the ordered list.
//- Add a `footer` after the list that says: 
//    "© 20xx <last name here> development. All rights reserved."

    import React from "react"
    import ReactDOM from "react-dom"
    
    function Page() {
        return (
            <div>
                <header>
                    <nav>
                        <img src="./react-logo.png" width="40px" />
                    </nav>
                </header>
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                if I know React</li>
                </ol>
                <footer>
                    <small>©20xx Ozdemir development. All rights reserved</small>
                </footer>
            </div>
        )
    }
    
    ReactDOM.render(<Page />, document.getElementById("root"))
    */




/*

Quiz!

1. What is a React component?
- React components are like small pieces of a big puzzle. They wrap JSX into functions and we can render them whenever we need them.
--A function that returns React elements. (UI)

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
- The component has JSX inside it which is not nested in parent element. It could be nested in a div or "<></>"
--It was supposed to be a Pascal case or we can call it camel case such as MyComponent

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
- It is not nested in a parent element like div or "<></>" and the element that we wanted to be rendered could be written as <Header />
-- <Header />

*/




/*

import React from "react"
import ReactDOM from "react-dom"

//Challenge: 

//- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
//- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Page() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

*/



