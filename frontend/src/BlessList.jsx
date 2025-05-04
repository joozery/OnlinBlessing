import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function BlessList({ blessings }) {
  if (!blessings.length) {
    return (
      <div className="text-center text-gray-500 font-prompt mt-10">
        📭 ยังไม่มีคำอวยพรในตอนนี้
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-prompt">
      {blessings.map((b) => (
        <div
          key={b.id}
          className="bg-white border border-pink-200 rounded-xl shadow-md hover:shadow-lg transition duration-200 overflow-hidden"
        >
          <img
            src={b.imageUrl}
            alt="คำอวยพร"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-pink-700 mb-1 flex justify-center items-center gap-2">
              <FaHeart className="text-pink-400" />
              {b.name}
            </h3>
            <p className="text-gray-700">{b.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
