import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="blogs-section flex-vt" id="blogs">
      <h1 className="section-title">Blogs</h1>
      <div className="blogs-container flex-hz">
        <div className="blog-card-container flex-vt">
          <img
            className="blog-img"
            src="https://res.cloudinary.com/shrushti23/image/upload/v1659021463/event-bubbling_xhr4iu.jpg"
          />
          <div className="blog-title">Event bubbling and Capturing!</div>
          <div className="project-card-desc">
            Event Bubbling and Capturing are very important concepts to know if
            you want to have control over the events fired in DOM! Lets learn
            more about it in this blog.
            <a href="https://dev.to/shrushti23/understanding-event-bubbling-and-capturing-9lb">
              <p>Read more...</p>
            </a>
          </div>
        </div>

        <div className="blog-card-container flex-hz">
          <img
            className="blog-img"
            src="https://res.cloudinary.com/shrushti23/image/upload/v1659021501/3jn7wmvw86tae27a9ika_mtrdiv.jpg"
          />
          <div className="blog-title">Prototypes in JavaScript!</div>
          <div className="project-card-desc">
            In this article we will understand what are prototypes ,what are
            global objects , what is this proto property and how inheritance
            works in JavaScript underneath the hood.
            <a href="https://dev.to/shrushti23/prototypes-in-javascript-101a">
              <p>Read more...</p>
            </a>
          </div>
        </div>
        <div className="blog-card-container flex-vt">
          <img
            className="blog-img"
            src="https://res.cloudinary.com/shrushti23/image/upload/v1659021420/this-keyowrd_q3hjtn.jpg"
          />
          <div className="blog-title">
            More About ‘this’ Keyword in JavaScript
          </div>
          <div className="project-card-desc">
            This blog discovers more about this keyword with several examples.
            <a href="https://dev.to/shrushti23/more-about-this-keyword-in-javascript-4ejg">
              <p>Read more...</p>
            </a>
          </div>
        </div>
      </div>
      <a href="https://medium.com/@shrushtipolekar">
        <p className="blog-section-text">Read more blogs</p>
      </a>
    </div>
  );
};

export default Blogs;
