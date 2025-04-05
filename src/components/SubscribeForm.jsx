import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email");
      return;
    }

    const templateParams = {
      to_email: email,
      message: "Thank you for subscribing!",
    };

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_PUBLIC_KEY")
      .then(() => {
        toast.success("Subscription successful!");
        setEmail("");
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 shadow-lg rounded-2xl bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">Newsletter</h2>
          <p className="text-gray-600">To get weekly & monthly news, subscribe to our newsletter.</p>
        </div>

        {/* Right Form Section */}
        <div className="flex justify-center">
          <form onSubmit={sendEmail} className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-l-lg p-3 flex-1 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-3 rounded-r-lg hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
