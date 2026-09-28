const Contact = () => {
  return (
    <div>
      <form>
        <h1>Contact Us</h1>

        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <textarea placeholder="Enter your message"></textarea>

        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
