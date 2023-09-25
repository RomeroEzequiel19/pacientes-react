import { Link } from 'react-router-dom';

export const FormEdit = () => {

  return(
    <>
    <section className="w-100" >
      <div className="p-5" ></div>

      <div className="container px-4 py-1">
        <form className="p-1 p-md-4">
          <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
            <p className="fs-5">Editar Paciente</p>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="form-floating m-2 inputForm">
              <input
                type="text"
                className="form-control border-secondary"
                id="nombres"
                placeholder="juan"
                name="nombre"
                required
              />
              <label>Nombres</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="text"
                className="form-control border-secondary"
                id="apellidos"
                placeholder="Perez"
                name="apellido"
                required
              />
              <label >Apellidos</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="date"
                className="form-control border-secondary"
                id="fecha_nac"
                name="fecha_nac"
                required
              />
              <labe>Fecha de Nacimiento</labe>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="text"
                className="form-control border-secondary"
                id="direccion"
                placeholder="mz 71 cs 30"
                name="direccion"
                required
              />
              <label>Dirección</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="number"
                className="form-control border-secondary"
                id="telefono"
                placeholder="3704332211"
                name="telefono"
                required
              />
              <label>Telefóno</label>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/" className="btn btn-lg btn-secondary mx-2">Volver</Link>

            <button className="btn btn-lg btn-primary mx-2" type="submit">
              Confirmar
            </button>
          </div>
          
        </form>
      </div>
    </section>
    </>
    
  )
  
}
