import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { ClientesModel } from "../../domain/models/ClientesModel";
import { ClientesRespuesta } from "../../infraestructure/interfaces/clientes.response";

const returnClienteLogeado = (data: ClientesRespuesta) => {
  const cliente: ClientesModel = {
    IdCliente: data.IdCliente,
    TipoDoc: data.TipoDoc,
    NroDoc: data.NroDoc,
    NombreCompleto: data.NombreCompleto,
    FechaNac: data.FechaNac,
    Direccion: data.Direccion,
    email: data.email,
    password: data.password,
    Telefono: data.Telefono,
    Estado: data.Estado,
    IdUbigeo: data.IdUbigeo,
  };
  return {
    clienteLogeado: cliente,
  };
};

export const clienteLogin = async (email: string, password: string) => {
  try {
    const { data } = await zoolomascotasAPI.post<ClientesRespuesta>("login/", {
      email,
      password,
    });
    return returnClienteLogeado(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};



