import { useEffect, useState, useMemo } from 'react';
import { Star, Users, ArrowUp, Download, Search, ShieldCheck, CheckCircle2, Circle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { episodesData } from './data';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // New States for Expand & Watchlist
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [watchedEpisodes, setWatchedEpisodes] = useState<Set<string>>(new Set());

  const seasons = Array.from({ length: 8 }, (_, i) => i + 1);
  
  // Fasllar premyera yillari
  const seasonYears: Record<number, string> = {
    1: '2011', 2: '2012', 3: '2013', 4: '2014', 5: '2015', 6: '2016', 7: '2017', 8: '2019'
  };

  // 0. Load Watched from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('got_watched');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setWatchedEpisodes(new Set(parsed));
      } catch (e) {
        console.error("Failed to parse watched episodes", e);
      }
    }
  }, []);

  // 1. Loading Screen Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0); // O'tishda scrollni tepaga qaytarish
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSeason = (season: number) => {
    const el = document.getElementById(`season-${season}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // 3. Qidiruv funksiyasi (Search)
  const filteredEpisodes = useMemo(() => {
    if (!searchQuery.trim()) return episodesData;
    const lowerQuery = searchQuery.toLowerCase();
    return episodesData.filter(ep => 
      ep.title.toLowerCase().includes(lowerQuery) || 
      ep.summary.toLowerCase().includes(lowerQuery) ||
      ep.imdb.includes(lowerQuery)
    );
  }, [searchQuery]);

  const visibleSeasons = seasons.filter(season => 
    filteredEpisodes.some(ep => ep.season === season)
  );

  // 4. Toggle Accordion
  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  // 5. Toggle Watched Status
  const toggleWatched = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents accordion toggle
    setWatchedEpisodes(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem('got_watched', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const totalEpisodesCounter = episodesData.length;
  const watchedCount = watchedEpisodes.size;
  const progressPercent = totalEpisodesCounter > 0 ? Math.round((watchedCount / totalEpisodesCounter) * 100) : 0;

  return (
    <>
      {/* Loading Ekran - Securing / Phishing protection vibe */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] bg-[#070707] flex flex-col items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
            
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#d4af37]/40 bg-[#0a0a0a] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)] mb-8">
                <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#d4af37]">
                  <path d="M3 18L5 7L10 12L12 5L14 12L19 7L21 18H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(212,175,55,0.1)" />
                </svg>
              </div>
            </motion.div>
            
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-[#f3e5ab] via-[#d4af37] to-[#aa8628] mb-6 z-10 text-center">
              GAME OF THRONES
            </h1>
            
            <div className="flex items-center gap-2 text-zinc-500 text-xs sm:text-sm uppercase tracking-widest font-bold z-10 px-4 py-2 mt-4">
              <span className="animate-pulse">Qish yaqinlashmoqda...</span>
            </div>
            
            <div className="w-48 sm:w-64 h-1 bg-zinc-900 mt-8 rounded-full overflow-hidden z-10 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
              <motion.div 
                className="h-full bg-gradient-to-r from-transparent via-[#d4af37] to-[#f3e5ab]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-[#070707] font-sans text-neutral-200 selection:bg-[#d4af37]/30 flex flex-col items-center py-10 sm:py-16 px-4 sm:px-8 relative overflow-x-hidden ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        
        {/* Background ambient lighting and Texture */}
        <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.07] mix-blend-lighten"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/10 via-[#070707]/80 to-[#070707] z-10"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/10 blur-[120px] rounded-full z-0"></div>
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-red-900/10 blur-[150px] rounded-full z-0"></div>
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/10 blur-[150px] rounded-full z-0"></div>
        </div>

        <div className="w-full max-w-5xl relative z-10 flex flex-col items-center">
          
          {/* Header Hero Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.95 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16 w-full relative pt-8 sm:pt-16"
          >
            <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#ffedc2] via-[#d4af37] to-[#8a6818] drop-shadow-[0_5px_25px_rgba(212,175,55,0.25)] mb-4 leading-none">
              GAME <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] relative -top-3 sm:-top-6 mx-1 sm:mx-2 opacity-90">OF</span> THRONES
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-[#d4af37] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[11px] font-bold mt-8">
              <div className="h-[1px] w-12 sm:w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37]/20"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] shadow-[0_0_8px_#d4af37]"></div>
              <h2 className="text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Barcha qismlar ro'yxati</h2>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] shadow-[0_0_8px_#d4af37]"></div>
              <div className="h-[1px] w-12 sm:w-32 bg-gradient-to-l from-transparent via-[#d4af37] to-[#d4af37]/20"></div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-stretch justify-center w-full gap-5 sm:gap-6 mb-10 sm:px-8">
            {/* Global Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1"
            >
              <div className="h-full flex flex-col sm:flex-row items-center border border-[#d4af37]/30 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0a0a0a] shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md p-1 transform hover:scale-[1.02] transition-transform duration-300 w-full">
                <div className="flex items-center justify-center sm:justify-start gap-5 px-6 sm:px-8 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r border-[#d4af37]/10 w-full sm:w-auto">
                  <div className="bg-[#f5c518] text-black font-black text-xl sm:text-2xl tracking-tighter px-3.5 py-1.5 rounded-md shadow-[0_0_15px_rgba(245,197,24,0.4)]">
                    IMDb
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold mb-1">Umumiy Reyting</p>
                    <div className="flex items-end gap-1 flex-nowrap whitespace-nowrap">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] fill-[#d4af37] mb-0.5" />
                      <span className="text-2xl sm:text-4xl font-bold tracking-tight leading-none text-[#d4af37]">9.2</span>
                      <span className="text-xs sm:text-sm font-medium text-zinc-500 pb-1">/10</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center sm:justify-start gap-4 px-6 sm:px-8 py-4 sm:py-5 w-full sm:w-auto flex-1">
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold mb-1">Jami Ovozlar</p>
                    <div className="flex items-center gap-2.5">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37]/80" />
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-4xl font-bold tracking-tight leading-none text-[#d4af37]">2.1</span>
                        <span className="text-xs sm:text-sm text-[#d4af37]/80 uppercase tracking-widest font-semibold">Million+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

                           {/* Progress Panel for Watchlist */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="w-full sm:w-[350px] flex flex-col justify-center bg-[#111111]/80 border border-[#d4af37]/30 rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex justify-between w-full mb-3 items-center">
                <span className="text-zinc-400 text-xs font-bold uppercase tracking-[0.2em]">Ko'rilgan Qismlar</span>
                <span className="text-[#d4af37] font-mono text-sm sm:text-base font-bold bg-[#d4af37]/10 px-2 py-0.5 rounded-md border border-[#d4af37]/20">
                  {watchedCount} / {totalEpisodesCounter}
                </span>
              </div>
              <div className="w-full bg-[#0a0a0a] rounded-full h-3 overflow-hidden shadow-inner border border-[#d4af37]/10">
                <motion.div 
                  className="bg-gradient-to-r from-[#8a6818] via-[#d4af37] to-[#f3e5ab] h-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <p className="text-[#d4af37]/70 text-[10px] mt-3 uppercase tracking-widest font-bold text-center">
                {progressPercent === 100 ? "Barcha qismlar ko'rildi! 👑" : `Siz umumiy serialning ${progressPercent}% ini ko'rdingiz`}
              </p>
            </motion.div>
          </div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full mb-8 relative z-30 flex justify-center"
          >
            <div className="relative group w-full sm:w-[500px]">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-[#d4af37] transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Qism nomi, mazmuni yoki reytingini kiriting..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 bg-[#111111]/80 border border-[#d4af37]/20 rounded-2xl text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40 focus:border-transparent transition-all shadow-lg backdrop-blur-md font-medium text-sm sm:text-base"
              />
              {searchQuery && (
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#d4af37]/20 text-[#d4af37] px-2 py-1 rounded">
                    {filteredEpisodes.length} topildi
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Main List Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full bg-[#111111]/90 border border-[#d4af37]/20 rounded-t-3xl rounded-b-2xl shadow-2xl shadow-black/80 flex flex-col relative z-20 overflow-hidden"
          >
            
            {/* STICKY HEADER & NAV */}
            <div className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur-xl border-b border-[#d4af37]/20 rounded-t-3xl shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
              
              {/* Fast Nav - Faqat qidiruv bo'lmaganda ko'rinadi */}
              {!searchQuery && (
                <div className="px-4 py-3 sm:py-4 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <span className="text-[#d4af37]/50 font-cinzel text-xs font-bold mr-1 sm:mr-3 hidden md:block uppercase tracking-widest">Fasllar:</span>
                  {seasons.map(season => (
                    <button
                      key={season}
                      onClick={() => scrollToSeason(season)}
                      className="shrink-0 px-4 py-1.5 rounded-full border border-[#d4af37]/20 text-xs font-bold text-zinc-400 hover:text-[#d4af37] hover:border-[#d4af37]/60 hover:bg-[#d4af37]/10 transition-all cursor-pointer font-cinzel"
                    >
                      S{season}
                    </button>
                  ))}
                </div>
              )}

              {/* Table Headers */}
              <div className={`flex items-center px-4 sm:px-8 py-3 bg-[#0a0a0a]/60 text-[#d4af37]/60 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase ${!searchQuery ? 'border-t border-[#d4af37]/10' : ''}`}>
                <div className="w-10 sm:w-16"></div> {/* Checkbox placeholder */}
                <div className="w-12 sm:w-20 text-center">Qism</div>
                <div className="flex-1 px-2 sm:px-4">Nomi</div>
                <div className="w-20 sm:w-32 text-right pr-2">Reyting</div>
                <div className="w-8"></div> {/* Expander placeholder */}
              </div>
            </div>

            {/* List Content */}
            <div className="flex flex-col pb-6 min-h-[300px]">
              {filteredEpisodes.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center p-16 text-center"
                >
                  <Search className="w-12 h-12 text-[#d4af37]/30 mb-4" />
                  <p className="text-zinc-500 font-medium">Bu so'rov bo'yicha hech qanday qism topilmadi.</p>
                </motion.div>
              ) : (
                visibleSeasons.map((season) => {
                  const seasonEpisodes = filteredEpisodes.filter(ep => ep.season === season);
                  const seasonYear = seasonYears[season] || '201X';
                  
                  return (
                    <div key={season} id={`season-${season}`} className="scroll-mt-40">
                      {/* Season Divider / Metadata */}
                      <div className="bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#111] py-5 px-4 sm:px-8 border-y border-[#d4af37]/20 flex items-center justify-between shadow-[0_5px_15px_rgba(0,0,0,0.8)] z-10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=600')] bg-cover opacity-[0.03] mix-blend-lighten"></div>
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#d4af37] to-transparent opacity-50"></div>
                        <div className="flex items-center gap-4 relative z-10">
                          <span className="font-cinzel text-[#d4af37] font-bold text-xl sm:text-2xl tracking-[0.3em] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                            {season}-FASL
                          </span>
                          <div className="h-5 w-px bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent"></div>
                          <span className="text-[#d4af37]/60 font-mono text-sm tracking-widest">{seasonYear}</span>
                        </div>
                        <div className="text-[10px] sm:text-xs text-[#d4af37]/40 font-bold uppercase tracking-widest hidden sm:block relative z-10">
                          {seasonEpisodes.length} ta epizod
                        </div>
                      </div>
                      
                      {/* Episodes */}
                      {seasonEpisodes.map((episode, idx) => {
                        const isLast = idx === seasonEpisodes.length - 1;
                        const isWatched = watchedEpisodes.has(episode.id);
                        const isExpanded = expandedId === episode.id;

                        return (
                          <div 
                            key={episode.id}
                            onClick={() => toggleExpand(episode.id)}
                            className={`group flex flex-col px-4 sm:px-8 py-3 sm:py-5 hover:bg-gradient-to-r hover:from-[#161616] hover:to-[#111] transition-all duration-300 cursor-pointer ${!isLast ? 'border-b border-zinc-800/80' : ''} ${isExpanded ? 'bg-[#161616] border-l-2 border-l-[#d4af37]' : 'border-l-2 border-l-transparent'}`}
                          >
                            <div className="flex items-center w-full">
                              {/* Watched Toggle */}
                              <div 
                                className="w-10 sm:w-16 flex items-center justify-start shrink-0"
                                onClick={(e) => toggleWatched(episode.id, e)}
                              >
                                {isWatched ? (
                                   <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#d4af37] fill-[#d4af37]/20 hover:scale-110 transition-transform" />
                                ) : (
                                   <Circle className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-600 hover:text-[#d4af37]/60 hover:scale-110 transition-transform" />
                                )}
                              </div>

                              {/* Number */}
                              <div className="w-12 sm:w-20 flex justify-center items-center shrink-0">
                                <span className={`font-cinzel text-3xl sm:text-4xl transition-all duration-300 ${isWatched ? 'text-zinc-600' : 'text-[#d4af37]/80 group-hover:text-[#d4af37] group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]'}`}>
                                  {episode.episode}
                                </span>
                              </div>
                              
                              {/* Info */}
                              <div className="flex-1 px-2 sm:px-4 min-w-0">
                                <h3 className={`text-sm sm:text-lg lg:text-xl font-medium truncate transition-colors drop-shadow-sm leading-tight ${isWatched ? 'text-zinc-500 line-through decoration-zinc-700/50' : 'text-zinc-200 group-hover:text-white'}`}>
                                  {episode.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-1 sm:mt-1.5 text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                                  <span className={`px-1.5 py-0.5 rounded ${isWatched ? 'bg-[#111] text-zinc-600' : 'bg-[#222] text-[#d4af37]/80'}`}>S{episode.season.toString().padStart(2, '0')} E{episode.episode.toString().padStart(2, '0')}</span>
                                  <span className="w-1 h-1 rounded-full bg-[#d4af37]/30 hidden sm:block"></span>
                                  <span className={`truncate hidden sm:block ${isWatched ? 'text-zinc-600' : 'text-[#d4af37]/40'}`}>{isExpanded ? 'Yopish' : 'Batafsil'}</span>
                                </div>
                              </div>
                              
                              {/* Rating & Actions */}
                              <div className="w-20 sm:w-32 flex items-center justify-end gap-2 sm:gap-4 shrink-0 group relative">
                                <div className="flex flex-col items-end justify-center">
                                  <div className="flex items-center gap-1.5 group-hover:scale-105 transition-transform origin-right">
                                    <Star className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWatched ? 'text-zinc-600 fill-zinc-600' : 'text-[#d4af37] fill-[#d4af37] drop-shadow-[0_0_5px_rgba(212,175,55,0.4)]'}`} />
                                    <div className="flex items-baseline gap-0.5">
                                      <span className={`text-lg sm:text-xl font-bold transition-colors ${isWatched ? 'text-zinc-500' : 'text-white group-hover:text-[#d4af37]'}`}>{episode.imdb}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Accordion Chevron */}
                              <div className="w-8 flex justify-end shrink-0">
                                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#d4af37]' : ''}`} />
                              </div>
                            </div>

                            {/* Expanded Content Accordion */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden w-full"
                                >
                                  <div className="pt-4 pb-2 pl-12 sm:pl-36 pr-2 sm:pr-8">
                                    <div className="bg-[#0a0a0a] rounded-xl p-4 sm:p-5 border border-[#d4af37]/10 shadow-inner group-hover:border-[#d4af37]/20 transition-colors">
                                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                                        {episode.summary}
                                      </p>
                                      <div className="flex items-center gap-3">
                                        <a 
                                          href={episode.downloadUrl}
                                          onClick={(e) => e.stopPropagation()}
                                          title="Yuklab olish"
                                          className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold bg-[#d4af37]/10 text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-4 py-2 sm:py-2.5 rounded-lg transition-all border border-[#d4af37]/20 shadow-sm w-full sm:w-auto"
                                        >
                                          <Download className="w-4 h-4" />
                                          <span>Yuklab olish (Tez orada)</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </div>
          </motion.div>

          {/* Footer Info Box */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 mb-10 w-full p-6 border border-[#d4af37]/20 rounded-2xl bg-gradient-to-br from-[#111] to-[#0a0a0a] flex flex-col items-center gap-4 shadow-lg shadow-black/50 text-center relative z-20"
          >
            <div className="flex justify-center -mt-10 mb-2">
              <div className="w-16 h-16 rounded-full border border-[#d4af37]/40 bg-[#0a0a0a] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                {/* Crown Icon Abstract */}
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#d4af37]">
                  <path d="M3 18L5 7L10 12L12 5L14 12L19 7L21 18H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(212,175,55,0.1)" />
                </svg>
              </div>
            </div>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl px-4">
              <strong className="text-[#d4af37] font-medium font-cinzel tracking-wider">Taxtlar O'yini</strong> – HBO tomonidan yaratilgan epik fantastik serial bo'lib, 
              Jorj R. R. Martinning "Muz va olov qo'shig'i" romanlar turkumiga asoslangan.
            </p>
            <span className="text-[#d4af37]/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mt-2 pb-2">
              Barcha ma'lumotlar aniqlashtirilgan
            </span>
          </motion.div>

        </div>

        {/* Floating Scroll-to-Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-[100] p-3 sm:p-4 bg-[#d4af37] text-black rounded-full shadow-[0_5px_20px_rgba(212,175,55,0.4)] hover:bg-yellow-400 hover:scale-110 hover:shadow-[0_5px_25px_rgba(212,175,55,0.6)] focus:outline-none transition-all duration-300 ${
            showScrollTop && !isLoading ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
          }`}
          aria-label="Tepaga qaytish"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
        </button>

      </div>
    </>
  );
}
