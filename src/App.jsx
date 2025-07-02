import { useState, useEffect } from "react"
// import BlogCard from "./components/blog-card"
import PostModal from "./components/post-modal"
import "./blog.css"

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "幸せになりたい",
      content: "幸せになるのが、一番なんですよね。別に勉強するために生きてきてるわけじゃなんで...",
    },
    {
      id: 2,
      title: "戦争やめてほしい",
      content: "イランとイラクが戦争を始めました。私が真ん中に立って戦争を止めようと思います。",
    },
    {
      id: 3,
      title: "新歓いつするの？",
      content: "私の所属してるサークルは新歓をするする詐欺をしてきます。早くご飯をおごってほしいです。",
    },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 投稿の追加用の関数
  const handleAddPost = (  ) => {
  }

  // 投稿の削除用の関数
  const handleDeletePost = (  ) => {
  }

  // postsのデバック用 (気にしないで)
  useEffect(() => {
    console.log(posts)
  }, [posts])
  
  
  return (
    <div className="app">
      <header className="header">
        <button className="nav-btn" onClick={() => setIsModalOpen(true)}>
          記事投稿
        </button>
      </header>
    
      <main className="main">
        <div className="posts-container">
          {/* postsの表示はここで行ってください */}
        </div>
      </main>

      { isModalOpen && <PostModal onClose={() => setIsModalOpen(false)} /> }
    </div>
  )
}

export default App;