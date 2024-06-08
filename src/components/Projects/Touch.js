import React from "react";

function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "Y6fa4304d-4d85-4250-81cd-5b9b79b772ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label className="tb-4">Your Name</label><br/>
        <input type="text" name="name" required/>
        <br/>
        <br/>
        <label className="tb-4">Your Email</label><br/>
        <input type="email" name="email" required/>
        <br/>
        <br/>
        <label className="tb-4">Meaasge</label><br/>
        <textarea name="message" required></textarea>
        <br/>
        <br/>
        <button type="submit">Submit Form</button>
        <br/>
        <br/>




      </form>
      <span>{result}</span>

    </div>
  );
}

export default App;