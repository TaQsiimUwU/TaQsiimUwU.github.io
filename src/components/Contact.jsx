const contacts = [
  "Email: abdallahkassemhassan@gmail.com",
  "Phone: +201013497030",
  "LinkedIn: https://www.linkedin.com/in/abdallah-kassem-2ba6a6294/", // Update with actual LinkedIn URL
  "GitHub: https://github.com/TaQsiimUwU" // Based on your GitHub username
];

export const Contact = () => {
  return (
    <div>
      <div className="section-title">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            {contact.includes("http") ? (
              <a href={contact.split(": ")[1]} target="_blank" rel="noopener noreferrer">
                {contact}
              </a>
            ) : contact.includes("Email") ? (
              <a href={`mailto:${contact.split(": ")[1]}`}>
                {contact}
              </a>
            ) : contact.includes("Phone") ? (
              <a href={`tel:${contact.split(": ")[1]}`}>
                {contact}
              </a>
            ) : (
              <span>{contact}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
