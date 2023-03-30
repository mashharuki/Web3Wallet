# Soul Wallet ローカル起動方法

ローカルで動かす手順は下記の通りです。

1. API サーバーの設定と起動
2. Web3 Wallet の起動

## API サーバーの設定と起動

1. `/packages/api/.env`ファイルを作成し、以下の環境変数を設定する。

- ニーモニックコード
- Stripe API を使用するための API KEY
- Pinata API を利用するための API KEY
- AWS API KEY と Secret Accress Key(今は、空でも動く)

Stipe と Pinata の API Key の取得についてはそれぞれ以下サイトにアクセスしてユーザー登録を実施したのち、APIKEY を生成すること

https://stripe.com/jp  
https://www.pinata.cloud/

```txt
MNEMONIC=YOUR_DATA
STRIPE_API_KEY=YOUR_DATA
PINATA_API_KEY=YOUR_DATA
PINATA_API_SECRET=YOUR_DATA
PINATA_API_JWT=YOUR_DATA
AWS_ACCESS_KEY_ID=YOUR_DATA
AWS_SECRET_ACCESS_KEY=YOUR_DATA
```

4. `packages/api/ABI`配下のそれぞれの JavaScript ファイルにコンパイルしたコントラクトの ABI 情報を貼り付ける。(すでに貼り付けてあるのでスマートコントラクトのソースコードを更新していなければ不要)

```js
const MyTokenABI = `ここにABIを貼り付ける`;
```

```js
const FactoryABI = `ここにABIを貼り付ける`;
```

```js
const WalletABI = `ここにABIを貼り付ける`;
```

5. 起動コマンドを入力する。

```zsh
yarn start:api
```

下記のように出力されれば、API サーバーの起動は完了

```zsh
> api server@0.1.0 start
> node server.js

起動しました https://192.168.0.3:3001
```

## intro-app の起動 (現在は不要)

1. `App.js`6 行目の変数`URL`に API サーバー起動時に出力されたエンドポイントの情報を入力する。

```diff
      import QRCode from "qrcode.react";
      import './App.css';

      function App() {
      // URL
+      const URL = 'http://192.168.0.14:3000' // please change

      return (
      <div className="App">
            <header className="App-header">
            <p>
            <strong>Welcome to  Soul Wallet!!</strong>
            </p>
            <QRCode value={URL} />
            <a href={URL}>{URL}</a>
            </header>
      </div>
      );
      }
```

4. 起動コマンドを実行する。

```zsh
npm run start
```

[http://localhost:3002/](http://localhost:3002/)にアクセスして QR コードが表示されていることを確認する。

<img src="./assets/img/qrcode_local.png">

## Web3 Wallet の起動

1. `packages/frontend/src/components/Constants.js`の 変数`baseURL`に API サーバー起動時に出力されたエンドポイントの情報を入力する。

2. `packages/frontend/src/components/Constants.js`の `CONTRACT_ADDRESS`と`MYTOKEN_ADDRESS`にデプロイしたアドレス情報を入力する。

```diff
/**
 * 各種定数を管理するためのファイル
 */

// contract Address (WalletFactory)
+ export const CONTRACT_ADDRESS = "0xD776E3Dfc486e576304ABe13865D94d063F7b821";
// contract Address (MyToken)
+ export const MYTOKEN_ADDRESS = "0x17c803255c20C946E72855901c6C0B1C2195Cfc0";
// chain ID
export const chainId = '43113';
// rpc URL
export const RPC_URL = `https://ava-testnet.public.blastapi.io/ext/bc/C/rpc`;
// API Base URL
+ export const baseURL = 'http://192.168.0.16:3001'; // please change
```

3. `.env`ファイルにストライプと pinata の API の環境変数を記載する。

貼り付ける API Key は、API サーバーの起動の設定の際に取得してきたものと同じ値で良い。

```txt
REACT_APP_STRIPE_API_KEY=<YOUR_DATA>
REACT_APP_PINATA_API_KEY=<YOUR_DATA>
REACT_APP_PINATA_API_SECRET=<YOUR_DATA>
REACT_APP_PINATA_API_JWT=<YOUR_DATA>
```

4. 起動コマンドを実行する。

```zsh
yarn start:frontend
```
