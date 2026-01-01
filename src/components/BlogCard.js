import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="blog-card" role="article">
      <div className="blog-card-body">
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-meta">
          Posted by <span className="author">{blog.author}</span>
        </p>
        <p className="blog-excerpt">
          {blog.body
            ? blog.body.slice(0, 140) + (blog.body.length > 140 ? "..." : "")
            : ""}
        </p>
        <Link
          className="read-more"
          to={`/blogs/${blog.id}`}
          aria-label={`Read more about ${blog.title}`}
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
