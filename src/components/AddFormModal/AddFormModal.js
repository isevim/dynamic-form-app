import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { dataType } from '../../core/constants/enum';
import ModalInput from '../ModalInput/ModalInput';
import saveNewFormData from '../../core/utils/saveNewFormData';
import getCurrentDate from '../../core/utils/getCurrentDate';
import './AddFormModal.scss';

export default function AddFormModal({
    showModal,
    setShowModal,
    setTableData
}) {
    let formProps = {
        name: null,
        description: null,
        createdAt: null,
        fields: [],
    }

    let fieldProps = {
        required: false,
        name: null,
        dataType: "STRING",
    }

    const [formName, setFormName] = useState(null);
    const [formDescription, setFormDescription] = useState(null);
    const [newFormData, setNewFormData] = useState(formProps);

    const handleCloseModal = () => {
        setShowModal(false)
        setNewFormData(formProps)
        setFormName(null)
        setFormDescription(null)
    };

    const handleOnAddNewFormInput = () => {
        let copyOfNewFormData = { ...newFormData };
        copyOfNewFormData.fields.push(fieldProps);

        setNewFormData(copyOfNewFormData);
    };

    const handleOnChangeFormName = (e) => {
        setFormName(e.target.value);
    };

    const handleOnChangeFormDescription = (e) => {
        setFormDescription(e.target.value);
    };

    const handleOnSubmitButton = () => {
        let copyOfNewFormData = { ...newFormData };

        copyOfNewFormData.name = formName;
        copyOfNewFormData.description = formDescription;
        copyOfNewFormData.createdAt = getCurrentDate()
        setNewFormData(copyOfNewFormData);

        saveNewFormData(copyOfNewFormData, setTableData);

        setShowModal(false);
        setNewFormData(formProps)
        setFormName(null)
        setFormDescription(null)
    };

    return (

        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="form-group">
                        <label>Name : </label>
                        <input
                            type={dataType.STRING}
                            className="form-control"
                            onChange={(e) => handleOnChangeFormName(e)}
                            value={formName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description :</label>
                        <textarea
                            onChange={(e) => handleOnChangeFormDescription(e)}
                            className="form-control"
                        >
                            {formDescription}
                        </textarea>
                    </div>

                    <div className="form-group">
                        <Button
                            variant="primary"
                            onClick={(e) => handleOnAddNewFormInput(e)}
                        >
                            {" "}
                            + Add Field
                        </Button>
                    </div>

                    <div className="form-group">
                        {newFormData?.fields.map((element, index) => {
                            return (
                                <ModalInput
                                    index={index}
                                    newFormData={newFormData}
                                    setNewFormData={setNewFormData}
                                />
                            );
                        })}
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleOnSubmitButton()}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}