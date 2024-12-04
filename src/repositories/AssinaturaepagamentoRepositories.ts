import { EntityRepository, Repository } from "typeorm";
import { Assinaturaepagamento } from "../models/assinaturaepagamento";

@EntityRepository(Assinaturaepagamento)
class AssinaturaepagamentoRepositories extends Repository<Assinaturaepagamento>{


}

export { AssinaturaepagamentoRepositories }