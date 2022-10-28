export default function getFormData() {
  return JSON.parse(localStorage.getItem("items"));
}
