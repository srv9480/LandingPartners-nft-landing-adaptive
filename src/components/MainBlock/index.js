import React, { useState } from "react";
import './styles.css';
import ModalBuy from '../Modal';
import img1 from "../../assets/images/Img1.png"
import img2 from "../../assets/images/Img2.png"
import img3 from "../../assets/images/Img3.png"
// import img4 from "../../assets/images/Img4.png"
// import img5 from "../../assets/images/Img5.png"
// import img6 from "../../assets/images/Img6.png"

function MainBlock() {
    const [isOpen, setIsOpen] = useState(false);
    const [numberItem, setNumberItem] = useState(0);
    const [inputVal, setInput] = React.useState({});
    const [errors, setErrors] = React.useState({});

    function toggleModal() {
        setIsOpen(!isOpen);
        setInput({});
    }

    return (
        <>
            <ModalBuy
                toggleModal={toggleModal}
                numberItem={numberItem}
                isOpen={isOpen}
                errors={errors}
                setErrors={setErrors}
                inputVal={inputVal}
                setInput={setInput}
                setNumberItem={setNumberItem} />
            <div className="mainBlock">
                <div className='infoBlocks'>
                    <div className='infoBlock'>
                        <div onClick={() => {
                            toggleModal();
                            setNumberItem(1)
                        }}
                        style={{display: "block"}}
                        className="imgBlock">
                            <img src={img1} alt="" width={390} />
                        </div>
                        <div className='textBlock'>
                            <p className='mainTitle'>Hodl Ape Squad #003</p>
                            <a onClick={() => {
                                toggleModal();
                                setNumberItem(1)
                            }} className='buyButton'>Buy now</a>
                        </div>
                    </div>
                    <div className='infoBlock'>
                        <div onClick={() => {
                            toggleModal();
                            setNumberItem(2)
                        }} className="imgBlock">
                            <img src={img2} alt="" width={400} />
                        </div>
                        <div className='textBlock'>
                            <p className='mainTitle'>Hodl Ape Squad #024</p>
                            <a onClick={() => {
                                toggleModal();
                                setNumberItem(2)
                            }} className='buyButton'>Buy now</a>
                        </div>
                    </div>
                    <div>
                        <div className='infoBlock'>
                            <div onClick={() => {
                                toggleModal();
                                setNumberItem(3)
                            }} className="imgBlock">
                                <img src={img3} alt="" width={400} />
                            </div>
                            <div className='textBlock'>
                                <p className='mainTitle'>Hodl Ape Squad #026</p>
                                <a onClick={() => {
                                    toggleModal();
                                    setNumberItem(3)
                                }}

                                    className='buyButton'>Buy now</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className='bottomRow'>
                        <img src={img4} alt="" style={{ marginRight: 30 }} width={400} />
                        <img src={img5} alt="" style={{ marginRight: 30 }} width={400} />
                        <img src={img6} alt="" width={400} />
                    </div> */}
                    </div>
                </div>
            </>
            );
}

            export default MainBlock;
