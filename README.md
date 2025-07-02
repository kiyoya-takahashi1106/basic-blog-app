<!-- circle用 : blog App -->

1. 既存コードでどのような動作が出来るかを確認・理解してください (今回はnpm run devでlocalサーバーが立ち上がります).

2. 既存コードを理解しよう.
    2.1. App.jsxで宣言されているpostsというuseStateはtodoアプリの何に当たるuseStateですか？
    2.2. posts (useState) につかわれてる JSON形式 について調べよう.
    2.3. どのようにしてモーダル (記事投稿buttonを押すと開くもの) が開いたり、閉じたりしてるか確認しよう.
    2.4. components/blog-card.jsxはなにか考えよう

3. postsの中身を表示出来るようにしよう.
    3.1. components/blog-card.jsx で宣言された BlogCardコンポーネントを用いて、postsの中身をmapで表示してみよう.
    3.2. 各postのcontentプロパティも適切なところに表示出来るようにしてください.

4. モーダルに入力した内容が表示するようにしてください（追加するpostのidはDate.now()というメゾットを使ってください）.

5. postの削除buttonが適切に機能するようにしてあげてください



<!-- 
    このアプリを作る上で、前回(todoアプリ) + α で知らないといけない内容
    ・json形式
    ・モーダルの開閉理解
    ・コンポーネント (component)
    ・プロンプス (props)

    これが出来るようになったら基本的なreact学習は終わりです。お疲れ様です。
-->