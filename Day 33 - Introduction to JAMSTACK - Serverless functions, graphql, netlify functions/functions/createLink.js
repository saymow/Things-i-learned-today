const { CREATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description, archived: false };

  try {
    const { createLink } = await sendQuery(CREATE_LINK, variables);

    return formattedResponse(createLink);
  } catch (err) {
    return formattedResponse(
      {
        error: err.message,
      },
      500
    );
  }
};
