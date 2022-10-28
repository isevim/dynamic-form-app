import getFormData from "./getFormData";

export default function getFormDataByName(formName) {
  const formDatas = getFormData();

  let result = null;

  if (formDatas) {
    result = formDatas.find((element) => element.name === formName);
  }

  return result;
}
