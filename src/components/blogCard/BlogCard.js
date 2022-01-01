import React, {useState} from "react";
import {Alert} from "react-bootstrap";
import "./BlogCard.css";

export default function BlogCard({blog, theme}) {
	
  const [show, setShow] = useState(false);
  function openUrlInNewTab(url, name) {
    if (!url) {
    	alert("404 | URL Not Found!");
    	setShow(true);
    	return(
        <Alert show={show} variant="success">
             <Alert.Heading>404 | URL Not Found!</Alert.Heading>
        </Alert>
      ); 
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className="blog-container" style={{backgroundColor: theme.jacketColor}} align="center">
      <a
          className="blog-card blog-card-shadow"
          href={blog.url}
        >
          <h3 className="blog-title" style={{ color : theme.text }}>
            {blog.title}
          </h3>
          <p className="small" style={{ color : theme.secondaryText }}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
          </a>
      </div>
    </div>
  );
}
