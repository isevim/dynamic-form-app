import getFormData from "./getFormData";

export default function getFormDataLikeByName(formName) {
  const formDatas = getFormData();

  let result = [];

  if (formDatas) {
    result = formDatas.filter(element => element.name.toUpperCase().includes(formName.toUpperCase()));
  }

  return result;
}
