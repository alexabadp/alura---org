import "./ListaOpciones.css";

const ListaOpciones = () => {
  //Método map -> arreglo.map((equipo, index)=>{
  //    return <option></option>
  //})
  const equipos = [
    "Programacion",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Movil",
    "Innovacion y Gestion",
  ];

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select>
        {equipos?.map((equipos, index) => {
          return <option key={index}>{equipos}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;
