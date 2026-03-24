import { EntityRepository, Repository } from "typeorm";
import { Lancamento } from "../models/Lancamento";

@EntityRepository(Lancamento)
class LancamentoRepositories extends Repository<Lancamento>{


}

export { LancamentoRepositories }