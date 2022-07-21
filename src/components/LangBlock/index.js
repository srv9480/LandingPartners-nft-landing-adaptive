import React from 'react';
import './styles.css';
import { useTranslation } from "react-i18next";
import Storage from '../../global/storage';

export const COOKIES_LANGUAGE = 'cookies_language'
const MainBlock = () => {
    const { i18n } = useTranslation();
    const storage = Storage.getInstance()
    const changeLanguage = (language) => {
        setLanguage(language)
        setopenLanguges(false)
        storage.set(COOKIES_LANGUAGE, language)
        i18n.changeLanguage(language);
    } 
    const [Language, setLanguage] = React.useState(storage.get(COOKIES_LANGUAGE));
    const [openLanguges, setopenLanguges] = React.useState(false);
    let languages = ['ru', 'it', 'en', 'es', 'pt', 'cz', 'fr', 'ro', 'de']
    languages = languages.sort(a => ~a.indexOf(Language))
    const openHandler = () => {
        document.addEventListener('click', closeHandler)
        setopenLanguges(true)
    }
    const closeHandler = () => {
        setopenLanguges(false)
        document.removeEventListener('click', closeHandler)
    }
    return (
        <div className="header__WrapperLang" onClick={e => e.stopPropagation()}>
            {
                !openLanguges &&
                <div className = "header__Language" 
                onClick={() => {
                    openHandler(true)
                }}>
                    <img src={require(`../../assets/images/Languages/${Language}.png`).default} alt="Logo"/>
                    <p>{Language.toUpperCase()}</p>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7L0.803847 0.25L11.1962 0.250001L6 7Z" fill="#ffffff"/></svg>
                </div>
            }
            {openLanguges &&
                <div className = "header__Languages">
                    {
                    languages.map((lang, index) => {
                        return <span
                        className="itemLang"
                        key={index}
                        onClick={() => {
                            changeLanguage(lang)
                            closeHandler(false)
                        }}>
                            <img src={require(`../../assets/images/Languages/${lang}.png`).default} alt="Logo"/>
                            {lang.toUpperCase()}
                        </span>
                    })}
                </div>
            }
        </div>
    )
};

export default MainBlock;