
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const API_URL =
    "https://nodeproject1-aln7.onrender.com/api/auth/login";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
if (response.ok) {
  setMessage("Login successful ✅");

 



 
  navigate("/home");
} else {
        setMessage(data.message || "Login failed ❌");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error ❌");
    }

    setLoading(false);
  };

return (
  <div className="min-h-screen bg-gradient-to-r from-sky-100 to-blue-100 flex items-center justify-center p-6">

    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2">

      {/* Left Side */}

      <div className="bg-gradient-to-br from-sky-400 to-cyan-500 text-white flex flex-col justify-center items-center p-12">


        <h1 className="text-4xl font-bold mb-5">
          Charitean Login
        </h1>

        <p className="text-center text-lg opacity-90 leading-8">
          Join Charitean to make a lasting impact through transparent,
          data-driven charity. Empower underprivileged communities and
          foster sustainability with every click.
        </p>

       
      </div>

      {/* Right Side */}

      <div className="flex justify-center items-center p-12">

        <div className="w-full max-w-md">

          <h2 className="text-4xl font-bold mb-2">
            Login
          </h2>

          <p className="text-gray-500 mb-8">
            Login to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>

              <label className="text-gray-600 font-medium">
                Email ID / Username
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="mt-2 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />

            </div>

            <div>
  <label className="text-gray-600 font-medium">
    Password
  </label>

  <div className="relative mt-2">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Enter Password"
      className="w-full border rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-sky-500"
      required
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-sky-600"
    >
      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  </div>
</div>

            <div className="text-right">

              <button
                type="button"
                className="text-sky-600 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          {message && (
            <p className="mt-5 text-center text-gray-700">
              {message}
            </p>
          )}

          

        </div>

      </div>

    </div>

  </div>
);
}

export default Login;