import React, { useState } from 'react';
import Button from '../ui/button'; // button bileşeninizin doğru yolunu kontrol edin
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

// EventCard için yeni type tanımlaması
export type EventCardProps = {
  title: string;
  participants: number; // Katılımcı sayısı
  locationType: 'Online' | 'Fiziksel'; // Konum türü (Online veya Fiziksel)
  date: string; // "16 Kasım 2025" gibi
  dayOfWeek: string; // "Çarşamba" gibi
  time: string; // "18:00" gibi
  eventNumber: string; // "0002" gibi
  onJoinClick: () => void; // "Hemen Katıl" butonu için callback
  onDetailsClick: () => void; // "Etkinlik Detayları" butonu için callback (modala açabilir)
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  participants,
  locationType,
  date,
  dayOfWeek,
  time,
  eventNumber,
  onJoinClick,
  onDetailsClick,
}) => {
  // Modal kullanımı mevcut AnnouncmentCard'dan gelebilir, ancak etkinlik kartında direkt butonlar var gibi.
  // Eğer detaylar için bir modal açılacaksa bu kısım korunabilir.
  // Şu anki görselde modal açılmıyor gibi duruyor, bu yüzden bu state ve modal kısmı kaldırılabilir.
  // Ancak detay butonu bir modal açacaksa bu kısmı koruyabiliriz. Varsayılan olarak koruyalım.
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Katılımcı ikonlarını render etmek için yardımcı fonksiyon
  const renderParticipantIcons = (count: number) => {
    const icons = [];
    // Görselde 4 ikon var. Daha fazla katılımcı için '...' eklenebilir veya sınırlanabilir.
    const displayCount = Math.min(count, 4); // Maksimum 4 ikon gösterelim
    for (let i = 0; i < displayCount; i++) {
      icons.push(
        <img
          key={i}
          src="/avatars/defaultAvatar.png" // Katılımcı ikonu için bir placeholder görsel
          alt="Katılımcı"
          className="w-8 h-8 rounded-full border border-neutral-700"
        />
      );
    }
    return icons;
  };

  return (
    <>
      <div className="bg-neutral-900 rounded-xl p-6 shadow-lg flex flex-col items-start w-full">
        <h2 className="font-bold text-white text-3xl mb-4 font-poppins">
          {title}
        </h2>

        {/* Katılımcılar */}
        <div className="flex items-center text-neutral-300 mb-6">
          <div className="flex -space-x-2 mr-2"> {/* İkonları üst üste bindirmek için */}
            {renderParticipantIcons(participants)}
          </div>
          <span className="font-poppins text-lg">{participants} Katılımcı</span>
        </div>

        {/* Butonlar */}
        <div className="flex space-x-3 mb-6">
          <Button variant="primary" onClick={onJoinClick}>
            Hemen Katıl
          </Button>
          <Button variant="outline" onClick={onDetailsClick}> {/* onDetailsClick burada tetiklenebilir */}
            Etkinlik Detayları
          </Button>
        </div>

        {/* Konum, Tarih, Saat, No */}
        <div className="mt-auto pt-4 border-t border-neutral-800 w-full"> {/* Üst çizgi için border-t */}
          <div className="flex items-center gap-2 text-primary text-base mb-2 font-poppins">
            <Icon icon="hugeicons:location-02" className='text-xl'/> {/* Konum ikonu */}
            <span>{locationType}</span>
          </div>
          <div className="text-neutral-400 text-base font-poppins">
            <span className="font-semibold">Tarih:</span> {date}{" "}
            <span className="ml-2 font-semibold">Gün:</span> {dayOfWeek}{" "}
            <span className="ml-2 font-semibold">Saat:</span> {time}{" "}
            <span className="ml-2 font-semibold">No:</span> {eventNumber}
          </div>
        </div>
      </div>

      {/* Detay modalı, eğer onDetailsClick bir modal açacaksa bu kısım kullanılabilir */}
      <AnimatePresence>
        {showDetailsModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetailsModal(false)} // Dışarıya tıklayınca kapanması için
          >
            <motion.div
              className="bg-neutral-900 rounded-2xl p-6 max-w-lg w-full border border-neutral-800 shadow-lg relative"
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()} // Moda içeriğine tıklayınca kapanmaması için
            >
              <button
                className="absolute top-4 right-4 text-white text-xl font-bold cursor-pointer hover:text-primary transition-colors"
                onClick={() => setShowDetailsModal(false)}
                aria-label="Kapat"
              >
                <Icon icon="mdi:close" />
              </button>
              <h2 className="font-bold text-white text-2xl md:text-3xl mb-4 leading-snug">
                {title} Detayları
              </h2>
              {/* Buraya etkinlik detay içeriği eklenebilir */}
              <p className="font-poppins text-neutral-300 mb-4">
                Bu etkinliğin detaylı açıklaması burada yer alacaktır.
                Katılımcılar, gündem, konuşmacılar ve diğer önemli bilgiler.
              </p>
              <div className="flex items-center gap-2 font-poppins text-neutral-300 text-base mb-2">
                <Icon icon="hugeicons:location-02" className='text-primary text-xl'/>
                <span>Konum: {locationType}</span>
              </div>
              <div className="font-poppins text-neutral-300 text-base">
                <span>Tarih: {date} ({dayOfWeek})</span>
                <span className="ml-4">Saat: {time}</span>
                <span className="ml-4">No: {eventNumber}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventCard;