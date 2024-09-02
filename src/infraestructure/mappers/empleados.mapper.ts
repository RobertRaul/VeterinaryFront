import { CargosModel } from "../../domain/models/CargosModel";
import { CargosRespuesta } from "../interfaces/empleados.response";

export class CargoMapper {
  static zoolAPICargoToModel(cargo: CargosRespuesta): CargosModel {
    return {
      IdCargo: cargo.IdCargo,
      NombreCargo: cargo.NombreCargo,
    };
  }
}
