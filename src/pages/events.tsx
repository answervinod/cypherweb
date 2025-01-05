import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'conference' | 'hackathon' | 'webinar' | 'meetup' | 'workshop' | 'interview';
  description: string;
  registrationLink: string;
  status: 'upcoming' | 'ongoing' | 'past';
  videoUrl?: string;
  thumbnailUrl: string;
}

const pastEvents: Event[] = [
  {
    id: '1',
    title: 'Cypher Blockchain Alpha TestNet Launch Day 1 - Part 1',
    date: 'December 06, 2023',
    location: 'Virtual',
    type: 'conference',
    description: `Kickoff session of our Alpha TestNet Launch Day, introducing Cypher Blockchain's vision and core features.`,
    registrationLink: '#',
    status: 'past',
    videoUrl: 'https://www.youtube.com/embed/15HKb79xxRE',
    thumbnailUrl: 'https://i.ytimg.com/vi/15HKb79xxRE/hqdefault.jpg'
  },
  {
    id: '2',
    title: 'Cypher Blockchain Alpha TestNet Launch Day 1 - Part 2',
    date: 'December 06, 2023',
    location: 'Virtual',
    type: 'conference',
    description: `Second session of our Alpha TestNet Launch Day, showcasing the platform's capabilities and technical infrastructure.`,
    registrationLink: '#',
    status: 'past',
    videoUrl: 'https://www.youtube.com/embed/xgK9BlRwgVo',
    thumbnailUrl: 'https://img.youtube.com/vi/xgK9BlRwgVo/maxresdefault.jpg'
  },
  {
    id: '3',
    title: 'Cypher Blockchain Alpha TestNet Launch Day 1 - Part 3',
    date: 'December 06, 2023',
    location: 'Virtual',
    type: 'conference',
    description: `Final session of our Alpha TestNet Launch Day, diving deep into technical architecture and future roadmap.`,
    registrationLink: '#',
    status: 'past',
    videoUrl: 'https://www.youtube.com/embed/SmuT2KYWWUk',
    thumbnailUrl: 'https://i.ytimg.com/vi/SmuT2KYWWUk/hqdefault.jpg'
  },
  {
    id: '4',
    title: 'Anuradha from ZeroTo3 at the Launch of Cypher Blockchain Alpha TestNet',
    date: 'December 06, 2023',
    location: 'Virtual',
    type: 'interview',
    description: 'Special interview with Anuradha from ZeroTo3, sharing insights about blockchain technology and Cypher ecosystem.',
    registrationLink: '#',
    status: 'past',
    videoUrl: 'https://www.youtube.com/embed/1MI0mmdRRzQ',
    thumbnailUrl: 'https://img.youtube.com/vi/1MI0mmdRRzQ/maxresdefault.jpg'
  },
  {
    id: '5',
    title: 'Jason from Adlunam at the Launch of Cypher Blockchain Alpha TestNet',
    date: 'December 06, 2023',
    location: 'Virtual',
    type: 'interview',
    description: 'Exclusive interview with Jason from Adlunam discussing security and innovation in blockchain.',
    registrationLink: '#',
    status: 'past',
    videoUrl: 'https://www.youtube.com/embed/iU2F52yWxcE',
    thumbnailUrl: 'https://img.youtube.com/vi/iU2F52yWxcE/maxresdefault.jpg'
  },
  {
    id: '6',
    title: 'Arshita from Biconomy at the Launch of Cypher Blockchain Alpha TestNet',
    date: 'December 06, 2023',
    location: 'Virtual',
    type: 'interview',
    description: 'Engaging discussion with Arshita from Biconomy about blockchain interoperability and user experience.',
    registrationLink: '#',
    status: 'past',
    videoUrl: 'https://www.youtube.com/embed/p52fbN_59L0',
    thumbnailUrl: 'https://img.youtube.com/vi/p52fbN_59L0/maxresdefault.jpg'
  },
  {
    id: '7',
    title: 'Kritika Ravichandran at the Launch of Cypher Blockchain Alpha TestNet',
    date: 'December 06, 2023',
    location: 'Virtual',
    type: 'interview',
    description: 'Insightful conversation with Kritika Ravichandran about blockchain technology and its future implications.',
    registrationLink: '#',
    status: 'past',
    videoUrl: 'https://www.youtube.com/embed/VnPJBmLlK20',
    thumbnailUrl: 'https://img.youtube.com/vi/VnPJBmLlK20/maxresdefault.jpg'
  },
  {
    id: '8',
    title: 'J P from Adlunam at the Launch of Cypher Blockchain Alpha TestNet',
    date: 'December 06, 2023',
    location: 'Virtual',
    type: 'interview',
    description: 'Featured interview with J P from Adlunam discussing blockchain security and ecosystem development.',
    registrationLink: '#',
    status: 'past',
    videoUrl: 'https://www.youtube.com/embed/iLNcMHdo7f0',
    thumbnailUrl: 'https://img.youtube.com/vi/iLNcMHdo7f0/maxresdefault.jpg'
  },
  {
    id: '9',
    title: 'Alpha TestNet Launch Guest Interview',
    date: 'December 06, 2023',
    location: 'Virtual',
    type: 'interview',
    description: 'Special guest interview during the Alpha TestNet Launch, exploring blockchain innovation and future prospects.',
    registrationLink: '#',
    status: 'past',
    videoUrl: 'https://www.youtube.com/embed/oVsQGn-l-T4',
    thumbnailUrl: 'https://img.youtube.com/vi/oVsQGn-l-T4/maxresdefault.jpg'
  }
];

const upcomingEvents: Event[] = [
  {
    id: '3',
    title: 'Cypher Developer Conference 2025',
    date: 'March 15-17, 2025',
    location: 'Virtual & Singapore',
    type: 'conference',
    description: 'Join us for our annual developer conference featuring workshops, keynotes, and networking opportunities.',
    registrationLink: '#',
    status: 'upcoming',
    thumbnailUrl: '/images/events/dev-conf-2025.jpg'
  },
  // ... other upcoming events
];

const Events: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const [thumbnailQualities, setThumbnailQualities] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);

  const getYouTubeThumbnail = (videoId: string) => {
    const qualities = ['maxresdefault', 'hqdefault', 'mqdefault', 'sddefault', 'default'];
    const currentQuality = thumbnailQualities[videoId] || 0;

    const handleImageError = () => {
      if (currentQuality < qualities.length - 1) {
        setThumbnailQualities(prev => ({
          ...prev,
          [videoId]: currentQuality + 1
        }));
      }
    };

    return {
      src: `https://img.youtube.com/vi/${videoId}/${qualities[currentQuality]}.jpg`,
      onError: handleImageError,
      loading: "eager" as const
    };
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Events - Cypher Blockchain</title>
        <meta name="description" content="Explore Cypher Blockchain events and watch highlights from our past conferences" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[42vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-fuchsia-900/90 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
        >
          <source src="/videos/events-hero.mp4" type="video/mp4" />
          {videoError && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-fuchsia-900"></div>
          )}
        </video>
        <div className="relative z-20 text-center text-white px-4 flex flex-col justify-center items-center h-full pt-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cypher Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Join the future of blockchain technology through our global events and community meetups
            </p>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Featured Past Events */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Event Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-video cursor-pointer" onClick={() => event.videoUrl && setSelectedVideo(event.videoUrl)}>
                    {loading && (
                      <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-300 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      </div>
                    )}
                    <Image
                      src={event.thumbnailUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder-event.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Events */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Upcoming Events
            </h2>
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h3>
                <p className="text-gray-600">
                  Stay tuned for exciting upcoming events. Follow us on social media to get the latest updates.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              src={selectedVideo}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Event Video"
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Events; 