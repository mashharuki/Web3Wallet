import {
    Dialog, DialogActions,
    DialogContent,
    DialogContentText, DialogTitle, FormControl,
    Input
} from '@mui/material';
import React from 'react';
import ActionButton from "./../ActionButton";
import './WalletDialog.css';

/**
 * WalletDialogコンポーネント
 * @param props 引数
 */
const WalletDialog = (props) => {
    // 引数から値を取得する。
    const { 
        open, 
        amount, 
        handleClose, 
        depositAction, 
        setAmountAction
    } = props;

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Deposit to Wallet 
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p>
                            Plaese enter amount 
                        </p>
                        <FormControl className="formControl">
                            <Input 
                                id="component-simple" 
                                value={amount} 
                                onChange={setAmountAction} 
                                placeholder="0.00" 
                            />
                        </FormControl>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ActionButton buttonName="deposit" clickAction={depositAction} color="primary"/>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default WalletDialog;