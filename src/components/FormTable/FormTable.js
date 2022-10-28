import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import './FormTable.scss';

function FormTable({ tableData }) {
  return (
    <>
      <Table striped bordered hover size="large" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Form Name</th>
            <th>Form Description</th>
            <th>Created Date</th>
            <th>Check Details</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((element, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{element.name}</td>
                <td>{element.description}</td>
                <td>{element.createdAt}</td>
                <th>
                  <Link to={`form/${element.name}`}>Show Detail</Link>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default FormTable;
