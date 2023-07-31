# SISTEMA DE ELECCIONES

## Estudiante:
- Sergio Sebastian Santos Mena Quispe

## Laboratorio 9:
### 3 Estilos de Programación:
1. POO:
   Se utilizaron clases para la implementación de la entidad Candidato, que extiende de Usuario:
   ```typescript
   import { Usuario } from "../../Autenticacion_y_seguridad/entities/Usuario";

   export class EntityCandidato extends Usuario {
       partidoPolitico: string;
       propuestas: Array<string>;
       estadoCandidatura: EstadoCandidatura;

    public constructor(
      nombre : string, email : string, rol : Rol, dni : string, partidoPolitico : string, propuestas : Array<string>, estadoCandidatura : EstadoCandidatura
    ) {
      super(nombre, email, rol, dni);
      
      this.partidoPolitico = partidoPolitico;
      this.propuestas = propuestas;
      this.estadoCandidatura  = estadoCandidatura;
    }

   ```
2. Manejo de errores:
   Se manejaron los errores en los peores casos posibles al acceder a la base de datos:
   ```typescript
    select(dni: string) {
    const cand = this.candidatos.find(c => c.get().dni === dni);
       if(cand) return cand;
   
       // manejo de errores
       throw new Error(`No se encontró candidato con dni: ${dni}`)
     }
   ```
3. REST:
   Se utilizo el estilo de programación REST para la declaración de las funciones en el repositorio:
   ```typescript
   export interface RepositoryCandidato { 
       select(dni : string): EntityCandidato;
       selectAll(): EntityCandidato[];
       add(cand: EntityCandidato): void;
       delete(dni: string): void;
       update(dni : string, newData: UpdateCantidatoDto): void;
     }
   ```
## Laboratorio 10
### 5 practicas de codificación legible
1. Tipado explicito, en typescript es aconsejable usar tipado para las variables y props
   ```typescript
   delete(dni: string): void {
       const index = this.candidatos.findIndex((c: EntityCandidato) => c.get().dni === dni);
       if(index === -1) {
         throw new Error(`No se pudo eliminar, no se encuentra el usarios con dni: ${dni}`)
       }
   
       this.candidatos.splice(index, 1);
     }
   ```
2. Manejo de errores, en typescript el manejo de errores es importante para evitar vulnerabilidades:
   ```typescript
       validarCandidato(dni : string) {
           try {
               this.candidato.select(dni);
               console.log(`Candidato encontrado con dni: ${dni}`)
           } catch(e) {
               console.error(e)
           }
       }
   ```
3. Declaración de metodos estaticos de ser necesario, evitar metodos vacios:
   ```typescript
   class SistemaCandidatura {
       static estadoCandidato() {
           return;
       }
   }
   ```
4. Declaración explicita de métodos publicos, privados o protegidos, para el POO en typescript es muy importante declarar explicitamente:
   ```typescript
   
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
   ```
5. En typescript, se utiliza lowercamelcase para metodos y propiedades, asi como uppercamelcase para clases
   ``` typescript
   class ServicioAutenticacion {
       /**
        * Default constructor
        */
       constructor() {
         // ...
       }
     
    /**
     * Implement this method to validate a candidate.
     */
    public validarCandidato() {
      // TODO implement here
    }
  
    /**
     * Implement this method to validate the number of candidates.
     */
    public validadCantidadCandidato() {
      // TODO implement here
    }
  }
     
```
