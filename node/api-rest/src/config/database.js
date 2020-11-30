require('dotenv').config();

module.exports = {

	/**
	 *  DATABASE=escola
			DATABASE_HOST='127.0.0.1'
      DATABASE_PORT=3306
      DATABASE_USERNAME='root'
      DATABASE_PASSWORD='SENHA_FORTE'

	 */

	/* MariaDB */
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE,
	dialect: 'mariadb',
	dialectOptions: {
		timezone: 'America/Sao_Paulo',
	},
	timezone: 'America/Sao_Paulo',

  /* ALL */
  define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
  },
};
