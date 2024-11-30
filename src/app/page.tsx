"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Birthday() {
  const [stage, setStage] = useState(0); // Menyimpan tahap
  const [name, setName] = useState(""); // Menyimpan nama
  const [message, setMessage] = useState(""); // Menyimpan pesan

  useEffect(() => {
    const timer = setTimeout(() => setStage(1), 4000); // Pindah ke stage 1 setelah 4 detik
    return () => clearTimeout(timer); // Bersihkan timer ketika komponen unmount
  }, []);

  return (
    <div className="container w-full h-full">
      {/* Stage 0: Teks "Happy Birthday!" */}
      {stage === 0 && (
        <div className="big-text">
          <div>
            <span className="letter">H</span>
            <span className="letter">a</span>
            <span className="letter">p</span>
            <span className="letter">p</span>
            <span className="letter">y</span>
          </div>
          <div>
            <span className="letter">B</span>
            <span className="letter">i</span>
            <span className="letter">r</span>
            <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">d</span>
            <span className="letter">a</span>
            <span className="letter">y</span>
            <span className="letter">!</span>
          </div>
        </div>
      )}

      {/* Stage 1: Input Nama */}
      {stage === 1 && (
        <div className="text-center space-y-4 animate-fade">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-100">
            Masukkan Nama Lengkap Anda:
          </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800 bg-white"
          />

          <button
            onClick={() => {
              if (name) setStage(2);
            }}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
          >
            Lanjut
          </button>
        </div>
      )}

      {/* Stage 2: Ucapan Ulang Tahun */}
      {stage === 2 && (
        <div className="text-center space-y-4 animate-fade md:w-1/2 w-full py-12">
          <div className="md:text-5xl text-3xl font-bold text-gray-100">
            <h1>🎉 Happy Birthday! 🎉</h1>
            <span>{name}</span>
          </div>
          <div className="space-y-2 ucapan">
            <p className="text-gray-100 md:text-xl">
              Hari ini adalah hari istimewa untukmu, <span>{name}</span>. 🎂
            </p>
            <p className="text-gray-100 md:text-xl">
              Semoga umurmu semakin berkah, sehat selalu, dan diberikan
              kebahagiaan.
            </p>
            <p className="text-gray-100 md:text-xl">
              Semoga semua kegiatannya lancar yaaaa
            </p>
            <p className="text-gray-100 md:text-xl">
              Semoga yang kamu harapkan tercapaiii, semuanyanyanyahh
            </p>
            <p className="text-gray-100 md:text-xl">
              Ingatlah bahwa kamu sangat berarti bagi banyak orang!, Khususnya
              aku Mwhehehe
            </p>
            <p className="text-gray-100 md:text-xl">
              Semoga semua harapanmu tercapai dan sukses dalam segala hal yang
              {name} lakukan. 🌟
            </p>
          </div>
          {/* Galeri Foto */}
          <div className="m-6 galery">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 rounded-lg overflow-hidden shadow-md animate-slideIn"
                  style={{ animationDelay: `${i * 0.2 + 2.5}s` }}
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={`/images/photo (${i + 1}).jpg`}
                      alt={`Foto kenangan ${i + 1}`}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setStage(3)}
            className="mt-6 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
          >
            Kirim Pesan
          </button>
        </div>
      )}

      {/* Stage 3: Kirim Pesan */}
      {stage === 3 && (
        <div className="space-y-4 animate-fade">
          <h2 className="text-2xl font-bold text-gray-100 text-center">
            Kirimkan Pesan Ulang Tahun:
          </h2>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesanmu di sini..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={() => {
              if (message) {
                window.location.href = `https://wa.me/6282317578112?text=${encodeURIComponent(
                  message
                )}`;
                setStage(1);
                setName("");
                setMessage("");
              }
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full"
          >
            Kirim
          </button>
        </div>
      )}
    </div>
  );
}
