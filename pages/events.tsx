import React from 'react';
import Calendar from '@/components/ui/calendar';
import EventCard from '@/components/shared/eventCard'; // EventCard bileşeninizin yolu
import Button from '@/components/ui/button'; // Button bileşeninizin yolu (bu satırı eklediğinizden emin olun)
import { Icon } from '@iconify/react'; // Dropdown ikonları için

// EventCard'ın beklediği proplara göre etkinlik verilerini güncelliyoruz
const etkinlikler = [
  {
    title: '2025 HSD OSTIMTECH HACKATHON',
    participants: 36,
    locationType: 'Online' as const,
    date: '16 Kasım 2025',
    dayOfWeek: 'Çarşamba',
    time: '18:00',
    eventNumber: '0002',
  },
  {
    title: '2025 HSD YAPAY ZEKA ZİRVESİ',
    participants: 36,
    locationType: 'Fiziksel' as const,
    date: '01 Mart 2025',
    dayOfWeek: 'Cuma',
    time: '09:00',
    eventNumber: '0003',
  },
  {
    title: '2025 HSD YAPAY ZEKA ZİRVESİ',
    participants: 36,
    locationType: 'Fiziksel' as const,
    date: '01 Mart 2025',
    dayOfWeek: 'Cuma',
    time: '09:00',
    eventNumber: '0003',
  },
  {
    title: '2025 HSD YAPAY ZEKA ZİRVESİ',
    participants: 36,
    locationType: 'Fiziksel' as const,
    date: '01 Mart 2025',
    dayOfWeek: 'Cuma',
    time: '09:00',
    eventNumber: '0003',
  },
];

const EventsPage = () => {
  const handleJoinClick = (eventName: string) => {
    console.log(`${eventName} etkinliğine "Hemen Katıl" tıklandı.`);
  };

  const handleDetailsClick = (eventName: string) => {
    console.log(`${eventName} etkinliği için "Etkinlik Detayları" tıklandı.`);
  };

  return (
      <div className="min-h-screen relative  text-white">
      <div className="absolute top-96 left-4 w-24 h-24 bg-primary rounded-full -z-10 blur-3xl" />
      <div className="absolute -bottom-24 right-16 w-24 h-24 bg-primary rounded-full -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:space-x-10 mb-16">
          <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <Calendar />
          </div>

          {/* HSD Hackathon bilgisi */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-advent-pro">
              HSD Hackathon
            </h1>
            <p className="text-neutral-300 text-xl mb-8 max-w-lg font-poppins">
              Türkiye'de öğrencilerin, öğretmenlerin, ebeveynlerin ve çocukların (4 kategori) deprem hakkında bilinçlenmesi için oluşturulmuş web sitesi
            </p>
            <div className="flex space-x-4">
              {/* Buradaki butonları sizin Button bileşeniniz ile değiştiriyoruz */}
              <Button variant="primary" href="/events/hsd-hackathon"> {/* "Etkinliği İncele" butonu */}
                Etkinliği İncele
              </Button>
              <Button variant="outline" href="/events"> {/* "Bütün Etkinlikleri Gör" butonu */}
                Bütün Etkinlikleri Gör
              </Button>
            </div>
          </div>
        </div>

        {/* Etkinlikler başlığı ve filtreleme */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0 font-advent-pro">Etkinlikler</h2>
            <div className="flex space-x-4">
                {/* Online Dropdown */}
                <div className="relative inline-flex items-center rounded-lg bg-neutral-800 border border-neutral-700 text-white font-poppins cursor-pointer">
                    <select className="bg-transparent py-2 pl-4 pr-10 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Online</option>
                        <option>Fiziksel</option>
                    </select>
                    <Icon icon="mdi:chevron-down" className="absolute right-3 text-xl pointer-events-none" />
                </div>

                {/* Tarih Dropdown */}
                <div className="relative inline-flex items-center rounded-lg bg-neutral-800 border border-neutral-700 text-white font-poppins cursor-pointer">
                    <select className="bg-transparent py-2 pl-4 pr-10 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>04 / 06 / 2025</option>
                        <option>16 / 11 / 2025</option>
                        <option>01 / 03 / 2025</option>
                        <option>10 / 04 / 2025</option>
                    </select>
                    <Icon icon="mdi:chevron-down" className="absolute right-3 text-xl pointer-events-none" />
                </div>

                {/* Hackathon Dropdown */}
                <div className="relative inline-flex items-center rounded-lg bg-neutral-800 border border-neutral-700 text-white font-poppins cursor-pointer">
                    <select className="bg-transparent py-2 pl-4 pr-10 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Hackathon</option>
                        <option>Zirve</option>
                        <option>Buluşma</option>
                    </select>
                    <Icon icon="mdi:chevron-down" className="absolute right-3 text-xl pointer-events-none" />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {etkinlikler.map((etkinlik, idx) => (
            <EventCard
              key={idx}
              title={etkinlik.title}
              participants={etkinlik.participants}
              locationType={etkinlik.locationType}
              date={etkinlik.date}
              dayOfWeek={etkinlik.dayOfWeek}
              time={etkinlik.time}
              eventNumber={etkinlik.eventNumber}
              onJoinClick={() => handleJoinClick(etkinlik.title)}
              onDetailsClick={() => handleDetailsClick(etkinlik.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;