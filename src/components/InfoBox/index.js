import React from "react";
import logo from "../../assets/images/mobileLogo.svg";
import './main.css'
import { useTranslation } from "react-i18next";

const InfoBox = () => {
    const { t } = useTranslation();  
    return (
        <div className="infoContainer">
            <div className="infoBlock">
                <div className="infoItem">
                    <p className="headetPoint">01</p>
                    <p className="textInfo">{t('InfoTextOne')}</p>
                </div>
                <div className="infoItem">
                    <p className="headetPoint">02</p>
                    <p className="textInfo">{t('InfoTextTwo')}</p>
                </div>
                <div className="infoItem">
                    <p className="headetPoint">03</p>
                    <p className="textInfo">{t('InfoTextTree')}</p>
                </div>
            </div>
            <div className="mobileLogo" style={{marginTop: 40}}>
                <img src={logo} alt=""/>
            </div>
        </div>
    )
};

export default InfoBox;