import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Classe from '../models/Classe';
import ClasseRepository from '../repositories/ClasseRepository';

const classeRouter = Router();

classeRouter.post('/', async (request, response) => {
  try {
    const { name, duration } = request.body;
    const repositore = getRepository(Classe);
    const result = await repositore.save({ name, duration });
    return response.status(201).json(result);
  } catch (err) {
    console.log('err.message :>>', err.message);
  }
});

classeRouter.get('/', async (request, response) => {
  try {
    const respository = getRepository(Classe);
    const result = await respository.find();
    return response.status(200).json(result);
  } catch (err) {
    console.log('err.message :>>', err.message);
  }
});

classeRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const respository = getCustomRepository(ClasseRepository);
  const result = await respository.findById(id);
  return response.json(result);
})

export default classeRouter;
