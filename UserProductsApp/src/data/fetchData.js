export async function useFetch({
  mainURL = "",
  method = "GET",
  header = { "Content-Type": "application/json" },
  body = null,
}) {
  try {
    const responce = await fetch(`http://localhost:3000/${mainURL}`, {
      method,
      header: {
        ...header,
      },
      body,
    });

    const data = await responce.json();
    return data;
  } catch (err) {
    return err;
  }
}
