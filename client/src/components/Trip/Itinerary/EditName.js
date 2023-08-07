import React, { useState } from 'react';
import {
	Button,
	Modal,
	ModalBody,
	ModalHeader,
  Table,
	Input,
	ModalFooter,
  FormFeedback,
  InputGroup,
} from 'reactstrap';

export default function EditName(props) {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleEditName} centered>
      <EditNameBody toggle={props.toggleEditName} setTripName={props.setTripName}/>
    </Modal>);
}

function EditNameBody(props) {
  let TripName = '';
  return (
    <ModalBody>
      <InputGroup>
      <Input placeholder="Trip Name" onChange={(e) => {TripName = e.target.value}}></Input>
      <Button data-testid='saveButton' color="primary" size="sm" onClick={() => {props.toggle(), props.setTripName(TripName)}}>Save</Button>
      <Button data-testid='cancelButton' color="secondary" size="sm" onClick={() => {props.toggle()}}>Cancel</Button>
      </InputGroup>
    </ModalBody>
  );
}