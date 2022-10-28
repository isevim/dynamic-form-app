import './FormInput.scss';
import { dataType } from '../../core/constants/enum';

export default function FormInput({ fieldDataType, fieldName, key ,value}) {
  return (
    <div className="form-group">
      <label for={key}>{fieldName}</label>
      <input
        type={dataType[fieldDataType]}
        className="form-control"
        id={key}
        value={value}
      />
    </div>
  );
}
