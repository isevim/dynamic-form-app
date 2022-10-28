import getFormData from "./getFormData";

export default function saveNewFormData(newData, setTableData) {
  let formDatas = getFormData();

  if (formDatas) {
    const newFormDatas = [...formDatas, newData]

    localStorage.setItem("items", JSON.stringify(newFormDatas));

    setTableData(newFormDatas);
  }
}
