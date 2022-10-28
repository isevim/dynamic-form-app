import {
  faCalendarDays,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container, Toast } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { dataType } from "../../core/constants/enum";
import getFormDataByName from "../../core/utils/getFormDataByName";

import "./FormDetailScreen.scss";

export default function FormDetailScreen() {
  const [elements, setElements] = useState(null);
  const [isSuccessMessageActive, setIsSuccessMessageActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { formName } = useParams();

  useEffect(() => {
    const selectedFormData = getFormDataByName(formName);

    if (selectedFormData) {
      setElements(selectedFormData);
    }
  }, [formName]);

  const handleOnSubmitBtnClick = () => {

    setIsSuccessMessageActive(true);
        setTimeout(() => {
          setIsSuccessMessageActive(false);
        }, 2000);  

  };

  return (
    elements &&
    <>
      <Container className="form-detail-container">
        <Form id="myform" onSubmit={handleSubmit((data) => handleOnSubmitBtnClick())}>
          <div className="form-group">
            <h1>{elements?.name}</h1>
          </div>

          <div className="form-group description-text-area">
            <h6>Description: </h6>
            <label>{elements?.description}</label>
          </div>

          <div className="form-group ">
            <h6>Created At: </h6>
            <FontAwesomeIcon
              className="calender-icon"
              icon={faCalendarDays}
            />
            <label>{elements.createdAt}</label>
          </div>

          <div className="divider" />
            {
              elements.fields?.map((field, i) => {
                const fieldName = field.name;

                if (errors[fieldName]) {
                  return (
                    <div className="form-group">
                      <label for={i}>{fieldName} :</label>
                      <input className="form-control" type={field?.dataType} {...register(fieldName, { required: field?.required })} key={i} />
                      <small class="text-danger">Please enter {dataType[field?.dataType]} for {fieldName}</small>
                    </div>
                  )
                }
                else {
                  return (
                    <div className="form-group">
                      <label for={i}>{fieldName} :</label>
                      <input className="form-control" type={field?.dataType} {...register(fieldName, { required: field?.required })} key={i} />
                    </div>
                  )
                }
              })}
          <input
            type="submit"
            className="submit-form-btn"
            variant="primary"
          />
        </Form>
      </Container>

      {isSuccessMessageActive && (
        <Toast className="d-inline-block m-1" bg={"success"}>
          <Toast.Header>
            <FontAwesomeIcon
              className="success-icon"
              icon={faCircleExclamation}
            />
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>
            Form Successfully Submitted !!
          </Toast.Body>
        </Toast>
      )}
    </>
  );
}
