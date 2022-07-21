import React from "react"
import Modal from 'react-modal';
import img1 from "../../assets/images/Img1.png"
import img2 from "../../assets/images/Img2.png"
import img3 from "../../assets/images/Img3.png"
import ava1 from "../../assets/images/ava1.png"
import ava2 from "../../assets/images/ava2.png"
import token from "../../assets/images/token.svg"
import rub from "../../assets/images/rub.png"
import close from "../../assets/images/close.svg"
import next from "../../assets/images/next.svg"
import "./styles.css";



Modal.defaultStyles.overlay.backgroundColor = 'rgba(255, 255, 255, 0.5)';
Modal.defaultStyles.overlay.zIndex = 2147483640;

function ModalBuy({numberItem, toggleModal, isOpen, errors, inputVal, setErrors, setInput, setNumberItem}) {
    function handleChange(event) {
        let input = inputVal;
        input[event.target.name] = event.target.value;
        setInput(input);
        validate()
    }

    function validate() {
        let input = inputVal;
        let errors = {};
        let isValid = true;

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = 'Incorrect Email';
            }
        }else{
            errors["email"] = undefined;
        }
        setErrors(errors);

        return isValid;
    }
    const imgFun = () => {
        switch (numberItem) {
            case 1:
                return <img style={{marginBottom: "-4px", background: "#0076A3"}} src={img1} alt="" width={520}/>;
            case 2:
                return <img style={{marginBottom: "-4px", background: "#FFFF00"}} src={img2} alt="" width={520}/>;
            case 3:
                return <img style={{marginBottom: "-4px", background: "#F26522"}} src={img3} alt="" width={520}/>;
            default:
                return '';
        }
    }

    const textFun = () => {
        switch (numberItem) {
            case 1:
                return <p className='modalTitle'>Hodl Ape Squad #003</p>;
            case 2:
                return <p className='modalTitle'>Hodl Ape Squad #024</p>;
            case 3:
                return <p className='modalTitle'>Hodl Ape Squad #026</p>;
            default:
                return '';
        }
    }
  return (
    <Modal
                isOpen={isOpen}
                className="modal"
                onRequestClose={toggleModal}
            >
                
                    <div className="imgModal" style={{display: "none"}}>
                    {imgFun()}
                    </div>
                    <div className='rightBlock'>
                        <div className='closeBlock' onClick={toggleModal} style={{width: "100%"}}>
                            <img src={close} alt=""/>
                        </div>
                        {/* {numberItem < 3 && <img src={next} onClick={() => setNumberItem(numberItem + 1)} alt="" style={{position: "absolute", top: "50%", right: "0", cursor: "pointer"}}/>} */}
                        {textFun()} 
                        <div className='infoBlocks'>
                            <div className='whoBlock'>
                                <img src={ava1} alt="" height={40}/>
                                <div>
                                    <p>Creator</p>
                                    <p>HodlApeSquad</p>
                                </div>
                            </div>
                            <div className='whoBlock'>
                                <img src={ava2} alt="" height={40}/>
                                <div>
                                    <p>Owner</p>
                                    <p>Eelifadel</p>
                                </div>
                            </div>
                        </div>
                        <form target="_blank" action="https://indacoin.io/payment/en?" method="GET">
                        <input name="partner" value="indacoin10" style={{ display: "none"}}/>
                        <input name="cur_to" value="AIRT" style={{ display: "none"}}/>
                        <input name="amount" value="210.242603" style={{ display: "none"}}/>
                            <div className='formBlock'>
                                <div style={{position: "relative"}}>
                                  <input autoComplete="off" onChange={handleChange} name="email" placeholder='Email'/>
                                    {errors.email ? <p className="error"> {errors.email}</p> : null}  
                                </div>
                                
                                <input autoComplete="off" onChange={handleChange} name="address" placeholder='Сrypto wallet address'/> 
                            </div>
                            <div className='priceBlock'>
                                <p>0.5</p>
                                <p>BNB</p>
                                <h2>≈</h2>
                                <p>210</p>
                                <p>USD</p>
                            </div>
                            <div className='buttonBlock'>
                              <button disabled={inputVal.address === undefined || inputVal.email === undefined || errors.email !== undefined ? true : false} className='submitButton'>
                                <p>
                                   BUY 
                                </p>
                            </button>  
                            </div>
                        </form>
                    </div>
             

            </Modal>
  );
}

export default ModalBuy;