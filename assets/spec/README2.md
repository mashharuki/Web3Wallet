# テスト手順書(スマートコントラクト)

のアプリを動かすためにスマートコントラクトのテストを行う手順になります。

1. モジュールのインストール

```zsh
yarn
```

2. 次のテストコマンドを実行

```zsh
yarn test:contract
```

3. 下記のように表示されればスマートコントラクトのテストが正常に完了したことになります。

```zsh
Contract: MultiSigWallet & MyToken Contract tests!!
    init test
      ✓ check myToken Owner
      ✓ check Factory Owner
      ✓ check num of wallet
      ✓ gets the myToken name
      ✓ gets the myToken symbol
      ✓ gets the myToken decimals
      ✓ gets the myToken totalSupply
    Factory test
      ✓ create wallet (105ms)
    varying limits && offset
      ✓ returns 10 results when limit requested is 10
      ✓ returns 20 results when limit requested is 20
      ✓ returns 30 results when limit requested is 30
      ✓ returns 30 results when limit requested is 30
      ✓ returns 30 results when limit requested is 30
    register test
      ✓ register (98ms)
      ✓ register 2 (219ms)
      ✓ register 3 (126ms)
    VC info test
      ✓ register (279ms)
      ✓ check register info (407ms)
      ✓ register ✖️ 10 (6404ms)
      ✓ register ✖️ 30 (26402ms)

  Contract: MultiSigWallet Contract tests!!
    initialization
      ✓ confirm owner address
      ✓ confirm number of required
      ✓ confirm name of wallet
    receive test
Tx Hash: 0x9fb94c42a9686cf6bcbee90232f01bc01872c6514373422c2935bb200cfa2fec
txData: {
  hash: '0x9fb94c42a9686cf6bcbee90232f01bc01872c6514373422c2935bb200cfa2fec',
  nonce: 0,
  blockHash: '0x664900a541b45c8eb11eeda39b94446048c00ff57754470d4751ae69d1c0609f',
  blockNumber: 7,
  transactionIndex: 0,
  from: '0x821aEa9a577a9b44299B9c15c88cf3087F3b5544',
  to: '0x9FBDa871d559710256a2502A2517b794B482Db40',
  value: '50000000000000000',
  gas: 90000,
  gasPrice: '2000000000',
  input: '0x',
  v: '0xa96',
  r: '0x26998c8a9776fa15a2df52ec555032233bb5d0df5ff0424a1ed3e529a578a76e',
  s: '0x3f0f284cd93dec2101d9c86c201c888b0200a55da0873e08c47db54564753412'
}
      ✓ deposit (73ms)
    submit test
      ✓ submit transaction (65ms)
      ✓ should be revert from invalid address (48ms)
    approve test
      ✓ approve transaction (150ms)
      ✓ should be revert from invalid address (91ms)
      ✓ should be revert invalid txId (86ms)
    execute test
      ✓ execute (179ms)
      ✓ should be revert invalid txId (190ms)
      ✓ should be revert with insufficient approvement  (116ms)
      ✓ this tx is aleady executed (182ms)
    revoke test
      ✓ revoke (207ms)
      ✓ should be revert invalid txId (149ms)
      ✓ should be revert from invalid address (195ms)
      ✓ should be revert from invalid address (82ms)

  Contract: MyToken Contract test
    initialization
      ✓ gets the myToken name
      ✓ gets the myToken symbol
      ✓ gets the myToken decimals
      ✓ gets the myToken totalSupply
    operate tokens!!
      ✓ mint (196ms)
      ✓ transfer (182ms)
      ✓ transfer2 (192ms)
      ✓ approve (46ms)
      ✓ burn (279ms)
      ✓ burn 2  (302ms)
      ✓ transferFrom (304ms)


  48 passing (57s)

✨  Done in 61.44s.
```
