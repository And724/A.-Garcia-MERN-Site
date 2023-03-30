import React from 'react';
function HomePage() {
    return (
        <>
            <h2> Website Technologies Overview</h2>
            <article id="webtech" className='homePage'>
                <h3>
                    Welcome to my first website! This page will detail the different technologies and techniques used to create this site. Make sure to check it all out!
                </h3>
            </article>
            <article className='homePara'>
                <p>
                    There are several technologies used to make this page. The first of these technologies is HTML, which is the Hypertext Markup Language. This is the basis 
                    of all of the text that is being displayed in the webpage and links each of the documents to each other. These documents are structured using different elements
                    to create an organized document. On their own, these documents render as plain black text on a white background and are not that interesting to look at. The page
                    currently being viewed is obviously not black and white and this is due to the use of CSS in conjunction with HTML. CSS stands for Cascading Style Sheets and allows
                    a web developer to style their website as they see fit. This can include colors, location of certain HTML elements, styling of navigation buttons, image styling, and
                    much more. This can be done by linking a stylesheet to the index.html of a webpage. Though this website is importing a global stylesheet in the App.js file but JavaScript
                    will be touched on later. Once a stylesheet is linked, different elements can be individually modified to the desired style. Elements can also be given class names in case 
                    one wants to style multiples of an element, such as different tables, unique from one another. To further add to this uniqueness, there are a few icons that exist on this 
                    website that were pulled from the react <a href='https://react-icons.github.io/react-icons/'>icons</a>website. These icons are used as buttons in some instances and simply
                    as decor in others. Finally, the last part of this website that makes it unique is the font. Without altering the font, HTML automatically defaults to Times New Roman font. 
                    Through the use of <a href='https://fonts.google.com/'>Google Fonts</a> we can choose from a wide variety of free fonts to make a website more interesting and unique. 
                </p>
                <p>
                    On this site, you will find a gallery of various images that I have taken. These images in their original form were all different sizes and resolutions and needed to be 
                    optimized for the web. This optimization is important for the images to look good and for the efficiency of the site. All of the images were compressed and resized to be able to
                    load quickly and simultaneously and to fit on a users device. This website also heavily takes advantage of JavaScript, which is a programming language that allows for dynamic
                    website behavior. In this site it is frequently used to process data and create data when a user interacts with certain parts of the page. Node, whose applications are written in
                    JavaScript, is also used on this site. It is used to build server side applications and websites without the need of a browser. Along with Node, the framework, Express, is used
                    since it provides an Application Programming Interface. This allows this website to get, post, and delete data and also lets the website decide where this data will go and how to 
                    incorporate it. This data that the website is generating through the user must be stored on a database. This website takes advantage of MongoDB which is a data management system
                    where data is collected and organized. This also allows for the efficient use of create, read, update, and delete (CRUD) operations on our data. Mongoose, which is a JavaScript 
                    library, then bridges the gap between our database and the objects in our app. Mongoose allows for an easy way for the app in the backend to manage and view the applications data.
                    To tie everything together, this entire site is built using <a href='https://react.dev/'>React</a>. This means that instead of the entire website being built from HTML elements,
                    the website is rather built using React components. All of these components are functions that return React elements with the components written in JSX. JSX is a mixture of HTML
                    and JavaScript and these components are used in a similarly to HTML tags. When a page is updated in a React app, instead of directly changing the HTML on a given page, the code 
                    changes React state variables which then automatically renders what looks like an entirely brand new page to the user. This allows us to create single page applications instead
                    of an app or webpage with several to dozens of different HTML documents. This website follows Representational State Transfer (REST) guidelines and can be considered a 
                    RESTfull app. These guidelines include: a server managing a collection of resources and exposing those collections through unique URLs, support CRUD operations using HTTP methods,
                    servers must be stateless, and finally the use of route parameters. Finally, the combination of MongoDB, Express, React, and Node (MERN) results in a full stack MERN application 
                    that uses MongoDB, Express, and Node in the backend of the app and React in the frontend of the app. When all connected with the REST API, the full stack app is a single page 
                    application that can efficiently perform all four CRUD operations.
                </p>
            </article>
        </>
    );
}

export default HomePage;