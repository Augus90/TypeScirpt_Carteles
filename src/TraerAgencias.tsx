import { agenciaType, listaDeAgenciasType} from './types/types'

type listaType = {
    id: number,
    agencia: string
}


export const mapearListaDeAgencias = (agencias : [] ) => {
    let lista : agenciaType[] = []

    const agenciaFiltrada = agencias.filter( agencia => typeof(agencia[0]) === 'number')

    console.log("Agencias", agenciaFiltrada);

    agenciaFiltrada.map( (agencia : (string | number | null))  => {
        lista = [...lista, 
          {
            id : agencia[0],
            agencia : agencia[1],
            remitente: agencia[2],
            destinatario: agencia[3],
            ciudad: agencia[4],
            direccion: agencia[5],
            retira: agencia[6],
            observaciones: agencia[7],
        }]
      })


      console.log("Lista", lista);
    return lista
}
