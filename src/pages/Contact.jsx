import Header from "../component/Header";
import Footer from "../component/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <form>
        <h1>Contact Us</h1>

        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <textarea placeholder="Enter your message"></textarea>

        <button>Send</button>
      </form>

      <Footer />
    </div>
  );
};

export default Contact;
