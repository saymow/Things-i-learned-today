const { DELETE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  const { _id } = JSON.parse(event.body);
  const variables = { _id };

  try {
    const { deleteLink } = await sendQuery(DELETE_LINK, variables);

    return formattedResponse(deleteLink);
  } catch (err) {
    return formattedResponse(
      {
        error: err.message,
      },
      500
    );
  }
};
