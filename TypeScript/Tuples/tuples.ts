// Tuple:
// Since we define role can only be number and string
// it is a fixed length and can only have those
// data types.
const person: {
  role: [number, string];
} = {
  role: [2, "author"],
};

// You can still do this:
// person.role.push('admin');
// so won't protect from that but wil
// protect against this:
// person.role[1] = 10;
// and
// person.role = [0, 'admin', 'user'];
