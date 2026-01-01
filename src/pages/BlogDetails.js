import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./BlogDetails.css";

export default function BlogDetails() {
  const { id } = useParams();
  const url = `http://localhost:3001/blogs/${id}`;
  const { data: blog, loading, error } = useFetch(url);
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: blog?.title, url: shareUrl });
      } catch (e) {
        // user cancelled share
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch (e) {}
    }
  };

  const renderBody = () => {
    if (!blog?.body) return null;
    return blog.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>);
  };

  return (
    <main className="blog-detail">
      {error && <div className="error">{error}</div>}
      {loading && (
        <div className="loader" aria-hidden={!loading}>
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      )}

      {blog && (
        <article className="detail-article">
          <div className="detail-header">
            <button
              className="btn btn-ghost"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              ← Back
            </button>
            <div className="actions">
              <button
                className="btn"
                onClick={handleShare}
                aria-label="Share this article"
              >
                {copied ? "Link copied" : "Share"}
              </button>
            </div>
          </div>

          <h1 className="detail-title">{blog.title}</h1>

          <div className="detail-meta">
            <div className="author-block">
              <div className="avatar" aria-hidden>
                {(blog.author || "A")
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <p className="author-name">{blog.author}</p>
                {blog.publishedDate && (
                  <p className="published">
                    Published{" "}
                    {new Date(blog.publishedDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="detail-body">{renderBody()}</div>
        </article>
      )}
    </main>
  );
}
