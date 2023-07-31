export class Usuario {
  protected nombre: string;
  protected email: string;
  protected rol: Rol;
  protected dni: string;
  
  /**
   * Default constructor
  */
  protected constructor(nombre : string, email : string, rol : Rol, dni : string) {
      this.nombre = nombre;
      this.email = email;
      this.rol = rol;
      this.dni = dni;
  }

    // Setter methods
    // Implement setter methods here

    // Getter methods
    // Implement getter methods here
  }
