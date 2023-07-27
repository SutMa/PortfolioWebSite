function Modal() {

  const [modal, setModal] = usState(false)
  const toggleModal = ()=>{
    setModal(!modal)
  }
  
  return ( 
    <div>
      <h3></h3>
      <button>Close</button>
    </div>
   );
}

export default Modal;