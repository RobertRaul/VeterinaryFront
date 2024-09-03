import { isAxiosError } from "axios";
import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { CargosModel } from "../../domain/models/CargosModel";
import { CargosRespuesta } from "../../infraestructure/interfaces/empleados.response";
import { CargoMapper } from "../../infraestructure/mappers/empleados.mapper";

//TODO:LISTAR CARGOS
export const getCargos = async () => {
  try {
    const { data } = await zoolomascotasAPI.get<CargosRespuesta[]>(
      "empleados/cargos/"
    );

    const cargos = data.map((cargoresp) =>
      CargoMapper.zoolAPICargoToModel(cargoresp)
    );
    return cargos;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting Cargos");
  }
};

//TODO:BUSCAR CARGO POR ID
const newCargo: CargosModel = {
  IdCargo: 0,
  NombreCargo: "",
};

export const getCargosById = async (id: number): Promise<CargosModel> => {
  if (id == -1) {
    return newCargo;
  }
  try {
    const { data } = await zoolomascotasAPI.get<CargosRespuesta>(
      `empleados/cargos/${id}`
    );
    console.log("DATA ENCONTRADA: "+ JSON.stringify(data,null,2))
    return CargoMapper.zoolAPICargoToModel(data);
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting cargos by id: ${id}`);
  }
};


//TODO:Metodo para manda a actualizar o registrar
export const updateAndCreateCargo = (cargo: Partial<CargosModel>) => {
  if (cargo.IdCargo != -1) {
    return updateCargo(cargo);
  }
  return createCargo(cargo);
};


//TODO:ACTUALIZAR CARGO
const updateCargo = async (cargo: Partial<CargosModel>) => {
  const { IdCargo, NombreCargo } = cargo;
  try {
    const { data } = await zoolomascotasAPI.put(`empleados/cargos/${IdCargo}`, {
      NombreCargo: NombreCargo,
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
    }
    throw new Error("Error al actualizar cargo");
  }
};


//TODO:CREAR CARGO
const createCargo = async (cargo: Partial<CargosModel>) => {
  const { NombreCargo } = cargo;
  try {
    const { data } = await zoolomascotasAPI.post(`empleados/cargos/`, {
      NombreCargo: NombreCargo,
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
    }
    throw new Error("Error al crear cargo");
  }
};
