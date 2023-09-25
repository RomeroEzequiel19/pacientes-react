import { Link } from 'react-router-dom';

export const Header = () => {

  return(
    <>
    <header className="container-fluid">
      <nav
        className="navbar navbar-expand-lg bg-dark rounded text-white"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid text-center">
          <a
            className="navbar-brand col-lg-4 me-0 h1 text-center text-white"
            href="/"
          >
            Pacientes</a>

          <div className="navbar-collapse d-lg-flex collapse" id="navbarsExample11">
            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
              <li className="nav-item justify-content-center">
                <p className="">0810-222-333</p>
                <p className="">Lunes a Domingos - 7:00hs a 19:00hs</p>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-4 justify-content-lg-end">
              <Link to="/create/patient" className='btn btn-primary'>Crear Paciente</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
  
}

