import Hamburger from "hamburger-react";
import { useState } from "react";

// let linhas = ["Home", "Contato", "Serviços", "Reclame aqui"];

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-blue-400">
      <Hamburger size={28} toggled={open} toggle={setOpen} />;
      {open && <div className="bg-blue-500">menu </div>}
    </div>
  );
}

export default Menu;
