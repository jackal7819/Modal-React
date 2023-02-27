import {useState} from 'react';
import Modal from './components/Modal';

const App = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='App'>
            <button className='modalBtn' onClick={() => setOpenModal(true)}>Modal</button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
    );
};

export default App;
