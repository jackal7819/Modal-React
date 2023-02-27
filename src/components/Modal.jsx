import nft from '../assets/nft.jpg';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className='overlay'>
            <div className='modalContainer'>
                <img src={nft} alt="nft" />
                <div className="modalRight">
                    <i onClick={onClose} class="fa-solid fa-xmark closeBtn"></i>
                    <div className="content">
                        <p>Do you want a</p>
                        <h1>$20 CREDIT</h1>
                        <p>for your first trade?</p>
                    </div>
                    <div className="btnContainer">
                        <button className="btnPrimary">
                            <span className="bold">YES</span>, I love NFT's
                        </button>
                        <button className="btnOutline">
                            <span className="bold">NO</span>, thanks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
