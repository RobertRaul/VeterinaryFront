import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { CargosRespuesta } from "../../infraestructure/interfaces/empleados.response";
import { CargoMapper } from "../../infraestructure/mappers/empleados.mapper";

export const getCargos = async () => {
  try {
    const { data } = await zoolomascotasAPI.get<CargosRespuesta[]>(
      "empleados/cargos/"
    );

    const cargos = data.map((cargoresp) =>
      CargoMapper.zoolAPICargoToModel(cargoresp)
    );
    return cargos
  } catch (error) {
    console.log(error);
    throw new Error("Error getting Cargos");
  }
};
