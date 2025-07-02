function BlogCard({  }) {
  return (
    <article className="post-card">
      <div className="post-header">
        <h2 className="post-title">{post.title}</h2>
        <button className="delete-btn">
          削除
        </button>
      </div>
      <p className="post-content"></p>
    </article>
  )
}

export default BlogCard