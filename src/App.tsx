import { useEffect, useRef, useState } from 'react'
import './App.css'
import { agenciaType} from './types/types'
import { mapearListaDeAgencias } from './TraerAgencias'
import { ImporData } from './data/importData'
import Table from './Components/Table'


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

const [ListaDeAgencias, setListaDeAgencias] = useState<agenciaType[]>([])
const fileUpload = useRef<HTMLInputElement>(null)

  useEffect(() => {
    
  },[])

  const fillSelect = (data : agenciaType[]) => {
    console.log("Ciudad 1", data )

    setListaDeAgencias(mapearListaDeAgencias(data));
  }

  const handleSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Select", e.target.value)

    setAgencia(ListaDeAgencias[e.target.value - 1])

  }

  const handleUpload = async () => {
    // console.log(fileUpload.current?.files);
    const files : (File | null | undefined) = fileUpload.current?.files[0]

    if(files?.size === 0){
      console.error("Error")
      alert("El archivo no puede estar vacio")
    }

    const data : agenciaType[]  = await ImporData(files);
    data.shift()
    fillSelect(data);
    
  }

  const printTable = () => {
    
  }

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
        <div className='flex justify-between'>
        <input className='my-4 flex-1' type='file' id='file_upload' ref={fileUpload} />
        <button className='border rounded-lg py-1 px-1 bg-blue-300' type='button' id='button_upload' onClick={handleUpload}>Cargar</button>
        </div>
        <select 
          className='flex-1 appearance-none p-2 my-5 border-2 w-full rounded-lg border-sky-500' 
          name="Carteles" 
          id="select"
          placeholder='Agencias'
          onChange={handleSelect}>
            {ListaDeAgencias && ListaDeAgencias.map((lista ) => (
              <option key={lista.id} value={lista.id}>{lista.ciudad}</option>
            ))}
        </select>
      </div>
      <div className='p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg items-center'>
        <button className='items-end' onClick={printTable}>print better</button>
        <Table agencia={agencia}/>
      </div>
    </div>
    </>
  )
}

export default App
