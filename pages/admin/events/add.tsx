import React, { useRef } from "react";
import Button from "@/components/ui/button";

const AddEvent: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Etkinlik formu gönderildi!");
    // Form verilerini burada işleyin (örn: API çağrısı)
  };

  return (
    <div className="flex w-full justify-center py-12 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-5xl bg-black p-12 rounded-2xl shadow-2xl flex flex-col gap-10">
        {/* Etkinlik Afişi Yükleme Alanı */}
        <div className="w-full mb-0">
          <label
            htmlFor="eventPoster"
            className="w-full h-56 bg-[#2a1317] border-2 border-[#4a2329] border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#2a1317]/80 transition-colors relative"
            onClick={handleImageUploadClick}
          >
            <input
              id="eventPoster"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              className="hidden"
              ref={fileInputRef}
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
                Etkinlik Afişi Yükle
              </span>
              <span className="text-sm text-gray-400 mt-2">
                Maks 2MB
                <br />
                png, jpg, jpeg
              </span>
            </div>
          </label>
        </div>

        {/* Form Alanları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {/* Etkinlik Adı */}
          <div>
            <label htmlFor="eventName" className="block text-sm text-gray-300 font-medium mb-2">
              Etkinlik Adı
            </label>
            <input
              id="eventName"
              type="text"
              placeholder="Lütfen bu alana etkinlik adını giriniz."
        className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-500 placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-200"
            />
          </div>
          {/* Kategori */}
          <div>
            <label htmlFor="eventCategory" className="block text-sm text-gray-300 font-medium mb-2">
              Kategori
            </label>
            <select
              id="eventCategory"
              className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-200"
            >
              <option value="" className="bg-[#232323] text-white">Kategori Seçiniz</option>
              <option value="" className="bg-black text-gray-500">Kategori Seçiniz</option>
              <option value="seminer" className="bg-black text-gray-500">Seminer</option>
              <option value="konferans" className="bg-black text-gray-500">Konferans</option>
              <option value="workshop" className="bg-black text-gray-500">Workshop</option>
              <option value="eğitim" className="bg-black text-gray-500">Eğitim</option>
              <option value="diğer" className="bg-black text-gray-500">Diğer</option>
            </select>
          </div>
          {/* Başlangıç Tarihi */}
          <div>
            <label htmlFor="startDate" className="block text-sm text-gray-300 font-medium mb-2">
              Başlangıç Tarihi
            </label>
            <input
              id="startDate"
              type="text"
              placeholder="GG / AA / YYYY"
        className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-500 placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-200"
            />
          </div>
          {/* Bitiş Tarihi (Opsiyonel) */}
          <div>
            <label htmlFor="endDate" className="block text-sm text-gray-300 font-medium mb-2">
              Bitiş Tarihi (Opsiyonel)
            </label>
            <input
              id="endDate"
              type="text"
              placeholder="GG / AA / YYYY"
        className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-500 placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-200"
            />
          </div>
          {/* Saat Aralığı ya da Başlangıç Saati */}
          <div>
            <label htmlFor="timeRange" className="block text-sm text-gray-300 font-medium mb-2">
              Saat Aralığı ya da Başlangıç Saati
            </label>
            <input
              id="timeRange"
              type="text"
              placeholder="Örn: 18:00 - 19:00"
        className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-500 placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-200"
            />
          </div>
          {/* Etkinlik Sorumlusu */}
          <div>
            <label htmlFor="eventResponsible" className="block text-sm text-gray-300 font-medium mb-2">
              Etkinlik Sorumlusu
            </label>
            <input
              id="eventResponsible"
              type="text"
              placeholder="İsim Soyisim"
        className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-500 placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-200"
            />
          </div>
        </div>
        {/* Etkinlik Açıklaması */}
        <div className="mb-2">
          <label htmlFor="eventDescription" className="block text-sm text-gray-300 font-medium mb-2">
            Etkinlik Açıklaması
          </label>
          <textarea
            id="eventDescription"
            rows={5}
            placeholder="Lütfen bu alana etkinlik açıklamasını giriniz."
            className="w-full bg-black border border-gray-700 rounded-xl px-5 py-3 text-gray-500 placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-y transition-all duration-200"
          />
        </div>
        {/* Butonlar */}
        <div className="flex justify-end gap-4 mt-6">
          <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-base font-semibold">
            Kaydet
          </Button>
          <Button type="button" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-700 px-8 py-3 rounded-lg text-base font-semibold">
            Vazgeç
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;