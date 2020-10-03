require("dotenv").config();
const axios = require("axios");

const FAUNA_DB_TOKEN = process.env.FAUNA_SECRET_KEY;

module.exports = async (query, variables) => {
  const {
    data: { data, errors },
  } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${FAUNA_DB_TOKEN}`,
    },
    data: {
      query,
      variables,
    },
  });

  if (errors) {
    console.log(errors);
    throw new Error("Something went wrong.");
  }

  return data;
};
