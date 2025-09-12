import React, { useState } from "react";
import Button from "@/components/ui/button";
import SelectBox from "@/components/ui/selectBox";

export default function AddGallery() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !image) {
      alert("Başlık ve görsel zorunludur.");
      return;
    }
    // TODO: Form verisini API'ye gönder
    console.log({
      title,
      description,
      category,
      date,
      image,
    });
  };

  return (
    <div className="flex w-full justify-center py-12 px-4">
      <form onSubmit={handleSubmit} className="w-full bg-black p-16 rounded-2xl shadow-2xl flex flex-col gap-12">
        {/* Fotoğraf Yükleme Alanı */}
        <div className="w-full mb-0">
          <label
            htmlFor="galleryPhoto"
            className="w-full h-56 bg-[#2a1317] border-2 border-[#4a2329] border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#2a1317]/80 transition-colors relative"
            onClick={() => document.getElementById('galleryPhoto')?.click()}
          >
            <input
              id="galleryPhoto"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              required
            />
            <div className="flex flex-col items-center justify-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 text-white mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 16.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5l4.72-4.72a2.25 2.25 0 013.18 0l4.72 4.72"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              <span className="text-white text-xl font-semibold">
                Galeri Fotoğrafı Yükle
              </span>
              <span className="text-sm text-gray-400 mt-2">
                Maks 2MB
                <br />
                png, jpg, jpeg
              </span>
            </div>
          </label>
        </div>
        {/* Başlık */}
        <div>
          <label className="block text-sm text-gray-300 font-medium mb-2">Başlık</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Yaz Kampı 2025"
            required
          />
        </div>
        {/* Açıklama */}
        <div>
          <label className="block text-sm text-gray-300 font-medium mb-2">Açıklama</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-xl px-5 py-3 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            rows={3}
            placeholder="Kampımızdan en güzel anlar"
          />
        </div>
        {/* Kategori */}
        <div>
          <label className="block text-sm text-gray-300 font-medium mb-2">Kategori</label>
          <SelectBox
            value={category}
            onChange={setCategory}
            options={[ 
              { label: "Etkinlik", value: "etkinlik" },
              { label: "Kamp", value: "kamp" },
              { label: "Toplantı", value: "toplanti" },
            ]}
            className="w-full bg-black border border-gray-700 rounded-full text-gray-300 focus:outline-none focus:border-red-500"
          />
        </div>
        {/* Tarih */}
        <div>
          <label className="block text-sm text-gray-300 font-medium mb-2">Tarih</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-300 focus:outline-none focus:border-red-500"
            required
          />
        </div>
        <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-base font-semibold">Kaydet</Button>
      </form>
    </div>
  );
}
