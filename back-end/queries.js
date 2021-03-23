const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "music",
  password: "",
  port: 5432,
});

const getSongs = (request, response) => {
  pool.query("SELECT * FROM songs", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getArtists = (request, response) => {
  pool.query("SELECT * FROM artists", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getSongsbyArtists = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    `SELECT * FROM songs WHERE artist_id = ${id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getSongs,
  getArtists,
  getSongsbyArtists,
};
