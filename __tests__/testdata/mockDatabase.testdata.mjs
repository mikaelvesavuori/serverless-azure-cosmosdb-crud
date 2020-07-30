// Responses should match ItemCreateResponse etc if you want to make this more exact
export const database = {
  create: async (item) => new Promise((res) => res(item)),
  read: async (item) => new Promise((res) => res(item)),
  update: async (item) => new Promise((res) => res(item)),
  delete: async (item) => new Promise((res) => res(item))
};
