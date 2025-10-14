export async function useFetch({
  baseURL = "",
  mainURL = "",
  method = "GET",
  header = { "Content-Type": "application/json" },
  body = {},
}) {
  const responce = await fetch(`${baseURL}/${mainURL}`, {
    method: method,
    body: body,
    headers: header,
  });

  const data = await responce.json();

  return data;
}
