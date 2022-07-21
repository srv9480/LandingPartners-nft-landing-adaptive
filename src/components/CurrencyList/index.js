import React, { useEffect } from "react";
import "./styles.css";

// eslint-disable-next-line
const CurrencyList = ({setCurrency, setOpenCurrencyList}) => {
    let currency = ["USD", "SEK", "PLN", "RUB", "CAD", "CZK", "EUR", "CHF", "NOK", "GBP", "DKK", "NZD", "AUD"];
    const closeHandler = () => {
        setOpenCurrencyList(false)
    }

    useEffect(() => {
        // Когда компонент смонтирован
        document.addEventListener('click', closeHandler)
        return () => {
            // Когда компонент размонтирован
            document.removeEventListener('click', closeHandler)
        }
    }, [])

    return (
        <div className="listBlock" onClick={e => e.stopPropagation()}>
                {currency.map((item) => {
                    return (
                        <div key={item} onClick={() => {
                            setCurrency(item)
                            setOpenCurrencyList(false)
                        }} className="listItem">
                            <img src={require(`../../assets/images/Сurrency/${item}.svg`).default} alt="currencyName"/>
                            <p>{item}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default CurrencyList;