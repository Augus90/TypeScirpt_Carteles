import JsonAgencias from './data/Agencias.json';
import { agenciaType, listaDeAgenciasType} from './types/types'


export const mapearListaDeAgencias = () => {
    let lista : listaDeAgenciasType[] = []

    JsonAgencias.map( (agencia : agenciaType)  => {
        lista = [...lista, 
        { id: agencia.id, 
          agencia : agencia.ciudad, 
          valor: agencia.ciudad
        }]
      })

    return lista
}
