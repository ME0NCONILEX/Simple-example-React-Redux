export const changeUsersLastName = (lastname) => {
  return {
    type: "CHANGELASTNAME",
    payload: lastname,
  };
};
