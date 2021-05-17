import { EntityRepository, Repository } from 'typeorm';
import Classe from '../models/Classe';

@EntityRepository(Classe)
export default class ClasseRepository extends Repository<Classe> {

  public async findById(id: string): Promise<Classe[]> {

    return this.find({ where: { id } });

  };
  
}
