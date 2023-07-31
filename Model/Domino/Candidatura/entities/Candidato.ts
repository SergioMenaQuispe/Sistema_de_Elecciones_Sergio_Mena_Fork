import { UpdateCantidatoDto } from "../dto/dto";
import { RepositoryCandidato } from "./Cadidato.Repository";
import { EntityCandidato } from "./Candidato.Entity";

export class Candidato implements RepositoryCandidato {
  
  private candidatos : EntityCandidato[] = [];

  /**
   * Default constructor
   */
  
  // Setter methods
  // Implement setter methods here
  select(dni: string) {
    const cand = this.candidatos.find(c => c.get().dni === dni);
    if(cand) return cand;

    // manejo de errores
    throw new Error(`No se encontró candidato con dni: ${dni}`)
  }

  selectAll() {
    return this.candidatos;
  }

  add(cand: EntityCandidato): void {
    this.candidatos.push(cand);
  }

  delete(dni: string): void {
    const index = this.candidatos.findIndex((c: EntityCandidato) => c.get().dni === dni);
    if(index === -1) {
      throw new Error(`No se pudo eliminar, no se encuentra el usarios con dni: ${dni}`)
    }

    this.candidatos.splice(index, 1);
  }

  update(dni: string, newData: UpdateCantidatoDto): void {
    const index = this.candidatos.findIndex(c => c.get().dni === dni);
    if(index === -1) {
      throw new Error(`No se pudo encontrar, no se encuentra el usarios con dni: ${dni}`)
    }
    
  }

  // Getter methods
  // Implement getter methods here
}


