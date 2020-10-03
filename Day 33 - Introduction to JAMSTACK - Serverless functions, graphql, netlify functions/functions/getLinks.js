const { GET_LINKS } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_LINKS);

    const data = res.allLinks.data;

    return formattedResponse(data);
  } catch (err) {
    return formattedResponse(
      {
        error: err.message,
      },
      500
    );
  }
};
