const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "music",
  password: "",
  port: 5432,
});

const getSongs = (request, response) => {
  console.log("hit");
  pool.query("SELECT * FROM songs", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getSongs,
};
