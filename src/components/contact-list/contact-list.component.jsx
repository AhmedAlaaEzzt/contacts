const ContactList = () => {
  const people = [{ name: "Tyler" }, { name: "Karen" }, { name: "Richard" }];
  return (
    <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  );
};

export default ContactList;
