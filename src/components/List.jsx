import { Link } from 'react-router-dom';
export const List = () => {

  return(
    <>
    <main className="w-100">
      
      <div className="p-5" ></div>
      <div className="container px-4 py-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Fecha de Nacimiento</th>
              <th scope="col">Direccion</th>
              <th scope="col">Telefono</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>Ezequiel</td>
              <td>Romero</td>
              <td>27/11/2003</td>
              <td>Eva Perón</td>
              <td>3704123456</td>
              <td><Link to="/edit/patient" className='btn btn-warning'>Editar</Link></td>
            </tr>
            <tr>
              
              <td>Juan</td>
              <td>Perez</td>
              <td>20/12/2010</td>
              <td>Las Lomitas</td>
              <td>3705123456</td>
              <td><Link to="/edit/patient" className='btn btn-warning'>Editar</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

    </main>
    </>
    
  )
  
}
