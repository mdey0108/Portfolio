import React from "react";

function Touch() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6fa4304d-4d85-4250-81cd-5b9b79b772ad");
      

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("An error occurred. Please check your network connection.");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label className="tb-4">Your Name</label><br />
        <input type="text" name="name" required />
        <br />
        <br />
        <label className="tb-4">Your Email</label><br />
        <input type="email" name="email" required />
        <br />
        <br />
        <label className="tb-4">Message</label><br />
        <textarea name="message" required></textarea>
        <br />
        <br />
        <button type="submit">Submit Form</button>
        <br />
        <br />
      </form>
      <span>{result}</span>
    </div>
  );
}

export default Touch;