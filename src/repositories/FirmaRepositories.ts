import { EntityRepository, Repository } from "typeorm";
import { Firma } from "../models/Firma";

@EntityRepository(Firma)
class FirmaRepositories extends Repository<Firma>{


}

export { FirmaRepositories }