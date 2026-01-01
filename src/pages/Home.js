import React from "react";
import useFetch from "../hooks/useFetch";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const url = "http://localhost:3001/blogs";
  const { data: blogs, loading, error } = useFetch(url);

  return (
    <main className="home">
      <header className="home-hero">
        <h2>Discover great articles</h2>
        <p>Fresh posts from our authors</p>
      </header>

      {loading && (
        <div className="loader" aria-hidden={!loading}>
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      )}

      {error && <div className="error">{error}</div>}

      {blogs && (
        <section className="blog-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </section>
      )}
    </main>
  );
}
