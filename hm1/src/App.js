import React, {Component} from 'react';
import './App.scss';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {

  state = {
    modals: {
      first_modal: false,
      second_modal: false
    }
    
    
  }

  toggleModal = (num) => {
    
    const {modals} = this.state
    console.log(modals[num])
    modals[num] = !modals[num]
    this.setState({
      modals
    })

  }



  render() { 

    const {first_modal, second_modal} = this.state.modals


    return ( 
      <div className="modal-action">
        <Button text="Open first modal" onClick={() => this.toggleModal('first_modal')} backgroundColor="#fff" />
        <Button text="Open second modal" onClick={() => this.toggleModal('second_modal')} backgroundColor="#563" />
        {first_modal && 
          <Modal 
            header="Do you want to delete this file?" 
            closeButton={true} 
            modalClass="modal-action_window--error"
            closeModal={() => this.toggleModal('first_modal')}
            text="Once you delete this file, it won’t be possible to undo this action. 
            Are you sure you want to delete it?"
            actions={
            <>
              <Button text="Delete" onClick={() => this.toggleModal('first_modal')} /> 
              <Button text="Cancel" onClick={() => this.toggleModal('first_modal')} />
            </>}
          />
        }
        {second_modal && 
          <Modal 
            header="Do you want to save this file?" 
            closeButton={true} 
            modalClass="modal-action_window--success"
            text="Once you delete this file, it won’t be possible to undo this action. 
            Are you sure you want to delete it?"
            closeModal={() => this.toggleModal('second_modal')}
            actions={
            <>
              <Button text="Save" onClick={() => this.toggleModal('second_modal')} /> 
              <Button text="Cancel" onClick={() => this.toggleModal('second_modal')} />
            </>}
          />
        }
      </div>
    );
  }
}
 
export default App;
