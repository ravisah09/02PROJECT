import React, { useState, useEffect } from "react";
import { Settings, Pencil, User, Shield, Phone, Mail, MapPin, Calendar, CreditCard } from "lucide-react";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(() => {
 


 fetch("https://nodeproject1-aln7.onrender.com/api/auth/users/profile", {
  method: "GET",
  credentials: "include",
   
})
  .then(async (res) => {
    console.log("Status:", res.status);

    const data = await res.json();
    console.log("Response:", data);

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch profile");
    }

    return data;
  })
  .then((data) => {
    console.log("Profile Data:", data);

    setProfile(data.user);
    setLoading(false);
  })
  .catch((err) => {
    console.error(err);
    setError(err.message);
    setLoading(false);
  });
}, []);
  

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

 
  const name = profile?.name || "N/A";
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const lastUpdated = profile?.lastUpdated || "N/A";
  const mobile = profile?.mobile || "N/A";
  const email = profile?.email || "N/A";
  const address = profile?.address || "N/A";
  const dob = profile?.dob || "N/A";
  const aadhaar = profile?.aadhaar || "N/A";
  const pan = profile?.pan || "N/A";
  const charitanId = profile?.charitanId || "N/A";

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
      
        <div className="relative bg-gradient-to-r from-blue-700 via-purple-600 to-purple-700 rounded-2xl p-6 text-white flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center bg-purple-500 text-2xl font-bold">
              {initials}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="flex items-center gap-1 text-sm text-blue-100 mt-1">
                <Calendar size={14} /> Last updated: <span className="font-semibold">{lastUpdated}</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">
              <Settings size={18} />
            </button>
            <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">
              <Pencil size={18} />
            </button>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h2 className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
              <User size={18} className="text-blue-600" /> Contact Information
            </h2>
            <div className="space-y-3">
              <InfoRow icon={<Phone size={18} className="text-blue-600" />} label="Mobile Number" value={mobile} />
              <InfoRow icon={<Mail size={18} className="text-blue-600" />} label="Email Address" value={email} />
              <InfoRow icon={<MapPin size={18} className="text-blue-600" />} label="Address" value={address} />
              <InfoRow icon={<Calendar size={18} className="text-blue-600" />} label="Date of Birth" value={dob} />
            </div>
          </div>

          
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h2 className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
              <Shield size={18} className="text-blue-600" /> Identity Verification
            </h2>
            <div className="space-y-3">
              <InfoRow icon={<CreditCard size={18} className="text-blue-600" />} label="Aadhaar Card" value={aadhaar} />
              <InfoRow icon={<CreditCard size={18} className="text-blue-600" />} label="PAN Card" value={pan} />
              <InfoRow icon={<CreditCard size={18} className="text-blue-600" />} label="Charitean ID" value={charitanId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
      {icon}
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default Profile;