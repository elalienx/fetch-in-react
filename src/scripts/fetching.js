// Methods
async function fetchCreate(url, item) {
  const message = {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(item),
  };

  await fetch(`${url}`, message);
}

async function fetchRead(url) {
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

async function fetchDelete(url, itemId) {
  const finalURL = `${url}/${itemId.id}`;
  const message = { method: "DELETE" };

  await fetch(finalURL, message);
}

export { fetchCreate, fetchRead, fetchDelete };
