(() => {
  // Enums:
  // Default value for Role.ADMIN is 0, Role.READ_ONLY is 1 etc..
  // You can assign custom value such as number or string
  // like this:
  /*
  enum Role {
    ADMIN = "myAdmin",
    READ_ONLY = 500
  }
*/

  enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR = "Author",
  }

  const person = {
    role: Role.ADMIN,
  };

  if (person.role === Role.ADMIN) {
    console.log(Role.ADMIN);
    console.log(Role.AUTHOR);
  }
})();
