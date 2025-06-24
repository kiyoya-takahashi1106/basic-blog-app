import { useState } from "react"

function PostModal({ onClose, onSubmit }) {
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() && content.trim()) {
      onSubmit({ title, content })
      setTitle("")
      setContent("")
      onClose()
    }
  }

  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>記事を投稿する</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>タイトル</label>
            <input
              type="text"
              placeholder="タイトルを記入"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>投稿</label>
            <textarea
              placeholder="投稿内容を記入"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            投稿する
          </button>
        </form>
      </div>
    </div>
  )
}

export default PostModal