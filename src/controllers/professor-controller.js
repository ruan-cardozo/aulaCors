import { Professor } from '../models/professor-model.js';

export const getProfessores = async (req, res) => {
  try {
    const professores = await Professor.findAll();
    res.send(professores);
    console.log(professores);
  } catch (e) {
    console.error('Ocorreu um erro ou buscar os professores: ', e)
  }
}

export const createProfessor = async (req, res) => {
  try {
    await Professor.create(req.body)
    res.json({
      message: 'Professor criado com sucesso!',
    })
  } catch (e) {
    console.error('Ocorreu um erro ao criar um professor: ', e)
  }
}

export const updateProfessor = async (req, res) => {
  try {
    await Professor.update(req.body, {
      where: {
        matr_professor: req.params.matr_professor,
      },
    })
    res.json({
      message: 'O Professor' + ' ' + req.params.matr_professor + ' ' + 'atualizado com sucesso!',
    })
  } catch (e) {
    console.error('Ocorreu um erro ao atualizar um professor: ', e)
  }
}

export const deleteProfessor = async (req, res) => {
  try {
    await Professor.destroy({
      where: { matr_professor: req.params.matr_professor },
    })
    res.json({
      message: 'O Professor' + ' ' + req.params.matr_professor + ' ' + 'deletado com sucesso!',
    })
  } catch (e) {
    console.error('Ocorreu um erro ao deletar um professor: ', e)
  }
}

export default {getProfessores, createProfessor, updateProfessor, deleteProfessor}; 