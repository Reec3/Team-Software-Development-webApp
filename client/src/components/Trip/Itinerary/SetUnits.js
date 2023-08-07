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

export default function SetUnits(props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [newRadius, setNewRadius] = useState(props.earthRadius);
  const [newUnit, setNewUnit] = useState(props.distancesUnits);
  const [validCustomUnit, setValidCustomUnit] = useState(true);
  const [validCustomRadius, setValidCustomRadius] = useState(true);
  let radiuses = [3959, 6371, 3440];
  let units = ["mi", "km", "nm"];
  let unitNames = ["Miles", "Kilometers", "Nautical Miles"]

  function handleCloseModal() { props.toggleSetUnits(); setSelectedIndex(-1); setValidCustomUnit(true); setValidCustomRadius(true);}

  return (
    <Modal isOpen={props.isOpen} toggle={handleCloseModal}>
      <SetUnitsHeader toggle={handleCloseModal}/>
      
      <SetUnitsBody setEarthRadius={props.setEarthRadius} setNewRadius={setNewRadius} setNewUnit={setNewUnit} validCustomUnit={validCustomUnit} setValidCustomUnit={setValidCustomUnit} validCustomRadius={validCustomRadius}
      setValidCustomRadius={setValidCustomRadius} earthRadius={props.earthRadius} distancesUnits={props.distancesUnits} radiuses={radiuses} units={units} unitNames={unitNames} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>

      <SetUnitsFooter toggle={handleCloseModal} places={props.places} newUnit={newUnit} newRadius={newRadius} validCustomUnit={validCustomUnit} validCustomRadius={validCustomRadius} distancesUnits={props.distancesUnits}
      setDistancesUnits={props.setDistancesUnits} earthRadius={props.earthRadius} setEarthRadius={props.setEarthRadius} selectedIndex={selectedIndex} distancesActions={props.distancesActions}/>
    </Modal>);
}

function SetUnitsHeader(props) {
  return (
    <ModalHeader className='ml-2' toggle={props.toggleSetUnits}>
      Change Distance Units
    </ModalHeader>
  );
}

function SetUnitsBody(props) {
  return (
    <ModalBody>
      <Table className="mb-0">
        <thead><tr><th>Unit</th><th></th></tr></thead>
        <tbody>
          <DefinedUnitsRow selectedIndex={props.selectedIndex} rowIndex={0} units={props.units} unitNames={props.unitNames} radiuses={props.radiuses} setNewUnit={props.setNewUnit} setNewRadius={props.setNewRadius} setSelectedIndex={props.setSelectedIndex}/>
          <DefinedUnitsRow selectedIndex={props.selectedIndex} rowIndex={1} units={props.units} unitNames={props.unitNames} radiuses={props.radiuses} setNewUnit={props.setNewUnit} setNewRadius={props.setNewRadius} setSelectedIndex={props.setSelectedIndex}/>
          <DefinedUnitsRow selectedIndex={props.selectedIndex} rowIndex={2} units={props.units} unitNames={props.unitNames} radiuses={props.radiuses} setNewUnit={props.setNewUnit} setNewRadius={props.setNewRadius} setSelectedIndex={props.setSelectedIndex}/>
        </tbody>
        <thead><tr><th colSpan={3}>Custom Unit</th></tr></thead>
        <tbody>
          <CustomUnitsRow
            selectedIndex={props.selectedIndex} setSelectedIndex={props.setSelectedIndex}
            newUnit={props.newUnit} setNewUnit={props.setNewUnit}
            newRadius={props.newRadius} setNewRadius={props.setNewRadius}
            validCustomUnit={props.validCustomUnit} setValidCustomUnit={props.setValidCustomUnit}
            validCustomRadius={props.validCustomRadius} setValidCustomRadius={props.setValidCustomRadius}/>
        </tbody>
      </Table>
    </ModalBody>
  );
}

function DefinedUnitsRow(props) {
  return (
    <tr className={props.selectedIndex === props.rowIndex ? 'selected-unit-row' : ''}>
      <td>{props.unitNames[props.rowIndex]}</td>
      <td>{/* Blank column */}</td>
      <td>
        <DefinedUnitsSelectButton rowIndex={props.rowIndex} units={props.units} radiuses={props.radiuses} setNewUnit={props.setNewUnit} setNewRadius={props.setNewRadius} setSelectedIndex={props.setSelectedIndex}/>
      </td>
    </tr>
  );
}

function DefinedUnitsSelectButton(props) {
  return (
    <Button data-testid={"select-button-"+props.rowIndex } color="primary" size="sm" onClick={() => {
      props.setNewUnit(props.units[props.rowIndex]);
      props.setNewRadius(props.radiuses[props.rowIndex]);
      props.setSelectedIndex(props.rowIndex);
    }}
    >Select</Button>
  );
}

function CustomUnitsRow(props) {
  return (
    <tr className={props.selectedIndex === 3 ? 'selected-unit-row' : ''}>
      <td><InputGroup>
        <Input placeholder="name" value={props.newUnit} valid={props.validCustomUnit} invalid={!props.validCustomUnit}
          onChange={(e) => {
            (e.target.value.length <= 10 ?
            (props.setValidCustomUnit(true), props.setNewUnit(e.target.value))
            : props.setValidCustomUnit(false));
          }}></Input>
        <FormFeedback tooltip>Max 10 characters!</FormFeedback>
        </InputGroup></td>

      <td><InputGroup>
        <Input placeholder="radius" value={props.newRadius} valid={props.validCustomRadius} invalid={!props.validCustomRadius}
          onChange={(e) => {
            (!isNaN(e.target.value) && (e.target.value) > 0 && Number.isSafeInteger(Number(e.target.value)) ?
            (props.setValidCustomRadius(true), props.setNewRadius(e.target.value))
            : props.setValidCustomRadius(false));
          }}></Input>
        <FormFeedback tooltip>Positive integers only!</FormFeedback>
        </InputGroup></td>
      
      <td><Button data-testid='custom-unit-select' color="primary" size="sm" onClick={() => { 
        props.setSelectedIndex(3) }} >Select</Button></td></tr>
  );
}

function SetUnitsFooter(props) {
  return (
    <ModalFooter>
      <Button color="secondary" onClick={() => {
        props.toggle();
      }}>Cancel</Button>
      <Button color="primary" disabled={!(props.validCustomUnit && props.validCustomRadius) && props.selectedIndex==3} onClick={() => {
        props.setDistancesUnits(props.newUnit);
        props.setEarthRadius(parseInt(props.newRadius));
        props.distancesActions.calculateDistances(props.places, parseInt(props.newRadius));
        props.toggle();
      }}>Save</Button>
    </ModalFooter>
  );
}