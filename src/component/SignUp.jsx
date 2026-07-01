import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const API_URL =
    "https://nodeproject1-aln7.onrender.com/api/auth/register";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup Successful 🎉");
        console.log(data);

        
        setFormData({
          name: "",
          email: "",
          password: "",
        });

        // 👉 HOME PAGE OPEN
        navigate("/home");
      } else {
        alert(data.message || "Signup Failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }

    setLoading(false);
  };
return (
  <div className="min-h-screen bg-gradient-to-r from-sky-100 to-blue-100 flex items-center justify-center p-6">

    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2">

     
      <div className="bg-gradient-to-br from-sky-400 to-cyan-500 text-white flex flex-col justify-center items-center p-12">

        <h1 className="text-4xl font-bold mb-5">
          Charitean Register
        </h1>

        <p className="text-center text-lg opacity-90 leading-8">
          Create your account and become part of Charitean.
          Help make a lasting impact through transparent,
          data-driven charity and community support.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-10 bg-white text-sky-600 px-10 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Login
        </button>

      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center p-12">

        <div className="w-full max-w-md">

          <h2 className="text-4xl font-bold mb-2">
            Sign Up
          </h2>

          <p className="text-gray-500 mb-8">
            Create your account
          </p>

          <form onSubmit={registerUser} className="space-y-5">

            <div>
              <label className="text-gray-600 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <div>
              <label className="text-gray-600 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <div>
              <label className="text-gray-600 font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-sky-600 cursor-pointer font-semibold hover:underline"
            >
              Login
            </span>
          </p>

        </div>

      </div>

    </div>

  </div>
);
}

export default SignUp;