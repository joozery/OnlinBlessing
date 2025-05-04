import { FaHeart } from "react-icons/fa";
import bgImage from "./assets/bg.jpg"; // ✅ import รูปภาพพื้นหลัง

export default function BlessList({ blessings }) {
  if (!blessings.length) {
    return (
      <div className="text-center text-gray-400 font-prompt mt-10 text-lg">
        📭 ยังไม่มีคำอวยพรในตอนนี้
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-10 px-4 space-y-10 font-prompt bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }} // ✅ ใช้ background จาก import
    >
      {blessings.map((b) => (
        <div
          key={b.id}
          className="bg-white/80 backdrop-blur-md border border-rose-200 rounded-2xl shadow-lg p-6 flex flex-row items-center gap-6 max-w-5xl mx-auto"
        >
          <div className="rotate-[-2deg] shrink-0">
            <img
              src={b.imageUrl}
              alt="รูปอวยพร"
              className="w-52 h-72 object-cover rounded-xl border-4 border-white shadow-md"
            />
          </div>
          <div className="flex-1 bg-white/90 rounded-xl p-5 shadow-inner">
            <p className="text-gray-800 text-[17px] leading-relaxed mb-3">
              {b.message}
            </p>
            <p className="text-right text-rose-600 font-semibold flex justify-end items-center gap-2 text-sm">
              <FaHeart className="text-rose-400" />
              {b.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
