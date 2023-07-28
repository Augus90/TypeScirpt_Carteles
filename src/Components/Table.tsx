
import { agenciaType } from '../types/types'

const Table = ({agencia}) => {
  

    return (
    <div className="flex justify-center" id="out-box"  >
              <div className="border-2 border-dotted max-w-2xl m-10 p-10" id="in-box" >
                  <table className="table-auto" id="tabla">
                      <tbody>
                          <tr>
                              <td className="border border-slate-700 p-2" scope="row"><h5>REMITENTE:</h5></td>
                              <td className="border border-slate-700 p-2" id="Remitente">{agencia.remitente}</td>
                          </tr>
                          <tr>
                              <td className="border border-slate-700 p-2" scope="row"><h5>DESTINATARIO:</h5></td>
                              <td className="border border-slate-700 p-2" id="Destinatario">{agencia.destinatario}</td>
                          </tr>
                          <tr>
                              <td className="border border-slate-700 p-2" scope="row"><h5>CIUDAD/PROVINCIA DE DESTINO:</h5></td>
                              <td className="border border-slate-700 p-2" id="Provincia">{agencia.ciudad}</td>
                          </tr>
                          <tr>
                              <td className="border border-slate-700 p-2" scope="row"><h5>DIRECCIÓN DE DESTINO:</h5></td>
                          <td className="border border-slate-700 p-2" id="Destino">{agencia.direccion}</td>
                          </tr>
                          <tr>
                              <td className="border border-slate-700 p-2" scope="row"><h5>RETIRA:</h5></td>
                              <td className="border border-slate-700 p-2" id="Retira">{agencia.retira}</td>
                          </tr>
                          <tr>
                              <td className="border border-slate-700 p-2" scope="row"><h5>OBSERVACIONES:</h5></td>
                              <td className="border border-slate-700 p-2" id="Observaciones">{agencia.observaciones}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
  )
}

export default Table