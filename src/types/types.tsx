export type agenciaType = {
    id: (string | number | null),
    remitente?: (string | number | null),
    destinatario?: (string | number | null),
    ciudad: (string | number | null),
    direccion: (string | number | null),
    retira: (string | number | null),
    observaciones: (string | number | null),
  }

export type listaDeAgenciasType = {
    id: number,
    agencia : string,
    valor : string,
  }
