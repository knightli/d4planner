import { FC, ReactNode } from "react";

interface IModal {
  title?: string;
  onClose?: any;
  children: ReactNode;
}

const Modal: FC<IModal> = ({ title, onClose, children }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: window.innerHeight / 2 - 300,
        left: window.innerWidth / 2 - 300,
        width: 600,
        height: 400,
        background: "#222222",
        boxShadow: "1px 1px 10px #333333",
        borderRadius: 6,
        padding: 20,
      }}
    >
      <span
        style={{ position: "absolute", right: 20, top: 20, cursor: "pointer" }}
        onClick={onClose}
      >
        X
      </span>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};

export { Modal };
