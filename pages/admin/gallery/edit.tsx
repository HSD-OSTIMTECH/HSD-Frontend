import React, { useState } from "react";
import Button from "@/components/ui/button";
import SelectBox from "@/components/ui/selectBox";
import { Icon } from '@iconify/react';

// Dummy data for gallery info and existing photos
const initialGallery = {
  title: "Yaz Kampı 2025",
  description: "Kampımızdan en güzel anlar",
  date: "2025-07-20",
  category: "kamp",
};
const initialPhotos = [
  { id: 1, url: "/images/photo1.jpg" },
  { id: 2, url: "/images/photo2.jpg" },
  { id: 3, url: "/images/photo3.jpg" },
];

export default function EditGallery() {
  const [title, setTitle] = useState(initialGallery.title);
  const [description, setDescription] = useState(initialGallery.description);
  const [date, setDate] = useState(initialGallery.date);
  const [category, setCategory] = useState(initialGallery.category);
  const [photos, setPhotos] = useState(initialPhotos);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editPhoto, setEditPhoto] = useState<{ id: number, url: string } | null>(null);
  const [image, setImage] = useState<File | null>(null);

  // Open edit modal for photo
  const handleEditPhoto = (photo: { id: number, url: string }) => {
    setEditPhoto(photo);
    setEditModalOpen(true);
  };

  // Dummy save for modal
  const handleSavePhotoEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditModalOpen(false);
  };

  // Remove photo from list
  const handleDelete = (id: number) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  // Handle new file selection in modal
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-black p-12 rounded-2xl shadow-2xl flex flex-col gap-10">
        <h2 className="text-2xl font-bold text-white mb-2">Galeri Fotoğraflarını Düzenle</h2>
        {/* Galeri Bilgileri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div>
            <label className="block text-sm text-gray-300 font-medium mb-2">Başlık</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              placeholder="Galeri başlığı"
              required
            />
          </div>
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
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-300 font-medium mb-2">Açıklama</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-xl px-5 py-3 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              rows={3}
              placeholder="Galeri açıklaması"
            />
          </div>
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
        </div>
        {/* Fotoğraf Listesi */}
        <div>
          <h3 className="text-lg text-gray-300 mb-4">Mevcut Fotoğraflar</h3>
          <div className="flex flex-wrap gap-6">
            {photos.map(photo => (
              <div key={photo.id} className="relative w-32 h-32 rounded-xl overflow-hidden bg-gray-900 border border-gray-700 flex items-center justify-center">
                <img src={photo.url} alt="Galeri" className="object-cover w-full h-full" />
                <button
                  type="button"
                  onClick={() => handleEditPhoto(photo)}
                  className="absolute top-2 left-2 bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-600"
                  title="Düzenle"
                >
                  <Icon icon="mdi:pencil" width={22} height={22} />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(photo.id)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-red-700"
                  title="Sil"
                >
                  &times;
                </button>
              </div>
            ))}
            {photos.length === 0 && <span className="text-gray-500">Hiç fotoğraf yok.</span>}
          </div>
        </div>
        {/* Edit Modal */}
        {editModalOpen && editPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg w-full max-w-md font-poppins relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
                onClick={() => setEditModalOpen(false)}
                aria-label="Kapat"
              >
                ×
              </button>
              <h3 className="text-xl font-bold text-white mb-6">Fotoğrafı Düzenle</h3>
              <form onSubmit={handleSavePhotoEdit} className="flex flex-col gap-6">
                <div className="w-full flex justify-center">
                  <img src={editPhoto.url} alt="Edit" className="object-cover w-40 h-40 rounded-xl border border-gray-700" />
                </div>
                {/* Fotoğrafı güncelle (yeni dosya seç) */}
                <div>
                  <label className="block text-sm text-gray-300 font-medium mb-2">Yeni Fotoğraf Yükle</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                  />
                </div>
                <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-base font-semibold">Kaydet</Button>
              </form>
            </div>
          </div>
        )}
        {/* Butonlar */}
        <div className="flex justify-end gap-4 mt-6">
          <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-base font-semibold">Güncelle</Button>
          <Button type="button" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-700 px-8 py-3 rounded-lg text-base font-semibold">İptal</Button>
        </div>
      </div>
    </div>
  );
}
