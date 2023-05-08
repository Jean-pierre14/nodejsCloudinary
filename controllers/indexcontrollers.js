const postData = (request, response) => {
  const { username } = request.body;
  const file = request.files.image;
  response.json(request.body);
};
