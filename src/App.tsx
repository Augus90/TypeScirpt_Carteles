import { useEffect, useState } from 'react'
import './App.css'
import { agenciaType, listaDeAgenciasType} from './types/types'
import { mapearListaDeAgencias } from './TraerAgencias'
import JsonAgencias from './data/Agencias.json'

function App() {


  const [agencia, setAgencia] = useState<agenciaType>(
    {
      id : 1,
      remitente : "Surely S.A.",
      destinatario : "Centro de jubilados de La Rioja",
      ciudad: "La Rioja",
      direccion: "Calle falsa 123",
      retira: "Carlos Saul",
      observaciones : "",
    }
  )

const [ListaDeAgencias, setListaDeAgencias] = useState<listaDeAgenciasType[]>([])


  useEffect(() => {
    setListaDeAgencias( mapearListaDeAgencias() );

    setAgencia(JsonAgencias[0])
  },[])


  return (
    <>
    <div className="py-5 bg-blue-700 shadow-xl" id="title">
      <h1 className='text-5xl font-normal flex justify-center text-yellow-50'>
        Carteles Surely
      </h1>
    </div>
    <div className="container m-auto p-3 space-y-3">
      <div className='p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg items-center'>
        <h4 className='text-2xl text-blue-500 font-bold'>Agencia</h4>
        <select className='flex-1 appearance-none p-2 my-5 border-2 w-full rounded-lg border-sky-500' name="Carteles" id="select">
          {ListaDeAgencias && ListaDeAgencias.map((lista ) => (
            <option key={lista.id} value={lista.agencia}>{lista.agencia}</option>
          ))}
        </select>
      </div>
      <div className='p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg items-center'>
        <div className="flex justify-center" id="out-box"  >
              <div className="border-2 border-dotted max-w-2xl m-10 p-10" id="in-box" >
                  <table className="table-auto">
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
      </div>
    </div>
    </>
  )
}

export default App
