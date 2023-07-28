import { agenciaType} from './types/types'

// type listaType = {
//     id: number,
//     agencia: string
// }

type rawType = (string | number | '')

export const mapearListaDeAgencias = (agencias : rawType[] ) : agenciaType[] => {
    let lista : agenciaType[] = []

    const agenciaFiltrada = agencias.filter( (agencia : rawType) => typeof(agencia[0]) === 'number')

    console.log("Agencias", agenciaFiltrada);

    agenciaFiltrada.map( (agencia : rawType[])  => {
        lista = [...lista, 
          {
            id : agencia[0],
            ciudad : agencia[1],
            remitente: agencia[2],
            destinatario: agencia[3],
            direccion: agencia[4],
            retira: agencia[5],
            observaciones: agencia[6],
        }]
      })


      console.log("Lista", lista);
    return lista
}
