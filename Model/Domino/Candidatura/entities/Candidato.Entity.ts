import { Usuario } from "../../Autenticacion_y_seguridad/entities/Usuario";

export class EntityCandidato extends Usuario {
    public partidoPolitico: string;
    public propuestas: Array<string>;
    public estadoCandidatura: EstadoCandidatura;

    public constructor(
      nombre : string, email : string, rol : Rol, dni : string, partidoPolitico : string, propuestas : Array<string>, estadoCandidatura : EstadoCandidatura
    ) {
      super(nombre, email, rol, dni);
      
      this.partidoPolitico = partidoPolitico;
      this.propuestas = propuestas;
      this.estadoCandidatura  = estadoCandidatura;
    }

    public get() {
      return {
        dni: this.dni,
        nombre: this.nombre,
        rol: this.rol,
        email: this.email,
        partidoPolitico: this.partidoPolitico,
        propuestas: this.propuestas,
        estadoCandidatura: this.estadoCandidatura
      }
    }
  
  }

