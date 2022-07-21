import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import './styles.css'
import CurrencyList from '../CurrencyList';
import axios from 'axios'
import { useTranslation } from "react-i18next";

const BuyBlock = () => {
    const [openCurrencyList, setOpenCurrencyList] = useState(false)
    const [currency, setCurrency] = useState("USD")
    const [valueInput, setValueInput] = useState(100)
    const [valueCoin, setvalueCoin] = useState(0)
    const [inputVal, setInput] = React.useState({});
    const [errors, setErrors] = React.useState({});

    const { t } = useTranslation();

    const onChange = (e) => {
        setValueInput(e)
    }

    function handleChange(event) {
        let input = inputVal;
        input[event.target.name] = event.target.value;
        setInput(input);
        validate()
    }

    useEffect(() => {
        validate()
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        axios
            .get(`https://indacoin.io/api/GetCoinConvertAmount/${currency}/${t('Coin')}/${valueInput}/${t('PartnerName')}`)
            .then((response) => setvalueCoin(response.data))
        validate()
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueInput, currency])

    function validate() {
        let input = inputVal;
        let errors = {};
        let isValid = true;

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = t('BuyIncorrectEmail');
            }
        }
        setErrors(errors);

        return isValid;
    }

    return (
        <>
            <div className="buyContainer">
                <form  target="_blank" action="https://indacoin.io/payment/?partner=${t('PartnerName')}" method="GET">
                    <div className='formBlock'>
                        <div className="blockLine">
                            <input type="hidden" name="partner" value={t('PartnerName')} />
                            <div className="inputBox">
                                <div>
                                    <p className="headerBuy">{t('BuyFrom')}</p>
                                    <label className="inputLabel">{t('BuyAmount')}</label>
                                    <div style={{ display: "flex" }}>
                                        <input name="amount" style={ valueInput !== 100 ? { color: 'black' } : null} value={valueInput} onChange={(e) => onChange(e.target.value)} className="inputSelect" autoComplete="off" type="number" />
                                        <div className="currencyBlock" style={{ cursor: "pointer" }} onClick={() => setOpenCurrencyList(!openCurrencyList)}>
                                            <img src={require(`../../assets/images/Сurrency/${currency}.svg`).default} alt="currency"/>
                                            <p>{currency}</p>
                                            <input type="hidden" name="cur_from" value={currency} />
                                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7L0.803847 0.25L11.1962 0.250001L6 7Z" fill="black"/></svg>
                                        </div>
                                    </div>
                                </div>
                                {openCurrencyList &&
                                    <CurrencyList setCurrency={setCurrency} setOpenCurrencyList={setOpenCurrencyList}/>
                                }
                            </div>
                            <div className="inputBox">
                                <div>
                                    <p className="headerBuy">{t('BuyTo')}</p>
                                    <label className="inputLabel">{t('BuyYouGet')}</label>
                                    <div style={{ display: "flex" }}>
                                        <input
                                            className="inputSelect"
                                            style={{ background: "#E4E4E4" }}
                                            autoComplete="off"
                                            type="number"
                                            disabled
                                            value={valueCoin} />
                                        <div className="currencyBlock">
                                            <img src={require('../../assets/images/Сurrency/coinlogo.svg').default} alt="currencyCoin" />
                                            <p>{t('Coin')}</p>
                                            <input type="hidden" name="cur_to" value={t('Coin')} />
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div className="blockLine">
                            <div className="inputBox">
                                <div style={{width: "100%"}}>
                                    <label className="inputLabel">Email</label>
                                    <input name="email" onChange={handleChange} placeholder={t('BuyYouEmail')} className="input" autoComplete="off" />
                                    {errors.email ? <Typography variant="body1" className="error"> {errors.email}</Typography> : null}
                                </div>
                            </div>
                            <div className="inputBox">
                                <div>
                                    <label className="inputLabel">{t('Coin')} {t('BuyAddress')}</label>
                                    <input name="address" onChange={handleChange} placeholder={t('BuyYouAddress')} className="input" autoComplete="off" />
                                    {errors.address ? <Typography variant="body1" className="error" >{errors.address}</Typography> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }} >
                        {
                        inputVal.address === undefined || inputVal.email === undefined || errors.email ?
                            <button type="submit" disabled className="formButton">
                                <p className="buttonText">{t('Buy')} {t('Coin')}</p>
                            </button> :
                            <button type="submit" className="formButton">
                                <p className="buttonText">{t('Buy')} {t('Coin')}</p>
                            </button>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default BuyBlock;