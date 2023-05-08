export const postData = (request, response) => {
  const { username } = request.body;

  const file = request.files.image;

  response.json(request.body);
};

export const getData = async (request, response) => {
  await response.json({ message: "API data" });
};

export const updateData = async (request, response) => {
  await response.json({ message: "API update data" });
};

export const deleteData = async (request, response) => {
  await response.json({ message: "API delete data" });
};
