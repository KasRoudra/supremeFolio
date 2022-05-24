import React, { useEffect, useRef } from "react";
import { Fade } from "react-reveal";
import { blogSection } from "../../portfolio";
import BlogCard from "../../components/blogCard/BlogCard";
import MediumBlogs from "../../shared/blogs.json";
import "./Blogs.css";

const Blogs = (props) => {
  useEffect(() => {
    blogRef.current?.childNodes?.forEach((child) => {
      if (!child?.children?.length) {
        blogRef.current.removeChild(child);
      }
    })
  },[])
  const theme = props.theme;
  const blogRef = useRef(null);
  var mediumSuccess;
  const blogtype = blogSection.display;
  if (["none", "medium", "hardcoded"].indexOf(blogtype) === -1) return null;
  if (blogtype === "none") {
    return null;
  }
  if (MediumBlogs.status === "ok" || MediumBlogs.items != null) {
    mediumSuccess = true;
  } else {
    mediumSuccess = false;
  }

  /*Medium API returns blogs' content in HTML format. 
  Below function extracts blog's text content within paragraph tags*/
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter((el) => !el.includes(">"))
          .map((el) => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }
  //  console.log(JSON.stringify(MediumBlogs.items))
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text" style={{ color: theme.text }} >
            {blogSection.title}
          </h1>
          <p className="blog-subTitle" style={{ color: theme.secondaryText }}>
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div" ref={blogRef}>
            {blogtype === "hardcoded" || mediumSuccess === false
              ? blogSection.blogs.map((blog) => {
                  return (
                    <BlogCard
                      key={blog.url}
                      theme={theme}
                      blog={{
                        url: blog.url,
                        image: blog.image,
                        title: blog.title,
                        description: blog.description,
                      }}
                    />
                  );
                })
              : MediumBlogs.items.map((blog) => {
                  return (
                    <BlogCard
                      key={blog.link}
                      theme={theme}
                      blog={{
                        url: blog.link,
                        title: blog.title,
                        description: extractTextContent(blog.content),
                      }}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Blogs;
