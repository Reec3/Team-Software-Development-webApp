import React, { useEffect, useState } from 'react';
import {
	Button, Table,
	Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { SketchPicker } from 'react-color';
import marker1 from '../../../static/images/icon1.png';
import marker2 from '../../../static/images/icon2.png';
import marker3 from '../../../static/images/icon3.png';
import marker4 from '../../../static/images/icon4.png';
import marker5 from '../../../static/images/icon5.png';
import marker6 from '../../../static/images/icon6.png';

export default function ColorPicker(props) {
  const [selectedMarker, setSelectedMarker] = useState(marker1);
  return (
    <Modal size="sm" isOpen={props.isOpen} toggle={props.toggleColorPicker}>
      <ColorPickerHeader toggle={props.toggleColorPicker}/>
      <ColorPickerBody setLineColor={props.setLineColor} lineColor={props.lineColor} setSelectedMarker={setSelectedMarker}/>
      <ColorPickerFooter toggle={props.toggleColorPicker} setMapMarker={props.setMapMarker} selectedMarker={selectedMarker}/>
    </Modal>
  );
}

function ColorPickerHeader(props) {
  return (
    <ModalHeader className='ml-2' toggle={props.toggleColorPicker}>
      Customize Map Colors
    </ModalHeader>
  )
}

function ColorPickerBody(props) {
  const [selectedCell, setSelectedCell] = useState(0);
  const presets = ['#000000', '#E69F00', '#56B4E9', '#009E73', '#F0E442', '#0072B2', '#D55E00', '#CC79A7', '#785EF0', '#DC267F']
  useEffect(() => {
    setSelectedCell(0);
  }, []);
  function handleChange(color) {
    props.setLineColor(color.hex);
  }
	return(
		<ModalBody>
      <h6>Line Color</h6>
      <SketchPicker width='100' color={props.lineColor} onChange={handleChange} disableAlpha={true} presetColors={presets}/>
      <hr/>
      <h6>Marker Color</h6>
      <Table>
        <tbody><tr><td className={selectedCell === 1 ? "markerCellSelected text-center" : "text-center" } onClick={() => (props.setSelectedMarker(marker1), setSelectedCell(1))}><img src={marker1}/></td>
            <td className={selectedCell === 2 ? "markerCellSelected text-center" : "text-center" } onClick={() => (props.setSelectedMarker(marker2), setSelectedCell(2))}><img src={marker2}/></td>
            <td className={selectedCell === 3 ? "markerCellSelected text-center" : "text-center" } onClick={() => (props.setSelectedMarker(marker3), setSelectedCell(3))}><img src={marker3}/></td></tr>
          <tr><td className={selectedCell === 4 ? "markerCellSelected text-center" : "text-center" } onClick={() => (props.setSelectedMarker(marker4), setSelectedCell(4))}><img src={marker4}/></td>
            <td className={selectedCell === 5 ? "markerCellSelected text-center" : "text-center" } onClick={() => (props.setSelectedMarker(marker5), setSelectedCell(5))}><img src={marker5}/></td>
            <td className={selectedCell === 6 ? "markerCellSelected text-center" : "text-center" } onClick={() => (props.setSelectedMarker(marker6), setSelectedCell(6))}><img src={marker6}/></td></tr></tbody>
      </Table>
		</ModalBody>
	);
}

function ColorPickerFooter(props) {
  return (
    <ModalFooter>
      <Button data-testid='button-color-save' color="primary" size="sm" onClick={() => (
                                                                        props.toggle(), props.setMapMarker(props.selectedMarker))}>
        Save
      </Button>
    </ModalFooter>
  );
}