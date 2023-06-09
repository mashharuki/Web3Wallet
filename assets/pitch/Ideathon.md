# ピッチ骨組み

## イントロダクション（10 秒）：

DID を中心にアイディンティティを形作るポートフォリオウォレットを作る。

✖️ 解決したい課題・その解決策(どんな機能を実装するか)・ユニークな点をお話しします。

## 問題(課題)の説明（20 秒）：

× ユーザーを煩雑な鍵管理からの解放してあげること。
今までよりも柔軟に個人情報を管理しやすくなると考えられている。でもまだまだ扱いにくい DID と VC を馴染みやすい UX にしてなるべく多くの人にも届くようにすること。

## 具体的な実装方針（40 秒）：

・ENS の DID 版 を実装します。 表向きは人間に親しみのある文字列して
裏側ではウォレットアドレスや DID を紐付けて一元管理をします。
NFT などもここに紐づけていく、このデータの持ち方。

・Social Identity トークンが付与されていき、アプリ内での送金に使えます。

・ 活動自体がポートフォリオとして構成されていくウォレットです。

//////////

・人間には馴染みにくい DID についても DID Name Service を実装して分かりやすい名称で登録・管理することを可能にする想定です。裏で変換

・ENS の DID 版 を実装します。 表向きは人間に親しみのある文字列して
裏側ではウォレットアドレスや DID を紐付けて一元管理をします。
NFT などもここに紐づけていく、このデータの持ち方。

・Social Identity トークンが付与されていき、アプリ内での送金に使えます。
(もちろん購入も OK!)

・ 活動自体がポートフォリオとして構成されていくウォレットです。

× アプリ内でのやりとりも含めてがスコアとして増えていき、ブロックチェーン領域におけるスコアとして換算されていきます。
× NFT や VC の発行の際に必要となる情報、ウォレットアドレス、DID も全て一元管理。

(時間があれば)
やり取りの定義：検索したり、トークンを送り合ったりすること。
アルゴリズム：行動ごとに加重をつけて換算していく。

## ユニークな要素（10 秒）：

・DID Name service (DNS)コントラクトとしてそこにデータを紐づけていく点。  
・トークンのやり取りを基軸にスコアリングする仕組みの開発。  
⇨ この 2 つを要素を組み込んで特異な要素にする。

× ・DID・ウォレットアドレスを取扱いながらも秘密鍵の管理は必要なし。

## フィードバック

・プライバシーはどうするのか??
・アップグレードはどうするのか??
・アセット管理機能
・権限管理機能
・モジュール based Wallet
⇨ モジュールを付けたり外したりすること！
・NFT にユーティリティをくっつけなくちゃいけない。
・トークンにも！！
・権限の分離ができない(オンチェーン上では)通常の EOA(ウォレットアドレスでは)
・ソーシャルリカバリー
・トラストをよりプログラマブルにできる。
