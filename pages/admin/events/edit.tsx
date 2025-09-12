import React, { useState, useEffect } from 'react';
import EventCard from '@/components/shared/eventCard';
import SelectBox from '@/components/ui/selectBox';
import Button from '@/components/ui/button';
import { Icon } from '@iconify/react';

type Event = {
  id: number;
  title: string;
  description: string;
  posterUrl?: string;
  category: string;
  startDate: string; 
  endDate?: string;
  timeRange: string;
  responsible: string;
};

const initialDummyEvents: Event[] = [
  {
    id: 1,
    title: 'Web Geliştirme Temelleri Semineri',
    description: 'Yeni başlayanlar için web geliştirmenin temelleri ve modern teknolojiler.',
    posterUrl: '/images/defaultEventPoster.png',
    category: 'seminer',
    startDate: '2025 / 08 / 15',
    endDate: '2025 / 08 / 15',
    timeRange: '14:00 - 17:00',
    responsible: 'Ayşe Yılmaz',
  },
  {
    id: 2,
    title: 'Mobil Uygulama Tasarımı Workshop',
    description: 'Figma ile etkili mobil uygulama arayüzleri tasarlama teknikleri.',
    posterUrl: '/images/defaultEventPoster.png',
    category: 'workshop',
    startDate: '2025 / 09 / 01',
    endDate: '2025 / 09 / 02',
    timeRange: '09:00 - 16:00',
    responsible: 'Mehmet Demir',
  },
  {
    id: 3,
    title: 'Yapay Zeka Konferansı 2025',
    description: 'Yapay zeka alanındaki son gelişmeler ve endüstriyel uygulamalar.',
    posterUrl: '/images/defaultEventPoster.png',
    category: 'konferans',
    startDate: '2025 / 10 / 20',
    endDate: '2025 / 10 / 22',
    timeRange: 'Tüm Gün',
    responsible: 'Zeynep Kaya',
  },
];


const categoryOptions = [
  { label: 'Tümü', value: '' },
  { label: 'Seminer', value: 'seminer' },
  { label: 'Konferans', value: 'konferans' },
  { label: 'Workshop', value: 'workshop' },
  { label: 'Eğitim', value: 'eğitim' },
  { label: 'Diğer', value: 'diğer' },
];

type EditEventData = {
  title: string;
  description: string;
  category: string;
  startDate: string;
  endDate: string;
  timeRange: string;
  responsible: string;
};

const EventEdit: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Modal içeriği için form state'i
  const [editData, setEditData] = useState<EditEventData>({
    title: '',
    description: '',
    category: '',
    startDate: '',
    endDate: '',
    timeRange: '',
    responsible: '',
  });

  // Etkinlik verilerini çeken useEffect
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true); // Yüklemeye başlarken loading'i true yap
        setError(null); // Önceki hataları temizle

        // **GERÇEK API ÇAĞRISI BURAYA GELECEK**
        // Örnek:
        // const response = await fetch('/api/events');
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data: Event[] = await response.json();
        // setEvents(data);

        // Şimdilik dummy veriyi 1 saniye gecikmeyle kullanmaya devam edelim
        // Bu, yükleme durumunu simüle etmemizi sağlar.
        await new Promise(resolve => setTimeout(resolve, 1000));
        setEvents(initialDummyEvents); // Dummy veriyi state'e set et

      } catch (err: any) {
        console.error("Etkinlikler yüklenirken bir hata oluştu:", err);
        setError(err.message || 'Etkinlikler yüklenemedi.');
      } finally {
        setLoading(false); // Yükleme tamamlandığında loading'i false yap
      }
    };

    fetchEvents();
  }, []); // Bağımlılık dizisi boş, bu sayede bileşen ilk yüklendiğinde bir kez çalışır

  // Filtrelenmiş etkinlikler (artık 'events' state'ini kullanıyor)
  const filteredEvents = events.filter(
    (e: Event) =>
      (selectedCategory === '' || e.category === selectedCategory) &&
      (search === '' || e.title.toLowerCase().includes(search.toLowerCase()))
  );

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setEditData({
      title: event.title,
      description: event.description,
      category: event.category,
      startDate: event.startDate,
      endDate: event.endDate || '',
      timeRange: event.timeRange,
      responsible: event.responsible,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const handleEditChange = (field: keyof EditEventData, value: string) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedEvent) return; // Eğer seçili bir etkinlik yoksa işlem yapma

    try {
      // **GÜNCELLEME İŞLEMİ İÇİN GERÇEK API ÇAĞRISI BURAYA GELECEK**
      // Örnek:
      // const response = await fetch(`/api/events/${selectedEvent.id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(editData),
      // });
      //
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      console.log('Etkinlik güncellendi:', selectedEvent.id, editData);

      // Başarılı güncelleme sonrası events state'ini güncelle
      setEvents(prevEvents =>
        prevEvents.map(evt =>
          evt.id === selectedEvent.id ? { ...evt, ...editData } : evt
        )
      );

      closeModal();
    } catch (err: any) {
      console.error("Etkinlik güncellenirken bir hata oluştu:", err);
      // Kullanıcıya hata mesajı gösterebilirsiniz
      alert(`Güncelleme hatası: ${err.message || 'Bilinmeyen bir hata oluştu.'}`);
    }
  };

  const handleDelete = async () => {
    if (!selectedEvent) return; // Eğer seçili bir etkinlik yoksa işlem yapma

    if (!window.confirm(`"${selectedEvent.title}" etkinliğini silmek istediğinizden emin misiniz?`)) {
      return; // Kullanıcı iptal ettiyse geri dön
    }

    try {
      // **SİLME İŞLEMİ İÇİN GERÇEK API ÇAĞRISI BURAYA GELECEK**
      // Örnek:
      // const response = await fetch(`/api/events/${selectedEvent.id}`, {
      //   method: 'DELETE',
      // });
      //
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      console.log('Etkinlik silindi:', selectedEvent.id);

      // Başarılı silme sonrası events state'ini güncelle
      setEvents(prevEvents =>
        prevEvents.filter(evt => evt.id !== selectedEvent.id)
      );

      closeModal();
    } catch (err: any) {
      console.error("Etkinlik silinirken bir hata oluştu:", err);
      // Kullanıcıya hata mesajı gösterebilirsiniz
      alert(`Silme hatası: ${err.message || 'Bilinmeyen bir hata oluştu.'}`);
    }
  };

  // Yükleme ve Hata Durumları
  if (loading) return <div className="text-white text-center py-10 text-lg">Yükleniyor...</div>;
  if (error) return <div className="text-red-500 text-center py-10 text-lg">Hata: {error}</div>;


  return (
    <div className="min-h-screen p-8 bg-primary-bg text-text-default">

      {/* Arama ve Filtre Alanı */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        <input
          type="text"
          placeholder="Etkinlik Ara"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-input-bg border border-border-color rounded-full px-6 py-2.5 text-text-default placeholder:text-text-placeholder focus:outline-none focus:border-primary-accent max-w-lg"
        />
        <div className="flex gap-2 items-center">
          <SelectBox
            options={categoryOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
            className="w-full md:w-auto min-w-[200px] bg-input-bg border border-border-color rounded-full text-text-default focus:outline-none focus:border-primary-accent"
          />
          <Button type="button" variant="outline" className="ml-2">Filtrele</Button>
        </div>
      </div>

      {/* Etkinlik Kartları Listesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => openModal(event)}
              className="cursor-pointer bg-secondary-bg border border-border-color rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02] flex flex-col gap-3"
            >
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                {/* Katılımcı avatarları */}
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={'/avatars/defaultAvatar.png'}
                      alt="Katılımcı Avatarı"
                      className="w-8 h-8 rounded-full border-2 border-primary-bg object-cover bg-black"
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="text-text-light text-base ml-2">36 Katılımcı</span>
              </div>
              <div className="flex gap-2 mb-2">
                <Button type="button" className="bg-primary-accent text-white font-semibold px-4 py-2 rounded-md">Hemen Katıl</Button>
                <Button type="button" variant="outline" className="px-4 py-2 rounded-md">Etkinlik Detayları</Button>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <Icon icon="mdi:map-marker" className="text-red-500 text-xl" />
                <span className="text-text-light text-base">Online</span>
              </div>
              <div className="text-text-light text-sm">
                Tarih: <span className="font-semibold text-white">{event.startDate.replace(/\s/g, '')}</span>
                {event.endDate && event.endDate !== event.startDate && (
                  <> - <span className="font-semibold text-white">{event.endDate.replace(/\s/g, '')}</span></>
                )}
                {' '}Gün: <span className="font-semibold text-white">Çarşamba</span>
                {' '}Saat: <span className="font-semibold text-white">{event.timeRange}</span>
                {' '}No: <span className="font-semibold text-white">0002</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-text-light text-lg col-span-1 sm:col-span-2 lg:col-span-3 text-center py-10">Hiç etkinlik bulunamadı.</p>
        )}
      </div>
      {/* Modal - Etkinlik Düzenleme/Silme */}
      {modalOpen && selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className="bg-secondary-bg rounded-xl p-8 w-full max-w-lg relative border border-border-color shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Kapatma Butonu */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-text-light hover:text-primary-accent transition-colors cursor-pointer text-3xl"
            >
              <Icon icon="mdi:close" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6">
              Etkinliği Düzenle
            </h2>
            <form onSubmit={handleEditSubmit}>
              {/* Etkinlik Adı */}
              <div className="mb-4">
                <label className="block text-sm text-text-default font-medium mb-2">
                  Etkinlik Adı
                </label>
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) => handleEditChange("title", e.target.value)}
                  className="w-full bg-input-bg border border-border-color rounded-full px-4 py-2.5 text-text-default placeholder:text-text-placeholder focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                />
              </div>
              {/* Kategori */}
              <div className="mb-4">
                <label className="block text-sm text-text-default font-medium mb-2">
                  Kategori
                </label>
                <select
                  value={editData.category}
                  onChange={e => handleEditChange("category", e.target.value)}
                  className="w-full bg-input-bg border border-border-color rounded-full px-4 py-2.5 text-text-default focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                >
                  {categoryOptions.slice(1).map(opt => (
                    <option key={opt.value} value={opt.value} className="bg-input-bg text-text-default">{opt.label}</option>
                  ))}
                </select>
              </div>
              {/* Başlangıç Tarihi */}
              <div className="mb-4">
                <label className="block text-sm text-text-default font-medium mb-2">
                  Başlangıç Tarihi
                </label>
                <input
                  type="text"
                  placeholder="GG / AA / YYYY"
                  value={editData.startDate}
                  onChange={(e) => handleEditChange("startDate", e.target.value)}
                  className="w-full bg-input-bg border border-border-color rounded-full px-4 py-2.5 text-text-default placeholder:text-text-placeholder focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                />
              </div>
              {/* Bitiş Tarihi (Opsiyonel) */}
              <div className="mb-4">
                <label className="block text-sm text-text-default font-medium mb-2">
                  Bitiş Tarihi (Opsiyonel)
                </label>
                <input
                  type="text"
                  placeholder="GG / AA / YYYY"
                  value={editData.endDate}
                  onChange={(e) => handleEditChange("endDate", e.target.value)}
                  className="w-full bg-input-bg border border-border-color rounded-full px-4 py-2.5 text-text-default placeholder:text-text-placeholder focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                />
              </div>
              {/* Saat Aralığı ya da Başlangıç Saati */}
              <div className="mb-4">
                <label className="block text-sm text-text-default font-medium mb-2">
                  Saat Aralığı ya da Başlangıç Saati
                </label>
                <input
                  type="text"
                  placeholder="Örn: 18:00 - 19:00"
                  value={editData.timeRange}
                  onChange={(e) => handleEditChange("timeRange", e.target.value)}
                  className="w-full bg-input-bg border border-border-color rounded-full px-4 py-2.5 text-text-default placeholder:text-text-placeholder focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                />
              </div>
              {/* Etkinlik Sorumlusu */}
              <div className="mb-6">
                <label className="block text-sm text-text-default font-medium mb-2">
                  Etkinlik Sorumlusu
                </label>
                <input
                  type="text"
                  placeholder="İsim Soyisim"
                  value={editData.responsible}
                  onChange={(e) => handleEditChange("responsible", e.target.value)}
                  className="w-full bg-input-bg border border-border-color rounded-full px-4 py-2.5 text-text-default placeholder:text-text-placeholder focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                />
              </div>
              {/* Etkinlik Açıklaması */}
              <div className="mb-6">
                <label className="block text-sm text-text-default font-medium mb-2">
                  Etkinlik Açıklaması
                </label>
                <textarea
                  rows={4}
                  value={editData.description}
                  onChange={(e) => handleEditChange("description", e.target.value)}
                  className="w-full bg-input-bg border border-border-color rounded-lg px-4 py-2.5 text-text-default placeholder:text-text-placeholder focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent resize-y transition-all duration-200"
                />
              </div>
              <div className="flex gap-4 justify-end mt-6">
                <Button type="submit">Kaydet</Button>
                <Button type="button" variant="outline" onClick={handleDelete}>
                  Sil
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventEdit;