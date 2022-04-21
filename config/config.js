
require('dotenv').config()

module.exports = {


  development: {
    database: "travel_gram_development",
    host: "127.0.0.1",
    dialect: "postgres",
    define: {
      underscored: true
    }
  },
  test: {
    database: "travel_gram_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable:'DATABASE_URL',
    database: "travel_gram_production",
    // host: "127.0.0.1",
    dialect: "postgres",
    dialectOptions:{
      ssl:{
        rejectUnauthorized: false,
        require: true
      }
    },

    define: {
      underscored: true
    }
  }
}