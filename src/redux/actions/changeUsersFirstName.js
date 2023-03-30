export const changeUsersFirstName = (firstname) => {
  return {
    type: "CHANGEFIRSTNAME",
    payload: firstname,
  };
};
