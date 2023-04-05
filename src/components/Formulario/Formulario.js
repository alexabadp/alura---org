import Boton from "../Boton";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import "./Formulario.css";

const Formulario = () => {
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envio", e);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" />
        <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" />
        <CampoTexto titulo="Foto" placeholder="Ingrear enlace de foto" />
        <ListaOpciones />

        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
