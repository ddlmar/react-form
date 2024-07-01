import { useCallback } from "react";

const data = [
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
];

export const useContacts = () => {
  const listContacts = useCallback(async (params: string | null) => {
    const response: Array<Contact> = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (params === "error") {
          reject(new Error("No expected error"));
        }

        if (params) {
          resolve(
            data.filter((contact) =>
              contact.name.toUpperCase().includes(params.toUpperCase())
            )
          );
        } else {
          resolve(data);
        }
      }, 1000);
    });
    return response;
  }, []);

  return {
    listContacts,
  };
};
