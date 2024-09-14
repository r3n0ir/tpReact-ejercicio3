import { useState } from "react";

const Mensaje = ({ note }) => {
  const [msj, setMsj] = useState("");

  return (
    <>
      <h1>
        Hello {note} {msj}
      </h1>
      <button
        className="btn btn-outline-primary"
        onClick={() => setMsj("(from changed state)")}
      >
        Click me
      </button>
    </>
  );
};

export default Mensaje;
