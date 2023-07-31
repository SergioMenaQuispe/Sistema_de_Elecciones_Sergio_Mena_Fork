import { Candidato } from "../entities/Candidato";

class ServicioAutenticacionCandidato {

    private candidato: Candidato;
    public constructor(candidato : Candidato) {
        this.candidato = candidato;
    }

    validarCandidato(dni : string) {
        try {
            this.candidato.select(dni);
            console.log(`Candidato encontrado con dni: ${dni}`)
        } catch(e) {
            console.error(e)
        }
    }
}