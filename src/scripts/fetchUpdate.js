async function fetchUpdate(url, updatedItem) {
  const finalURL = `x${url}/${updatedItem.id}`;
  const message = {
    method: "PUT",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(updatedItem),
  };
  let success = false;

  try {
    const request = await fetch(finalURL, message);

    success = request.status === 200 ? true : false;
  } catch {
    success = false;
  }

  return success;
}

export default fetchUpdate;
