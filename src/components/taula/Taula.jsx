import { useState } from "react"

import './taula.css'

export const Taula = ({ ciutats }) => {

  const [ciutatsCat, setciutatsCat] = useState(ciutats)

  return (
    <>
      <h1>Ciutats</h1>
      <table className="table">
        <thead className="thead">
          <tr>
            <td>Municipi</td>
            <td>Poblacio</td>
            <td>Provincia</td>
            <td>Comarca</td>
          </tr>
        </thead>
        <tbody>
          {
            ciutatsCat.map(ciutat => {

              const { comarca, municipi, poblacio, provincia } = ciutat

              return (
                <tr key={municipi} className='fila'>
                  <td>{comarca}</td>
                  <td>{municipi}</td>
                  <td>{poblacio}</td>
                  <td>{provincia}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}
