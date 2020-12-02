import Aluno from '../models/Aluno';

class AlunoController {
	async	index(req, res) {
		const alunos = await Aluno.findAll();
		res.json(alunos);
	}

	async store(req, res) {

	}

	async show(req, res) {
		try {
			const {id} = req.params;

			if(!id) {
				return res.status(400).json({
					errors: ['faltando id']
				})
			}

			const aluno = await Aluno.findByPk(id);

			if(!aluno) {
				return res.status(400).json({
					errors: ['aluno nao existe']
				})
			}

			return res.json(aluno);
		} catch (e) {
			return res.status(400).json({
				errors: e.errors.map((err) => err.message)
			})
		}
	}

	async delete(req, res) {

	}

	async update(req, res) {

	}
}

export default new AlunoController();
