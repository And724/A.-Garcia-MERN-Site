import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2> Web Development Concepts</h2>
            <nav className ="localnav">
                <a href="#webservers">About Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#optimages">Optimizing Images</a>
                <a href="#stylesheets">Cascading Stylesheets</a>
                <a href="#javascript">JavaScript</a>
            </nav>
            <article id="webservers">
                <h3> About Web Servers</h3>
                <p> This page was made by creating a new file (index.html) in Visual Studio 
                using HTML. The keystroke <strong>ctrl-i</strong> was used to insert the HTML 
                boilerplate code at the top of the index.html file. The index.html in the context 
                of websites and servers is the default landing page for a website. Part of the 
                job of a URL is to path to a resource but in a case where a resource is not defined, 
                the default index.html is loaded for a website.
                </p>
                <p> The browser's WebDev tools show that the Request Method was GET and has 
                an OK Status Code of 200. It also displays the request URL of the local 
                file on my computer and the content type which in this case is text/html.
                The response is viewable which shows the HTML written to create the page
                as well as a page preview.
                </p>
                <p>
               After successfully transferring the index.html file to the ENGR server, there 
               were many noticeable changes to the information displayed in the network tab 
               within the developer tools. For example, the first thing I noticed was under 
               the headers tab. The live page had more details within the response header while
               the local version of the page simply had the content type and last modified. The 
               live version of the page also has many key:value pairs in the request headers section 
               compared to the local that only had provisional headers shown. Lastly, the live version
               had additional tabs to view such as initiator and cookies.
                </p>
                <p>
                The favicon.ico has an OK status of 200 because the OSU server by default has a favicon file
                to display the OSU COE icon. The main.css and main.js lack a status of 200 because 
                they currently do not exist. As a result, they currently display 404 errors because the files 
                were not found.
                </p>
                <p>
                The complete URL of my file is: <strong>https://web.engr.oregonstate.edu/~garcian8/a1-garcian8.</strong> The 
                schema of my URL is HTTPS which is a secured hypertext transfer protocol. The domain is oregonstate.edu with
                the subdomains being web and engr. Lastly, my resource path is /~garcian8/a1-garcian8. The first part of the 
                path, ~garcian8, paths to my root within the engr server. The a1-garcian8 part of the path leads to my folder
                of the same name within my root that contains the index.html file to display this page. 
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>
                    Frontend Design is all about creating an effective, efficient, and memorable experience for the user of
                    our webpage or product. There are a few parts of a webpage or product that needs to meet these aforementioned 
                    goals. These parts include: the graphical user interface, the actual visual design and aesthetics of a page, and 
                    the interactivity between the user and the page. Achieving these goals are steps to ensuring that a page or product
                    is <strong>usable</strong> by the user or customer and adheres to the <strong>Five "E"s</strong> of usability.
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>Ensure the users goals are met with accurate results.</dd>
                    <dt>Efficient</dt>
                    <dd>The user achieves their goals in the least amount of steps required to complete tasks and obtain results quickly.</dd>
                    <dt>Easy to Navigate</dt>
                    <dd>Easily understandable with a small learning curve. New or inexperienced users should be able to immediately locate
                        their goal and remember how to do it in subsequent visits.
                    </dd>
                    <dt>Error-free</dt>
                    <dd>Discover and create common user errors to fix them during testing. Important to avoid accessibility and availability 
                        issues with users once the page or product is live.
                    </dd>
                    <dt>Enjoyable/Engaging</dt>
                    <dd>It is important for our page to be fun to use because it is then more likely that the user will return. The page 
                        must satisfy the needs of its intended audience in its content and design and entice them to come back.
                    </dd>
                </dl>
                <p>
                    Page layout tags are important in a HTML document because they serve as a way to disrupt the flow of content in a webpage.
                    These HTML elements are used to section off content and multiple tags exist, introduced in HTML5, so that developers can use
                    tags other than <strong>div</strong>. Some of these tags are: header, main, nav, section, and articles. In addition to breaking
                    up content, these tags have the added utility in providing a medium for search engine robots and screen readers to understand where
                    they are in a page and its components. 
                </p>
                <p>
                    Anchors are an important element of a HTML document that creates links from one section of a page to another. 
                    An anchor can also be used to link to another page all together using that page's URL. To create an anchor, use the &#60;a&#62; tag. Within the 
                    opening and closing tags of the anchor, the href attribute is added to designate the desired URL to link to. The URL can then be clicked by the 
                    user to travel to that page. As previously mentioned, anchors can be used to navigate within a website to travel to other pages on that site. It 
                    is identical to creating an anchor that links to another website by URL except our href will be assigned to a file that exists on the site. For 
                    example, href can be equal to some_index.html with an <strong>added path</strong> to take a user to that part of the website. 
                </p>
            </article>
            <article id="optimages">
                <h3>Optimizing Images</h3>
                <p>
                    There are 6 important specifications that web images should meet for them to be considered optimized. Descriptive file names are 
                    needed to allow for efficient search engine optimization. The names must be concise and descriptive such as: dragonfly-flying-pond.jpg.
                    This would be describing a dragonfly flying near/over a pond in the photo. Small file sizes are also important to ensure an image is 
                    optimized. File sizes must be as small as possible to reduce the load time for a webpage. Images can be re-sized and compressed to accomplish 
                    this goal. Though this can result in a degradation in visual quality with Lossy compression. Though this can be avoided by using methods that 
                    result in Lossless compression. Image sizes should be cut down to the appropriate size to accommodate the devices they will be displayed on 
                    guaranteeing exact dimensions. Ensure that the type of image is saved in the proper format. Some formats include: .JPG, .GIF, .PNG, and .SVG. 
                    Provide multiple resolutions of the image displayed to accommodate different devices of varying resolutions to ensure the best quality image 
                    for any given hardware. Lastly, RGB is used for most file formats. These include: .PNG, .JPG, .SVG, .WEBP. .GIF uses Indexed color mode.
                </p>
                <p>
                    Most photos are typically saved in .JPG format. This is because these files are able to be compressed to very small file sizes and remain rectangular 
                    after compression. These qualities make .JPG ideal since webpages using them will be able to load quickly and present photos with relatively good quality 
                    and preserved shape. For line art, the best file format to use is .PNG. Images saved in this format have the benefit of having true transparency. As a result,
                    these images can be placed over other colors and elements with little to no distortion.
                </p>
            </article>
            <article id="stylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>HTML includes it's own pre-defined style. However, if one would like to make a webpage more interesting, usable, legible, and readable it is necessary to take
                    advantage of Cascading Style Sheets (CSS). CSS allows one to completely alter the look and feel of a webpage to entice users to return and to satisfy any brand 
                    requirements or expectations. 
                </p>
                <p>
                    There are 5 ways to incorporate style to ones webpage. One way is using external CSS rules. To use an external stylesheet file it must be linked in the head 
                    tag of a website. Once linked, styling can be provided to all pages linking to the global stylesheet. Style can also be embedded directly into HTML files using 
                    the style tag. Styling can be done inline using an attribute:value pair to introduce the desired styling. Using JavaScript Template Literals one can style directly
                    within a JavaScript function. Lastly, styling can be done directly in JavaScript in the form: somefile.getElementsByTagName('h3').style.color = 'purple';.
                </p>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                <p>In JavaScript there are a few primary data types. These data types are: number, a Boolean (true or false), string, symbol, undefined, null, and an object. All of these
                    types are considered primitive types except for objects. Objects in JavaScript are a set of name-value pairs which are also called properties. Properties of an object
                    can be created, added, updated, and deleted as necessary. We can also assign variables to objects and modify the contents using that variable. Arrays are a type of object 
                    in JavaScript whose property names are numbers in string typing. The properties must be strings but we can access elements of an array using square bracket notation using 
                    either 0-based integer index or the string based property name. Values in an array can be of any JavaScript type and can be a mix of any types. Another object is a JSON which
                    stands for JavaScript Object Notation. What is helpful about this format is that it can be used and manipulated across other languages such as Python, C# and more. This means
                    one can easily exchange data across different programing languages. 
                </p>
                <p>
                    Like other languages, JavaScript has methods to branch and loop. The first conditional branching statement form is an if statement. As one would expect, an if statement will 
                    have a condition that needs to be checked. If that condition is true then the program will continue on to run the code within the if block. We can also add else if statements 
                    and an else to default to if no conditions have been met in the previous statements. In place of if-then-else statements, we can use switch statements which will check for a case 
                    and if true it will execute the code and break out of the switch statement. If false it will continue on to the next case. Looping is also similar to other languages. There are a 
                    a few flavors of loops. There are while, do while, for, for of, and for in loops. These different types of loops are used to repeatedly execute code within the loop block until a 
                    condition is met or the loop as looped for the pre-determined amount of times. Object oriented programming is a programming form that focuses on objects where all or most of the 
                    data in a program are considered objects. In JavaScript, an object has an identity, state, and behavior. Functional programming is achieved using functions within a program to
                    break up the code into chunks making it cleaner and more maintainable. Throughout the program functions will be called and used to perform their given function.
                </p>
            </article>
        </>
    );
}

export default TopicsPage;