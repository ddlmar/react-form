export interface Contact {
  id: number;
  name: string;
  age: number;
  country: string;
}

export const loader = async () => {
  const contacts: Contact = await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: 1,
          name: "Delmar",
          age: 26,
          country: "Brazil",
        }),
      1000
    )
  );

  return { contacts };
};
