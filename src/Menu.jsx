import Hamburger from "hamburger-react";
import { useState } from "react";

let pages = [
  {
    title: "Início",
    path: "/",
    color: "primaria",
  },
  {
    title: "Residencial",
    path: "/residencial",
    color: "primaria",
  },
  {
    title: "Corporativo",
    path: "/corporativo",
    color: "primaria",
  },
  {
    title: "Contato",
    path: "/contato",
    color: "primaria",
  },
  {
    title: "Área do Cliente",
    path: "/cliente",
    color: "secundaria",
  },
  {
    title: "Contratos",
    path: "/contratos",
    color: "secundaria",
  },
  {
    title: "Speed Teste",
    path: "/speedtest",
    color: "secundaria",
  },
  {
    title: "SoftPhone",
    path: "/softphone",
    color: "secundaria",
  },
  {
    title: "Suporte",
    path: "/suporte",
    color: "secundaria",
  },
];

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-red-400 justify-items-center">
      <p className="text-xs">menu</p>
      <Hamburger size={28} toggled={open} toggle={setOpen} />
      {open && (
        <div className="bg-blue-500">
          <ul className="md:flex">
            {pages.map((page, index) => (
              <li key={index}>{page.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
