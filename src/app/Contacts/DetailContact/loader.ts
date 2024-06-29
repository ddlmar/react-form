export const contactLoader = async (params: { id: number }) => {
  const response: Array<Contact> = await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            name: "Delmar",
            age: 26,
            country: "Brazil",
          },
          {
            id: 2,
            name: "John",
            age: 26,
            country: "USA",
          },
          {
            id: 3,
            name: "Maria",
            age: 26,
            country: "Brazil",
          },
          {
            id: 4,
            name: "Elena",
            age: 26,
            country: "Russia",
          },
        ]),
      500
    )
  );

  return response.filter((contact) => contact.id === params.id)[0];
};
