const url = "http://localhost:3030";

export const getAllPersons = async () => {
  const result = await fetch(`${url}/persons`, { method: "GET" });

  return await result.json();
};

export const getPerson = async (id) => {
  const result = await fetch(`${url}/persons/${id}`, { method: "GET" });

  return await result.json();
};

export const addPerson = async (body) => {
  const result = await fetch(`${url}/persons`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await result.ok;
};

export const editPerson = async (id, body) => {
    const result = await fetch(`${url}/persons/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    return await result.ok
}

export const deletePerson = async(id) => {
    const result = await fetch(`${url}/persons/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })

    return await result.ok
}