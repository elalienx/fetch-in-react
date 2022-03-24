// Properties
const url = "https://jsonplaceholder.typicode.com/todos";
const headers = { "Content-type": "application/json; charset=UTF-8" };

// Methods
async function fetchCreate(item) {
  const message = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(item),
  };

  await fetch(`${url}`, message);
}

async function fetchRead() {
  let data = "";
  let status = 0;

  try {
    const response = await fetch(url);
    const json = await response.json();

    data = json;
    status = 1;
  } catch (error) {
    data = error;
    status = 2;
  }

  return { data: data, status: status };
}

async function fetchUpdate(updatedItem) {
  let data = "";
  let status = 0;
  const finalURL = `${url}/${updatedItem.id}`;
  const message = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(updatedItem),
  };

  try {
    const request = await fetch(finalURL, message);

    if (request.status === 200) {
      data = "Updated successfully";
      status = 1;
    } else {
      data = "Could not update the item";
      status = 2;
    }
  } catch (error) {
    data = error;
    status = 2;
  }

  return { data: data, status: status };
}

async function fetchDelete(itemId) {
  const finalURL = `${url}/${itemId.id}`;
  const message = { method: "DELETE" };

  await fetch(finalURL, message);
}

export { fetchCreate, fetchRead, fetchUpdate, fetchDelete };
