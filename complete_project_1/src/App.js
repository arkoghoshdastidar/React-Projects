import React, { useState } from 'react';
import styles from './App.module.css';
import FormInput from './components/FormInput/FormInput';
import InputList from './components/InputList/InpusList';
import Modal from './components/Modal/Modal';

function App() {
  const [modalFlag, updateModalFlag] = useState(false);
  const addNewEntry = newUserDetails => {
    let newUsername = newUserDetails.name.trim();
    let newAge = newUserDetails.age;
    // Valid condition check;
    if (!(newAge < 0 || newAge.length == 0 || newUsername.length == 0)) {
      setDetails(prevDetails => {
        return [...prevDetails, newUserDetails];
      })
      removeModal();
    } else {
      // Fire the modal;
      updateModalFlag(true);
    }
  }

  const removeModal = () => {
    updateModalFlag(false);
  }

  const [details, setDetails] = useState([]);

  return (
    <div className={styles.body_app}>
      <Modal modalFlag={modalFlag} removeModal={removeModal}></Modal>
      <FormInput OnFormSubmit={addNewEntry} />
      <InputList details={details} />
    </div>
  );
}

export default App;