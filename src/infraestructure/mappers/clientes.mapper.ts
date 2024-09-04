import { ClientesModel } from "../../domain/models/ClientesModel";
import { ClientesRespuesta } from "../interfaces/clientes.response";

export class ClienteMapper {
  static zoolAPIClienteToModel(cliente: ClientesRespuesta): ClientesModel {
    return {
      IdCliente: cliente.IdCliente,
      TipoDoc: cliente.TipoDoc,
      NroDoc: cliente.NroDoc,
      NombreCompleto: cliente.NombreCompleto,
      FechaNac: cliente.FechaNac,
      Direccion: cliente.Direccion,
      email: cliente.email,
      password: cliente.password,
      Telefono: cliente.Telefono,
      Estado: cliente.Estado,
      IdUbigeo: cliente.IdUbigeo,
    };
  }
}
