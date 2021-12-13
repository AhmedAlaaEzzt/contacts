const ContactList = ({ contacts, removeContact }) => {

  return (
    <ol className="contact-list">
      {contacts.map(({ id, name, avatarURL, handle }) => (
        <li key={id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{ backgroundImage: `url(${avatarURL})` }}
          ></div>
          <div className="contact-details">
            <p>{name}</p>
            <p>@{handle}</p>
          </div>
          <button
            className="contact-remove"
            onClick={() => removeContact(id)}>
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ContactList;
