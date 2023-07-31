import { EntityCandidato } from "./Candidato.Entity";
import { UpdateCantidatoDto } from "../dto/dto";

export interface RepositoryCandidato { 
    select(dni : string): EntityCandidato;
    selectAll(): EntityCandidato[];
    add(cand: EntityCandidato): void;
    delete(dni: string): void;
    update(dni : string, newData: UpdateCantidatoDto): void;
  }