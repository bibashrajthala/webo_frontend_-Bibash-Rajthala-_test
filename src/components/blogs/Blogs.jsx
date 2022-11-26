import React from "react";
import { blogsData } from "../../constants/blogData";
import blogsImages from "../../assets";
import "./blogs.scss";

const Blogs = () => {
  return (
    <section className="blogs">
      <h2 className="blogs__heading">Recent Blogs</h2>
      <div className="blogs__card1">
        <div className="blogs__card1-texts">
          <p className="blogs__card1-text">Best Practices</p>
          <h3 className="blogs__card1-heading">
            In design active temper be uneasy. <br />
            Thirty for remove plenty regard.
          </h3>
          <span className="blogs__card1-btn">
            Read More <img src={blogsImages.blogArrow} alt="Arrow" />
          </span>
        </div>
        <img src={blogsImages.blogCard1} alt="Card1" />
      </div>
      <div className="blogs__cards">
        {blogsData.map((blog) => {
          const { id, heading, text, image } = blog;
          return (
            <div className="blogs__card" key={id}>
              <div className="blogs__card-texts">
                <p className="blogs__card-text">{text}</p>
                <h3 className="blogs__card-heading">{heading}</h3>
              </div>

              <img src={image} alt="Blog_Image" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
