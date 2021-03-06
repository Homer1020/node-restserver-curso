const jwt = require('jsonwebtoken');

// ===================
// Verificar Token
// ===================
let verificaToken = (req, res, next) => {
	let token = req.get('token');

	jwt.verify(token, process.env.SEED, (err, decode) => {
		if(err) {
			return res.status(401).json({
				ok: false,
				err: {
					message: 'Token no valido'
				}
			});
		}

		req.usuario = decode.usuario;

		next();
	});
}

// ===================
// Verificar AdminRole
// ===================
let verifica_adminRole = (req, res, next) => {
	let usuario = req.usuario;

	if(usuario.role === 'ADMIN_ROLE') {
		next();
	}else {
		res.json({
			ok: false,
			err: {
				message: 'El usuario no es administrador'
			}
		})
	}
}

// ===================
// Verifica token para imagen
// ===================
let verificaTokenImg = (req, res, next) => {
	let token = req.query.token;

	jwt.verify(token, process.env.SEED, (err, decode) => {
		if(err) {
			return res.status(401).json({
				ok: false,
				err: {
					message: 'Token no valido'
				}
			});
		}

		req.usuario = decode.usuario;

		next();
	});
}

module.exports = {
	verificaToken,
	verifica_adminRole,
	verificaTokenImg
}