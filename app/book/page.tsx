import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Clock, Star, Heart, Share2, Info, Sparkles } from 'lucide-react';

export default function BookDetailsPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col antialiased selection:bg-[#4A0001] selection:text-white">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/5">
          <div className="max-w-[1600px] mx-auto px-12 h-24 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Sparkles className="text-[#4A0001] w-5 h-5 font-thin group-hover:rotate-180 transition-transform duration-1000" />
              <h1 className="text-white text-lg font-bold tracking-[0.4em] uppercase italic">
                EROTIXXXS
              </h1>
            </Link>
          </div>
        </header>

        <main className="flex-1 flex justify-center py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1280px] w-full flex flex-col gap-16">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
              <div className="w-full md:w-[320px] lg:w-[380px] flex-shrink-0 relative group perspective-1000">
                <div className="aspect-[2/3] w-full rounded-sm overflow-hidden border border-neutral-800 relative z-10 transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                  <Image 
                    alt="Desejos Proibidos Book Cover" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 grayscale-[20%]" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB76PMeCOrsbrAM0v-Wta9vEyEObtaGpw082bEHn_vXL6KvaMD-CRq9tFEtntkXvv06H18UmRmOnjX47ssetYVxw7uXyYYJmJxYlz99Hl1Oe5chXFmn3X-wEMFRlY7Cf95cFHPLz7sUAuP-JNG0TTuLDb8EnqjBrkj6-pU8bOinJ98gJ32QIIwv-tQMz7vQity831RrCmCcqRN1CdFFTgcElcqbZRLXGaJXktMrzDFrAg8EQlLv8jZOy7IL_bzv6GF87kT8spNV_oY"
                    fill
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="absolute inset-0 bg-[#4A0001]/10 blur-[100px] -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              </div>
              
              <div className="flex flex-col flex-1 pt-4">
                <div className="flex flex-col gap-2 mb-8">
                  <h3 className="text-[#4A0001] font-medium text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 mb-2">
                    <span className="w-6 h-[0.5px] bg-[#4A0001] block"></span> Romance Erótico
                  </h3>
                  <h1 className="serif-heading text-5xl md:text-6xl lg:text-7xl text-white leading-[1] tracking-tight italic">
                    Desejos <span className="not-italic font-light">Proibidos</span>
                  </h1>
                  <p className="text-lg text-neutral-400 mt-4 font-light tracking-wide">Elena V. Blackwood</p>
                </div>
                
                <div className="flex flex-wrap gap-10 mb-10 border-y border-neutral-900 py-6">
                  <div className="flex items-center gap-4 group">
                    <BookOpen className="text-neutral-500 w-6 h-6 font-thin group-hover:text-white transition-colors" />
                    <div className="flex flex-col">
                      <span className="text-white font-light text-sm">340</span>
                      <span className="text-neutral-600 text-[10px] uppercase tracking-wider">Páginas</span>
                    </div>
                  </div>
                  <div className="w-[0.5px] h-8 bg-neutral-900"></div>
                  <div className="flex items-center gap-4 group">
                    <Clock className="text-neutral-500 w-6 h-6 font-thin group-hover:text-white transition-colors" />
                    <div className="flex flex-col">
                      <span className="text-white font-light text-sm">4h 30m</span>
                      <span className="text-neutral-600 text-[10px] uppercase tracking-wider">Tempo</span>
                    </div>
                  </div>
                  <div className="w-[0.5px] h-8 bg-neutral-900"></div>
                  <div className="flex items-center gap-4 group">
                    <Star className="text-neutral-500 w-6 h-6 font-thin group-hover:text-white transition-colors" />
                    <div className="flex flex-col">
                      <span className="text-white font-light text-sm">4.8</span>
                      <span className="text-neutral-600 text-[10px] uppercase tracking-wider">Avaliação</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-12 relative max-w-2xl">
                  <p className="text-neutral-300 text-lg leading-relaxed font-light tracking-wide text-justify">
                    <span className="text-4xl float-left mr-2 mt-[-10px] text-neutral-600 serif-heading">E</span>m uma sociedade onde a repressão é a norma, Isabella descobre um clube secreto onde as fantasias mais obscuras ganham vida. Entre bailes de máscaras e encontros clandestinos, ela deve escolher entre a segurança de sua vida monótona e a perigosa atração de um estranho misterioso. Uma história de paixão avassaladora e segredos que podem destruir reputações.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-6 mt-auto items-center">
                  <Link href="/reader" className="velvet-button px-16 py-6 text-[11px] flex-1 sm:flex-none flex items-center justify-center">
                    Ler Agora
                  </Link>
                  <button className="flex-1 sm:flex-none min-w-[160px] h-12 border border-neutral-800 hover:border-white text-neutral-400 hover:text-white text-xs uppercase tracking-[0.15em] bg-transparent transition-all duration-300">
                    Comprar Livro
                  </button>
                  <div className="flex gap-4 ml-2">
                    <button className="w-12 h-12 rounded-full border border-neutral-800 hover:border-[#4A0001]/50 hover:text-[#4A0001] text-neutral-500 flex items-center justify-center transition-all group">
                      <Heart className="w-5 h-5 font-thin group-hover:fill-current" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-neutral-800 hover:border-white text-neutral-500 hover:text-white flex items-center justify-center transition-all">
                      <Share2 className="w-5 h-5 font-thin" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-neutral-900 pt-16">
              <div className="lg:col-span-8">
                <h2 className="text-xl font-light text-white mb-10 tracking-widest uppercase flex items-center gap-3">
                  <Info className="text-[#4A0001] w-6 h-6 font-thin" />
                  Ficha Técnica
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
                  <div className="flex justify-between items-end border-b border-neutral-900 pb-3 group hover:border-neutral-700 transition-colors">
                    <span className="text-neutral-500 text-xs uppercase tracking-wider font-light">Autor</span>
                    <span className="text-white text-sm font-light">Elena V. Blackwood</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-neutral-900 pb-3 group hover:border-neutral-700 transition-colors">
                    <span className="text-neutral-500 text-xs uppercase tracking-wider font-light">Publicação</span>
                    <span className="text-white text-sm font-light">12 Out, 2023</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-neutral-900 pb-3 group hover:border-neutral-700 transition-colors">
                    <span className="text-neutral-500 text-xs uppercase tracking-wider font-light">Idioma</span>
                    <span className="text-white text-sm font-light">Português (BR)</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-neutral-900 pb-3 group hover:border-neutral-700 transition-colors">
                    <span className="text-neutral-500 text-xs uppercase tracking-wider font-light">Série</span>
                    <span className="text-white text-sm font-light">Crônicas da Noite, #1</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-neutral-900 pb-3 group hover:border-neutral-700 transition-colors">
                    <span className="text-neutral-500 text-xs uppercase tracking-wider font-light">ISBN</span>
                    <span className="text-white text-sm font-light">978-3-16-148410-0</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-neutral-900 pb-3 group hover:border-neutral-700 transition-colors">
                    <span className="text-neutral-500 text-xs uppercase tracking-wider font-light">Editora</span>
                    <span className="text-white text-sm font-light">Passion Press</span>
                  </div>
                </div>
                <div className="mt-12 flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 bg-neutral-950 text-neutral-400 text-[10px] uppercase tracking-widest border border-neutral-800 hover:border-[#4A0001] hover:text-white transition-colors cursor-pointer">Romance Dark</span>
                  <span className="px-4 py-1.5 bg-neutral-950 text-neutral-400 text-[10px] uppercase tracking-widest border border-neutral-800 hover:border-[#4A0001] hover:text-white transition-colors cursor-pointer">BDSM</span>
                  <span className="px-4 py-1.5 bg-neutral-950 text-neutral-400 text-[10px] uppercase tracking-widest border border-neutral-800 hover:border-[#4A0001] hover:text-white transition-colors cursor-pointer">Suspense</span>
                  <span className="px-4 py-1.5 bg-neutral-950 text-neutral-400 text-[10px] uppercase tracking-widest border border-neutral-800 hover:border-[#4A0001] hover:text-white transition-colors cursor-pointer">Mistério</span>
                </div>
              </div>
              
              <div className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-neutral-900">
                <h2 className="text-xl font-light text-white mb-8 tracking-widest uppercase">Relacionados</h2>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-5 group cursor-pointer items-center">
                    <div className="w-14 h-20 bg-neutral-900 border border-neutral-800 overflow-hidden flex-shrink-0 relative">
                      <Image 
                        alt="Book cover dark aesthetic" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgVtrm_eOHx_p2qd974xlkVGN1K7_isbTMlnq5NkFJFiupjuDVKDc8BCZH2kcnb_G533aE_i37g7z0GEROO7QNUdup3fzsS1G676zvnl4N3SCdIgz9rDiq2ffcvObWtyAZ_laJjB1dZyfvdKVWrhJwKL6l3ZakUICEeb-lP1-MocCpq1DqcaGJ-xB5JnWsNDbneY1XVODOME4EFFj-vEdUgzBUI0BHxz9ls1zV9DDjYW5p-Q8zgjxiFvabZGySiTjCSliarGdd0po"
                        fill
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 border-b border-neutral-900 pb-4 group-hover:border-neutral-700 transition-colors">
                      <h4 className="text-white font-normal text-sm group-hover:text-[#4A0001] transition-colors tracking-wide">Sombras do Desejo</h4>
                      <p className="text-neutral-600 text-xs mt-1 font-light">Ana K. R.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group cursor-pointer items-center">
                    <div className="w-14 h-20 bg-neutral-900 border border-neutral-800 overflow-hidden flex-shrink-0 relative">
                      <Image 
                        alt="Abstract red smoke book cover" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9I7Efp6C163sDemrrL15lCaeVbZ9GtFuyM0bpamc3_LAwosgsEr-t5w3rkK8jGjlfQuOcWtUDpcv_x1g_PTt-sf-y9LRo0ByOWuQ0IcNI7Kc0Mjnw2UkJuDHOxtD2tQ4pXewgn3mfH4z9g8muXmee6dJZCPkWPadbmp0M1LjHiEV7YO0GcijP4suM-TOAN_oKbyETk9-ZzHE2Hp7eds_46eFHEY1TK67Lp-S7h_R7qDhruuhbJTmZBXclob1Ygh26aJpvuSSPen4"
                        fill
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 border-b border-neutral-900 pb-4 group-hover:border-neutral-700 transition-colors">
                      <h4 className="text-white font-normal text-sm group-hover:text-[#4A0001] transition-colors tracking-wide">Pecados Noturnos</h4>
                      <p className="text-neutral-600 text-xs mt-1 font-light">Marco Silva</p>
                    </div>
                  </div>
                </div>
                <Link href="#" className="inline-flex mt-8 text-[10px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">
                  Ver mais recomendações
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
