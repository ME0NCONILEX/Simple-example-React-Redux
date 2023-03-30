export const changeUsersEmail = (email) => {
  return {
    type: "CHANGEEMAIL",
    payload: email,
  };
};
