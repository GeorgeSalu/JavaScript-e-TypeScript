import Aluno from '../models/Aluno';

class HomeController {
	async	index(req, res) {
		const novoAluno = await Aluno.create({
			nome: 'luiz',
			sobrenome: 'otavio',
			email: 'email',
			idade: 11,
			peso: 11,
			altura: 2.4
		})

		res.json(novoAluno);
	}
}

export default new HomeController();
