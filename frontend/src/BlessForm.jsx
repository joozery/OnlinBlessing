import { useState } from "react";
import { FaImage, FaUser, FaRegCommentDots } from "react-icons/fa";

export default function BlessForm({ onAddBless }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = () => {
      const newBless = {
        id: Date.now(),
        name,
        message,
        imageUrl: reader.result,
      };
      onAddBless(newBless);
      setName("");
      setMessage("");
      setImage(null);
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-10 px-4 font-prompt">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl p-8 max-w-xl mx-auto border border-pink-100"
      >
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
          💌 เขียนคำอวยพร
        </h2>

        {/* ชื่อ */}
        <div className="mb-5">
          <label className="block font-medium text-gray-700 mb-2 flex items-center gap-2">
            <FaUser className="text-pink-500" />
            ชื่อของคุณ
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="เช่น น้องฝ้าย"
            className="w-full border border-pink-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
        </div>

        {/* ข้อความ */}
        <div className="mb-5">
          <label className="block font-medium text-gray-700 mb-2 flex items-center gap-2">
            <FaRegCommentDots className="text-pink-500" />
            ข้อความอวยพร
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="ขอให้มีความสุขมากๆ ในวันพิเศษนี้ 💐"
            className="w-full border border-pink-300 px-4 py-2 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
            rows="4"
            required
          />
        </div>

        {/* แนบรูป */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2 flex items-center gap-2">
            <FaImage className="text-pink-500" />
            แนบรูปภาพ
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200"
            required
          />
        </div>

        {/* ปุ่ม */}
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md"
        >
          🎁 ส่งคำอวยพร
        </button>
      </form>
    </div>
  );
}
