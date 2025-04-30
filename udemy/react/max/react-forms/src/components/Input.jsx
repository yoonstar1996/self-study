import React, { useEffect } from "react";

export default function Input({ label, id, error, ...props }) {
  useEffect(() => {
    console.log(error);
  }, []);

  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
