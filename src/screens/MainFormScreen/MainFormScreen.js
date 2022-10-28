import React, { useEffect, useState } from "react";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Row } from "react-bootstrap";
import AddFormModal from "../../components/AddFormModal/AddFormModal";
import FormTable from "../../components/FormTable/FormTable";
import getFormData from "../../core/utils/getFormData";
import getFormDataLikeByName from "../../core/utils/getFormDataLikeByName";
import formElement from "../../formElement.json";
import "./MainFormScreen.scss";

export default function MainFormScreen() {

  const [tableData, setTableData] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const tableItemsData = getFormData();

    if (tableItemsData?.length > 0) {
      setTableData(tableItemsData);
    } else {
      localStorage.setItem("items", JSON.stringify(formElement));
      setTableData(formElement);
    }
  }, []);

  const handleOnAddForm = () => {
    setShowModal(true);
  };

  const handleOnChangeSearchInput = (e) => {
    setSearchInputValue(e.target.value);

    const tableItemsData = getFormDataLikeByName(e.target.value);

    if (tableItemsData) {
      setTableData(tableItemsData);
    }
  };
  return (
    <Container>
      <Row>
        <h1 className="form-header">MEMBER INFORMATION FORM</h1>
      </Row>
      <Row className="main-form-search-add">
        <Col className="main-form-search">
          <div className="form-group">
            <input
              type="text"
              placeholder="Search By Form Name"
              className="form-control"
              value={searchInputValue}
              onChange={(e) => handleOnChangeSearchInput(e)}
            />
          </div>
        </Col>
        <Col className="main-form-add">
          <div className="form-group">
            <Button
              className="add-btn"
              variant="primary"
              onClick={(e) => handleOnAddForm(e)}
            >
              <FontAwesomeIcon
                className="add-btn-icon"
                icon={faFileCirclePlus}
              />
              Add New Form
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <FormTable tableData={tableData} />
      </Row>

      <AddFormModal
        showModal={showModal}
        setShowModal={setShowModal}
        setTableData={setTableData}
      />

    </Container>
  );
}
