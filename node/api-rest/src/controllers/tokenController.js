import User from '../models/User';

class TokenController {
	async	store(req, res) {
		const {email = '', password = ''} = req.body;

		if(!email || !password) {
			return res.status(401).json({
				erros: ['credenciais invalidas']
			})
		}

		const user = await User.findOne({ where: { email } })

		if(!user) {
			return res.status(401).json({
				erros: ['usuario não existe']
			})
		}

		return res.json(user);
	}
}

export default new TokenController();
