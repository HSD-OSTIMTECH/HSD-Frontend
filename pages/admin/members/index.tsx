import React, { useState } from "react";
import Button from '@/components/ui/button';
import { Icon } from '@iconify/react';

// Dummy üyeler
const dummyMembers = [
  { id: 1, name: 'Ali Yılmaz', email: 'ali@mail.com', department: 'Yazılım', grade: '3. Sınıf' },
  { id: 2, name: 'Ayşe Demir', email: 'ayse@mail.com', department: 'Pazarlama', grade: '2. Sınıf' },
  { id: 3, name: 'Mehmet Kaya', email: 'mehmet@mail.com', department: 'Tasarım', grade: '4. Sınıf' },
];

export default function Members() {
  const [members, setMembers] = useState(dummyMembers);
  const [editModal, setEditModal] = useState<{ open: boolean; member: typeof dummyMembers[0] | null }>({ open: false, member: null });
  const [editForm, setEditForm] = useState({ name: '', email: '', department: '', grade: '' });

  // Open edit modal
  const handleEdit = (member: typeof dummyMembers[0]) => {
    setEditForm({ name: member.name, email: member.email, department: member.department, grade: member.grade });
    setEditModal({ open: true, member });
  };

  // Save edit
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMembers(prev => prev.map(m => m.id === editModal.member?.id ? { ...m, ...editForm } : m));
    setEditModal({ open: false, member: null });
  };

  // Delete member
  const handleDelete = (id: number) => {
    setMembers(prev => prev.filter(m => m.id !== id));
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-white mb-8">Üyeler Tablosu</h1>
      <div className="overflow-x-auto bg-neutral-950 rounded-xl shadow-lg border border-neutral-800 p-6">
        <table className="min-w-full">
          <thead>
            <tr className="bg-neutral-900">
              <th className="px-4 py-2 text-left text-white">#</th>
              <th className="px-4 py-2 text-left text-white">Ad Soyad</th>
              <th className="px-4 py-2 text-left text-white">E-posta</th>
              <th className="px-4 py-2 text-left text-white">Bölüm</th>
              <th className="px-4 py-2 text-left text-white">Sınıf</th>
              <th className="px-4 py-2 text-left text-white">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, idx) => (
              <tr key={m.id} className="border-t border-neutral-800 hover:bg-neutral-900/60 transition-colors">
                <td className="px-4 py-2 text-neutral-400 font-semibold">{idx + 1}</td>
                <td className="px-4 py-2 text-white">{m.name}</td>
                <td className="px-4 py-2 text-white">{m.email}</td>
                <td className="px-4 py-2 text-white">{m.department}</td>
                <td className="px-4 py-2 text-white">{m.grade}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleEdit(m)}
                    className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-600"
                    title="Düzenle"
                  >
                    <Icon icon="mdi:pencil" width={20} height={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(m.id)}
                    className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-red-700"
                    title="Sil"
                  >
                    <Icon icon="mdi:delete" width={20} height={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Edit Modal */}
      {editModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={e => { if (e.target === e.currentTarget) setEditModal({ open: false, member: null }); }}>
          <div className="bg-black rounded-xl p-8 w-full max-w-md relative border border-neutral-800" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setEditModal({ open: false, member: null })}
              className="absolute top-4 right-4 text-white hover:text-primary transition cursor-pointer text-2xl"
            >
              <Icon icon="mdi:close" />
            </button>
            <h2 className="text-xl font-bold text-white mb-4">Üye Bilgilerini Düzenle</h2>
            <form onSubmit={handleEditSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm text-gray-300 font-medium mb-2">Ad Soyad</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 font-medium mb-2">E-posta</label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={e => setEditForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 font-medium mb-2">Bölüm</label>
                <input
                  type="text"
                  value={editForm.department}
                  onChange={e => setEditForm(f => ({ ...f, department: e.target.value }))}
                  className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 font-medium mb-2">Sınıf</label>
                <input
                  type="text"
                  value={editForm.grade}
                  onChange={e => setEditForm(f => ({ ...f, grade: e.target.value }))}
                  className="w-full bg-black border border-gray-700 rounded-full px-5 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="flex gap-4 justify-end">
                <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-base font-semibold">Kaydet</Button>
                <Button type="button" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-700 px-8 py-3 rounded-lg text-base font-semibold" onClick={() => setEditModal({ open: false, member: null })}>İptal</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
