import { ReactNode } from "react";
import Button from "./Button";
interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible">
      {children}
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button onClick={onClose} className="btn btn-danger">
        X
      </button>
    </div>
  );
};

export default Alert;
