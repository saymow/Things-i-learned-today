const GET_LINKS = `
  {
    allLinks{
      data {
        _id
        _ts
        name
        url
        description
        archived
      }
    }
  }
`;

const CREATE_LINK = `
mutation(
  $url: String!, 
  $name: String!, 
  $description: String!
  $archived: Boolean!
) {
  createLink (
    data: {
      url: $url,
      name: $name,
      description: $description,
      archived: $archived
    }
  ) {
    name
    url
    description
    archived
    _id
    _ts
  }
}`;

const UPDATE_LINK = `
mutation (
	$_id: ID!, 
  $name: String!, 
  $url: String!, 
  $description: String!,
	$archived: Boolean!
) {
  updateLink(
    id: $_id,
    data: {
      url: $url,
      name: $name,
      description: $description,
      archived: $archived
    }
  )
  {
    _id
    url
    name
    description
    archived
  }
}`;

const DELETE_LINK = `
mutation ($_id: ID!) {
  deleteLink (
    id: $_id
  ){
    _id
  }
}`;

module.exports = {
  GET_LINKS,
  CREATE_LINK,
  UPDATE_LINK,
  DELETE_LINK,
};
