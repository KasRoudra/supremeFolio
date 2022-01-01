import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection, usernames} from "../../portfolio";
import MediumBlogs from "../../shared/blogs.json";
import {Fade} from "react-reveal";

export default function Blogs(props) {
  const theme = props.theme;
  var mediumSuccess;
  var showMedium;
  if (usernames.medium!=="none"){
      showMedium = true;
  }
  else {
      showMedium = false;
  }
  if (!blogSection.display) {
    if (!showMedium){
      return null;
    }
  }
  if (MediumBlogs.items.length===0){
      return null;
  }
  if (MediumBlogs.status==="ok" || MediumBlogs.items!=null){
      mediumSuccess = true;
  }
  else {
      mediumSuccess = false;
  }
  
/*Medium API returns blogs' content in HTML format. 
  Below function extracts blog's text content within paragraph tags*/
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }
//  console.log(JSON.stringify(MediumBlogs.items))
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text" style={{ color : theme.text }}>{blogSection.title}</h1>
          <p
            className="blog-subTitle"
            style={{ color : theme.secondaryText }}
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {!showMedium || mediumSuccess === false
              ? blogSection.blogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      theme={theme}
                      blog={{
                        url: blog.url,
                        image: blog.image,
                        title: blog.title,
                        description: blog.description
                      }}
                    />
                  );
                })
              : MediumBlogs.items.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      theme={theme}
                      blog={{
                        url: blog.url,
                        title: blog.title,
                        description: extractTextContent(blog.content)
                      }}
                    />
                  );
                })
            }
          </div>
        </div>
      </div>
    </Fade>
  );
}
