import { agenciaType, listaDeAgenciasType} from './types/types'


export const mapearListaDeAgencias = (agencias) => {
    let lista : listaDeAgenciasType[] = []

    agencias.map( (agencia : agenciaType)  => {
        lista = [...lista, 
        { id: agencia.id, 
          agencia : agencia.ciudad, 
          valor: agencia.ciudad
        }]
      })

    return lista
}
