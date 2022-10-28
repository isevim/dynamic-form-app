import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { dataType } from '../../core/constants/enum';
import "./ModalInput.scss";

export default function ModalInput({ index, newFormData, setNewFormData }) {

    let copyOfNewFormData = { ...newFormData }

    const [fieldNameValue, setFieldNameValue] = useState(null)
    const [fieldIsRequired, setFieldIsRequired] = useState(false)


    const handleOnFieldNameInput = (e) => {
        copyOfNewFormData.fields[index].name = e.target.value
        setNewFormData(copyOfNewFormData)

        setFieldNameValue(e.target.value)
    }
    const handleOnFieldDataTypeInput = (e) => {
        copyOfNewFormData.fields[index].dataType = e.target.value
        setNewFormData(copyOfNewFormData)
    }

    const handleOnChangeIsRequiredCheckBox = ({ target: { checked } }) => {
        copyOfNewFormData.fields[index].required = checked
        setNewFormData(copyOfNewFormData)

        setFieldIsRequired(checked)
    }

    return (
        <Row className='form-row'>
            <Col>
                <label>Field Name</label>
                <input
                    type={dataType.STRING}
                    class="form-control"
                    value={fieldNameValue}
                    onChange={(e) => handleOnFieldNameInput(e)}
                />
            </Col>
            <Col>
                <label>Data Type</label>

                <Form.Select onChange={handleOnFieldDataTypeInput} defaultValue="STRING">
                    <option value="STRING">TEXT</option>
                    <option value="NUMBER">NUMBER</option>
                </Form.Select>
            </Col>
            <Col className='required'>
                <div class="form-check">
                    <label>Required</label>
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value={fieldIsRequired}
                        onChange={(e) => handleOnChangeIsRequiredCheckBox(e)}
                        checked={fieldIsRequired}
                    />
                </div>
            </Col>
        </Row>
    )
}
