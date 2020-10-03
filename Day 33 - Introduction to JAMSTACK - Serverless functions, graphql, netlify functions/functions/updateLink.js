const { UPDATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  const { _id, name, url, description, archived } = JSON.parse(event.body);
  const variables = { _id, name, url, description, archived };

  try {
    const { updateLink } = await sendQuery(UPDATE_LINK, variables);

    return formattedResponse(updateLink);
  } catch (err) {
    return formattedResponse(
      {
        error: err.message,
      },
      500
    );
  }
};
