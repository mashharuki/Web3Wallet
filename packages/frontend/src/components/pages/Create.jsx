import { TextField } from '@mui/material';
// mui関連のコンポーネントのインポート
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import superAgent from 'superagent';
import ActionButton from '../common/ActionButton';
import LoadingIndicator from '../common/LoadingIndicator';
import { useMyContext } from './../../Contexts';
import './../../assets/css/App.css';
import {
    baseURL
} from './../common/Constant';
import MainContainer from './../common/MainContainer';


/** 
 * StyledPaperコンポーネント
 */
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    maxWidth: 1000,
    backgroundColor: 'rgb(150, 144, 144)'
}));

/**
 * Createコンポーネント
 */
const Create = (props) => {
    // create contract
    const {
        currentAccount,
        successFlg,
        failFlg,
        showToast,
        isLoading,
        setIsLoading,
        popUp
    } = useMyContext();


    // アカウント用のステート変数
    const [account, setAccount] = useState(null);
    // ウォレットの名前を格納するステート変数
    const [walletName, setWalletName] = useState(null);
    // ウォレットのownerのアドレスを格納する変数
    const [owners, setOwners] = useState([]);
    // ウォレットのownerのアドレスを格納するステート変数
    const [owner, setOwner] = useState(null);
    // ウォレットの閾値を格納するステート変数
    const [required, setRequired] = useState(0);

    /**
     * コンポーネントが描画されたタイミングで実行する初期化関数
     */
    const init = async() => {
        try {
            setAccount(currentAccount);
        } catch (error) {
            alert(`Failed to load web3, accounts, or contract. Check console for details.`,);
            console.error(error);
        }
    };

    /**
     * 「Create」ボタンを押した時の処理
     */
    const createAction = async() => {
        console.log("owners:", owners);

        try {
            setIsLoading(true);
            // createWalletを使うためのAPIを呼び出す。(引数に課題あり)
            superAgent
                .post(baseURL + '/api/factory/create')
                .query({
                    name: walletName,
                    owners: owners,
                    required: required
                })
                .end(async(err, res) => {
                    if (err) {
                        console.log("createWalletを使うためのAPI呼び出し中に失敗", err);
                        // popUpメソッドの呼び出し
                        popUp(false);
                        // フラグ OFF
                        setIsLoading(false);
                        // ownersの配列を空にする。
                        setOwners([]);
                        return err;
                    };
                    console.log(res);
                    // フラグ OFF
                    setIsLoading(false);
                    // ownersの配列を空にする。
                    setOwners([]);
                    // CIDを出力
                    popUp(true);
                });
        } catch(err) {
            console.error("create wallet err:", err);
            setIsLoading(false);
            // ownersの配列を空にする。
            setOwners([]);
            // popUpメソッドを呼び出す
            popUp(false);
        }
    };

    /**
     * +ボタンが押された時の処理
     */
     const addAddress = async () => {
        // 配列にアドレスを追加する。
        setOwners([...owners, owner]);
        // ステート変数を更新する。
        setOwner('');
        alert("アドレス追加完了！");
    };

    // 副作用フック
    useEffect(() => {
        setIsLoading(true);
        init();
        setIsLoading(false);
    }, [account]);

    return(
        <MainContainer>
            <StyledPaper sx={{my: 1, mx: "auto", p: 0, borderRadius: 4, marginTop: 4}}>
                {isLoading ? (
                    <Grid container justifyContent="center">
                        <header className="loading">
                            <p><LoadingIndicator/></p>
                            <h3>Please Wait・・・・</h3>
                        </header>
                    </Grid>
                ) : ( 
                    <>
                        <Grid container justifyContent="center">
                            <Grid 
                                container
                                justifyContent="center"
                                sx={{ 
                                    alignItems: 'center', 
                                    m: 1,
                                }}
                            >
                                <p><strong>Please enter wallet info</strong></p>
                            </Grid>
                            <Grid 
                                container 
                                justifyContent="center"
                                sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    m: 1,
                                    marginTop: 4
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{ 
                                        p: '2px 4px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        backgroundColor: 'rgb(150, 144, 144)',
                                        width: 450, 
                                        marginTop: 1
                                    }}
                                >  
                                    <label>Wallet Name：</label>
                                    <TextField 
                                        id="WalletName" 
                                        placeholder="Wallet Name" 
                                        margin="normal" 
                                        required
                                        onChange={ (e) => setWalletName(e.target.value) } 
                                        variant="outlined" 
                                        inputProps={{ 'aria-label': 'WalletName' }} 
                                    />
                                </Paper>
                            </Grid>
                            <Grid 
                                container 
                                justifyContent="center"
                                sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    m: 1,
                                    marginTop: 4
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{ 
                                        p: '2px 4px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        backgroundColor: 'rgb(150, 144, 144)',
                                        width: 500, 
                                        marginTop: 4
                                    }}
                                >  
                                    <label>Owner's address：</label>
                                    <TextField 
                                        id="ownerAddress" 
                                        placeholder="owners's Address" 
                                        margin="normal" 
                                        required
                                        value={owner}
                                        onChange={ (e) => setOwner(e.target.value) } 
                                        variant="outlined" 
                                        inputProps={{ 'aria-label': 'ownerAddress' }} 
                                    />
                                    <Button 
                                        onClick={addAddress} 
                                        sx={{ margin: 1}} 
                                        variant="contained" 
                                        color="inherit" 
                                        className="cta-button"
                                    > 
                                        + 
                                    </Button>
                                </Paper>
                            </Grid>
                            <Grid 
                                container 
                                justifyContent="center"
                                sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    m: 1,
                                    marginTop: 4
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{ 
                                        p: '2px 4px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        backgroundColor: 'rgb(150, 144, 144)',
                                        width: 450, 
                                        marginTop: 1
                                    }}
                                >  
                                    <label>Required：</label>
                                    <TextField 
                                        id="Required" 
                                        placeholder="Required" 
                                        margin="normal" 
                                        required
                                        type="number"
                                        onChange={ (e) => setRequired(e.target.value) } 
                                        variant="outlined" 
                                        inputProps={{ 'aria-label': 'Required' }} 
                                    />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid 
                            container 
                            justifyContent="center"
                            sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                m: 1,
                                marginTop: 4
                            }}
                        >
                            <ActionButton buttonName="Create" color="error" clickAction={createAction} />
                        </Grid>
                    </>
                )}
            </StyledPaper>
            {successFlg && (
                /* 成功時のポップアップ */
                <div id="toast" className={showToast ? "zero-show" : ""}>
                    <div id="secdesc">Create Trasaction Successfull!!</div>
                </div>
            )}
            {failFlg && (
                /* 失敗時のポップアップ */
                <div id="toast" className={showToast ? "zero-show" : ""}>
                    <div id="desc">Create Trasaction failfull..</div>
                </div>
            )}
        </MainContainer>
    );
}

export default Create;