import Aluno from '../models/Aluno';

class TokenController {
	async	store(req, res) {
		res.json('ok');
	}
}

export default new TokenController();
