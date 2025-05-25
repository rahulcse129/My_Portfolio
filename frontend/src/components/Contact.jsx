import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <p className="mb-4">You can reach me at:</p>
      <ul className="space-y-2">
        <li>Email: rahulcse129@gmail.com</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/rahul-pal-b28b9727b" className="text-blue-600">Rahul Pal</a></li>
        <li>GitHub: <a href="https://github.com/rahulcse129" className="text-blue-600">rahulcse129</a></li>
      </ul>
    </section>
  );
};

export default Contact;
