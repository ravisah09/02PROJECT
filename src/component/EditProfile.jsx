import React, { useEffect, useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    dob: "",
    aadhaar: "",
    pan: "",
    charitanId: "",
  });

  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch("https://nodeproject1-aln7.onrender.com/api/auth/users/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData(data.user || {});
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

 
  const handleUpdate = () => {
    fetch("https://nodeproject1-aln7.onrender.com/api/auth/users/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Update failed");

        alert("Profile updated successfully ✅");
        navigate("/profile"); 
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading form...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2 text-gray-600"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <h2 className="text-xl font-bold">Edit Profile</h2>
        </div>

        {/* Form */}
        <div className="space-y-3">

          <input
            className="w-full border p-2 rounded"
            placeholder="Name"
            value={formData.name || ""}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Mobile"
            value={formData.mobile || ""}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Email"
            value={formData.email || ""}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Address"
            value={formData.address || ""}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="DOB"
            value={formData.dob || ""}
            onChange={(e) =>
              setFormData({ ...formData, dob: e.target.value })
            }
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Aadhaar"
            value={formData.aadhaar || ""}
            onChange={(e) =>
              setFormData({ ...formData, aadhaar: e.target.value })
            }
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="PAN"
            value={formData.pan || ""}
            onChange={(e) =>
              setFormData({ ...formData, pan: e.target.value })
            }
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Charitan ID"
            value={formData.charitanId || ""}
            onChange={(e) =>
              setFormData({ ...formData, charitanId: e.target.value })
            }
          />

          {/* Save Button */}
          <button
            onClick={handleUpdate}
            className="w-full bg-blue-600 text-white p-2 rounded flex items-center justify-center gap-2"
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;