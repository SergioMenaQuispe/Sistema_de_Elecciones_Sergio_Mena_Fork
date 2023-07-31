export interface UpdateCantidatoDto {
    nombre?: string;
    email?: string;
    rol?: Rol;
    dni?: string;
    partidoPolitico?: string;
    propuestas?: Array<string>;
    estadoCandidatura?: EstadoCandidatura;
}