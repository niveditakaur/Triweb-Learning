import FirstComponent from "./components/FirstComponent";
import Backdrop from "./components/backdrop";
import {useState} from 'react';
function App() {
  const [modalOpen, setModalOpen]=useState(false); 
  const modalCloseHandler=()=>{
    setModalOpen(false);
  }
  const openModalHandler = ()=>{
    setModalOpen(true);
  }
  return (
    <div>
      <h1>Hi App!</h1>
      {modalOpen?<FirstComponent owner="Nivedita" closeModal={modalCloseHandler}/>:null}
      {modalOpen?<Backdrop/>:null}
      <button onClick={openModalHandler}>Open Modal</button>
    </div>
  );
}

export default App;