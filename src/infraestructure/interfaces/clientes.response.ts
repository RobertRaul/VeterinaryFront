export interface ClientesRespuesta {
    IdCliente:       number;
    TipoDoc:         string;
    NroDoc:          string;
    NombreCompleto:  string;
    FechaNac:        Date;
    Direccion:       string;
    email:           string;
    password:        string;
    Telefono:        string;
    Estado:          boolean;
    UsuarioCrea:     number;
    FechaCreacion:   Date;
    UsuarioModifica: null;
    FechaModificado: null;
    IdUbigeo:        number;
}
