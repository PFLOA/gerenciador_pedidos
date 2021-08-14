import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { buscarClientesPorFiltro } from "../../../services/cliente.service"
import { BuscarClientesFiltroRequest, BuscarClientesFiltroResponse } from "../../../services/models/cliente.model"
import { ErrorModel } from "../../../services/models/core/errors.model"

const ClientesLista = () => {

  const [filter, setFilter] = useState<BuscarClientesFiltroRequest>({
    CountTotal: true,
    DataCadastro: undefined,
    NomeCliente: undefined,
    Page: 1,
    itemsPerPage: 20,
  })
  const [listaClientes, setListaClientes] = useState<BuscarClientesFiltroResponse>()

  useEffect(() => {
    buscarClientesPorFiltro(filter).then((response: AxiosResponse<BuscarClientesFiltroResponse>) => {
      setListaClientes(response.data)
    }).catch((err: ErrorModel) => {
      console.log(err)
    })
  }, [filter])

  console.log(listaClientes)
  return (
    <h2>Clientes Lista</h2>
  )
}

export default ClientesLista