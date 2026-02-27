"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Sparkles,
  Search,
  BookOpen,
  Heart,
  Share2,
  Camera,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState("Tudo");

  const allBooks = [
    {
      title: "Sedução à Meia-Noite",
      author: "Elena Valmont",
      category: "Dark Romance",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNtWZo2PqmSHKPyX9tqNhYsYjs3qznORXtMg0vcBy4kEcl3LUdipPN9rHLGE2S4fkPYNyFKjSs_t5G6RfCouiM3gwdTpBiu68LL0QQ2UPimvCd8X0qaW4V8Lae6Nc-k8c1XWc_z3OmWaZnJtPhH-EbN3AO1MVJPuekpkND9GoHABWRrOLZcDaoZqgnUuKTz2MOGC5FGQH3OANR9DEsw6h541_LrQWYxz0m-N0OG-LdetVBpXocgxRjjfFwr-68yRohqznDJkFU6t0",
    },
    {
      title: "Sombras do Desejo",
      author: "Lucas Thorne",
      category: "Dark Romance",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoTBomir29GOq6xLTICSwIruabo4r1aQdLHjl8M-0JzRwWBCQlrYuD5DIknj1dDjyevP2nZklC0doSxk82PJnWB2cau5BYZiLuEfliuZXuPx_mbP4-q8mYC0PMIiTiDRXnbk3Q2pMZusFxqR2fZVLkZev4vjs67Tsy3RvmRPiigK5ehMrJ6PcBgv74os46KS_ps--jo1F_g1vx-nHtONsV7W-CdELSq-DfX4QnX8_ySIBKSFLiAic-6JjQJ49WFqWcvppRilAtg4w",
    },
    {
      title: "O Pacto",
      author: "Sofia Blackwood",
      category: "Contos Eróticos",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkQcFB-2zWXpdM7rgp2VRCyV3QPrZbsL57mq-aRtMCGv7g4ElRaJwD-sGvf0sWoRa_sNgdHKKEp-DS8oFQfD6naotODD-Fjn3wrzvSjuUigwXeu97nlrWI0nuuf55edgoIOpqJt7MOjgxQGdhZivr0tP_DswgFBZOkX98I2BIH_zyVgzfvO1B2xI0f0G13dJgMavb0XyMEWfNDAE1PgiooE3sP5_3F4tkT-DBmmVS-KeV_8kwhDkEBFXAUQu2b7m6Yj3ypzgeg_QI",
    },
    {
      title: "Encontros Proibidos",
      author: "Marcus Volkov",
      category: "Contos Eróticos",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUQAgWw1ED_wBza_os2-48hs98YDfqGRxroWsnw_sXq7k5R7oltoBV-auZ9m0-eJxcZ8EWMRo7SwYwTmtB1aJCq0uJP1fwYHFLIZFkBdPLXcBAFhoQoBcFNl25DhBwaUHxQx9CSGH5gFUMFPnSH-c5Aa4u66so0-Z36IXXP3qz1Ny3aUMci3qkKxD7M7K9FdJDSiC6O6-j8yZpOy9W1JwvBhu5FCfS32mAiJS8wbDw4Qcnc3ENxii2O_SKrQCcLlQcLYMBzoypS0Y",
    },
    {
      title: "Versos da Carne",
      author: "Isabella Noir",
      category: "Poesia Erótica",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgVtrm_eOHx_p2qd974xlkVGN1K7_isbTMlnq5NkFJFiupjuDVKDc8BCZH2kcnb_G533aE_i37g7z0GEROO7QNUdup3fzsS1G676zvnl4N3SCdIgz9rDiq2ffcvObWtyAZ_laJjB1dZyfvdKVWrhJwKL6l3ZakUICEeb-lP1-MocCpq1DqcaGJ-xB5JnWsNDbneY1XVODOME4EFFj-vEdUgzBUI0BHxz9ls1zV9DDjYW5p-Q8zgjxiFvabZGySiTjCSliarGdd0po",
    },
    {
      title: "Pecados Noturnos",
      author: "Marco Silva",
      category: "Contos Eróticos",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9I7Efp6C163sDemrrL15lCaeVbZ9GtFuyM0bpamc3_LAwosgsEr-t5w3rkK8jGjlfQuOcWtUDpcv_x1g_PTt-sf-y9LRo0ByOWuQ0IcNI7Kc0Mjnw2UkJuDHOxtD2tQ4pXewgn3mfH4z9g8muXmee6dJZCPkWPadbmp0M1LjHiEV7YO0GcijP4suM-TOAN_oKbyETk9-ZzHE2Hp7eds_46eFHEY1TK67Lp-S7h_R7qDhruuhbJTmZBXclob1Ygh26aJpvuSSPen4",
    }
  ];

  const categories = ["Tudo", "Dark Romance", "Contos Eróticos", "Poesia Erótica"];

  const filteredBooks = activeCategory === "Tudo" 
    ? allBooks 
    : allBooks.filter(book => book.category === activeCategory);

  // Mock data for the featured book (this would come from the database/admin in the future)
  const featuredBook = {
    title: "Desejos Proibidos",
    author: "Elena V. Blackwood",
    description: "Em uma sociedade onde a repressão é a norma, Isabella descobre um clube secreto onde as fantasias mais obscuras ganham vida. Entre bailes de máscaras e encontros clandestinos, ela deve escolher entre a segurança de sua vida monótona e a perigosa atração de um estranho misterioso. Uma história de paixão avassaladora e segredos que podem destruir reputações.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB76PMeCOrsbrAM0v-Wta9vEyEObtaGpw082bEHn_vXL6KvaMD-CRq9tFEtntkXvv06H18UmRmOnjX47ssetYVxw7uXyYYJmJxYlz99Hl1Oe5chXFmn3X-wEMFRlY7Cf95cFHPLz7sUAuP-JNG0TTuLDb8EnqjBrkj6-pU8bOinJ98gJ32QIIwv-tQMz7vQity831RrCmCcqRN1CdFFTgcElcqbZRLXGaJXktMrzDFrAg8EQlLv8jZOy7IL_bzv6GF87kT8spNV_oY",
    category: "Romance Erótico"
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-20">
            <Link href="/" className="flex items-center gap-3 group">
              <Sparkles className="text-[#4A0001] w-5 h-5 font-thin group-hover:rotate-180 transition-transform duration-1000" />
              <h1 className="text-white text-lg font-bold tracking-[0.4em] uppercase italic">
                EROTIXXXS
              </h1>
            </Link>
            <nav className="hidden lg:flex items-center gap-12">
              <Link
                href="/"
                className="text-white/40 hover:text-white text-[10px] font-light tracking-[0.3em] uppercase transition-all duration-500"
              >
                Início
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-white text-[10px] font-light tracking-[0.3em] uppercase transition-all duration-500"
              >
                Categorias
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-white text-[10px] font-light tracking-[0.3em] uppercase transition-all duration-500"
              >
                Destaques
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-white text-[10px] font-light tracking-[0.3em] uppercase transition-all duration-500"
              >
                Favoritos
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-12">
            <div className="hidden xl:flex items-center border-b border-white/5 pb-1 w-40 focus-within:border-white/20 transition-all duration-500">
              <Search className="text-white/20 w-4 h-4 font-light" />
              <input
                className="bg-transparent border-none focus:ring-0 text-[10px] tracking-widest text-white placeholder:text-white/10 w-full ml-2 outline-none"
                placeholder="BUSCAR"
                type="text"
              />
            </div>
            <div className="flex items-center gap-10">
              <Link
                href="/admin"
                className="text-white/20 hover:text-white transition-colors duration-500"
                title="Admin Dashboard"
              >
                <Shield className="w-4 h-4 font-light" />
              </Link>
              <button className="text-white/40 font-light text-[10px] tracking-[0.3em] hover:text-white transition-colors duration-500">
                LOGIN
              </button>
              <button className="velvet-button">ASSINAR AGORA</button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative h-[calc(100vh-5rem)] w-full flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 hero-gradient z-10"></div>
            <Image
              alt="Atmospheric high-contrast black and white photography"
              className="w-full h-full object-cover grayscale opacity-50 contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkWYPpnIfCStPaOT1UWjtnfzmtztjhgC-SF4SRMVjnEMoas11_Xbc_pQly0UEntHqXfq9Ew2XU4bP0AwpV-DlRZqGJNSisfIlDUr-o2dqV09zggAHoiOMwXHW8zfBbxHCLOnJ3NY8Jm9oRW_37Sg6gFbBTpEKhf5bfUZs0yX2YBNiinPfSAX-xv57zPENNrFBgUForSCcaUnhXc8-KjDhM_f75etfAIP9DV2TYQtPiKBccBH7a5DdZ6bpFx_pir0UbKPf8L1Dry5w"
              fill
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        <section className="py-32 max-w-[1600px] mx-auto px-12">
          <div className="flex flex-col items-center mb-24">
            <h3 className="serif-heading text-6xl font-light italic text-white/90 mb-16">
              Categorias
            </h3>
            <div className="flex flex-wrap gap-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] font-semibold tracking-[0.4em] uppercase border-b pb-2 transition-all duration-500 ${
                    activeCategory === cat
                      ? "text-[#4A0001] border-[#4A0001]/40"
                      : "text-white/20 border-transparent hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
            {filteredBooks.map((book, i) => (
              <Link href="/book" key={i} className="group cursor-pointer space-y-10 block">
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950 thin-border transition-all duration-1000">
                  <Image
                    alt={`${book.title} cover`}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1.5s] grayscale-[0.3] group-hover:grayscale-0"
                    src={book.img}
                    fill
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center gap-8 backdrop-blur-[4px]">
                    <BookOpen className="text-white/60 font-thin w-6 h-6 hover:text-white transition-colors" />
                    <Heart className="text-white/60 font-thin w-6 h-6 hover:text-[#4A0001] transition-colors" />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <h4 className="serif-heading text-2xl font-light text-white/80 group-hover:text-[#4A0001] transition-colors duration-700">
                    {book.title}
                  </h4>
                  <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase font-extralight">
                    {book.author}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-32 bg-[#050303] border-y border-white/5">
          <div className="max-w-[1600px] mx-auto px-12">
            <div className="flex flex-col items-center mb-24">
              <h3 className="serif-heading text-6xl font-light italic text-white/90">
                Destaque
              </h3>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <Link href="/book" className="w-full lg:w-[450px] flex-shrink-0 group relative perspective-1000 block">
                <div className="aspect-[2/3] w-full rounded-sm overflow-hidden border border-white/10 relative z-10 transition-transform duration-700 ease-out group-hover:scale-[1.02] shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                  <Image
                    alt={`${featuredBook.title} cover`}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 grayscale-[20%] group-hover:grayscale-0"
                    src={featuredBook.img}
                    fill
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="absolute inset-0 bg-[#4A0001]/20 blur-[100px] -z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-1000"></div>
              </Link>
              
              <div className="flex flex-col flex-1 max-w-2xl">
                <div className="flex flex-col gap-4 mb-10">
                  <h4 className="text-[#4A0001] font-medium text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                    <span className="w-6 h-[0.5px] bg-[#4A0001] block"></span> {featuredBook.category}
                  </h4>
                  <h2 className="serif-heading text-5xl md:text-6xl text-white leading-[1.1] tracking-tight italic">
                    {featuredBook.title}
                  </h2>
                  <p className="text-lg text-white/40 font-light tracking-wide uppercase text-[11px] mt-2">
                    {featuredBook.author}
                  </p>
                </div>
                
                <div className="mb-12">
                  <p className="text-white/60 text-lg leading-relaxed font-light tracking-wide text-justify">
                    <span className="text-5xl float-left mr-3 mt-[-8px] text-[#4A0001] serif-heading">
                      {featuredBook.description.charAt(0)}
                    </span>
                    {featuredBook.description.slice(1)}
                  </p>
                </div>
                
                <div className="flex items-center gap-8">
                  <Link href="/book" className="velvet-button px-12 py-5 text-[10px]">
                    Ver Detalhes
                  </Link>
                  <Link href="/reader" className="text-white/30 hover:text-white text-[10px] tracking-[0.3em] font-light transition-all duration-500 border-b border-transparent hover:border-white/10 pb-1 uppercase flex items-center gap-2 group">
                    Ler Agora
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1600px] mx-auto px-12 mb-64 mt-32">
          <div className="relative border-y border-white/5 py-40 flex flex-col lg:flex-row items-center justify-between gap-24 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(74,0,1,0.05)_0%,transparent_70%)] -z-10"></div>
            <div className="space-y-10 max-w-3xl">
              <h3 className="serif-heading text-7xl font-light text-white/90">
                ErotiXXXs{" "}
                <span className="italic text-[#4A0001]">Prestige</span>
              </h3>
              <p className="text-white/30 text-xl font-extralight leading-relaxed tracking-wide">
                O ápice da experiência literária. Assinatura exclusiva com
                acesso a manuscritos originais, ilustrações em alta definição e
                edições de luxo comentadas pelos autores em um ambiente
                privativo.
              </p>
              <div className="flex flex-wrap gap-12 pt-6">
                {["Offline", "Privacidade Total", "HDR Studio"].map(
                  (feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-[9px] tracking-[0.4em] uppercase text-white/40"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A0001]/40"></span>
                      {feature}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="flex-none flex flex-col items-center gap-8">
              <button className="velvet-button px-20 py-7 text-sm">
                R$ 29,90{" "}
                <span className="text-[10px] font-light opacity-40 ml-3 tracking-[0.3em]">
                  / MÊS
                </span>
              </button>
              <p className="text-[8px] tracking-[0.5em] text-white/10 uppercase">
                Assinatura de renovação automática
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#050303] pt-40 pb-20 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 mb-40">
            <div className="space-y-12">
              <div className="flex items-center gap-3">
                <Sparkles className="text-[#4A0001] w-5 h-5 font-thin" />
                <h2 className="text-white text-lg font-bold tracking-[0.4em] uppercase italic">
                  EROTIXXXS
                </h2>
              </div>
              <p className="text-white/20 text-[11px] leading-relaxed font-light tracking-widest max-w-xs">
                Redefinindo os limites da literatura erótica através de uma
                estética minimalista e curadoria rigorosa para leitores
                exigentes.
              </p>
              <div className="flex gap-10">
                <Link
                  href="#"
                  className="text-white/10 hover:text-[#4A0001] transition-colors duration-500"
                >
                  <Share2 className="w-5 h-5 font-thin" />
                </Link>
                <Link
                  href="#"
                  className="text-white/10 hover:text-[#4A0001] transition-colors duration-500"
                >
                  <Camera className="w-5 h-5 font-thin" />
                </Link>
              </div>
            </div>
            <div className="space-y-12">
              <h4 className="text-white/60 font-medium uppercase tracking-[0.5em] text-[8px]">
                Explorar
              </h4>
              <ul className="space-y-8 text-white/20 text-[9px] tracking-[0.3em] uppercase font-light">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-500"
                  >
                    Lançamentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-500"
                  >
                    Mais Lidos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-500"
                  >
                    Originais
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-500"
                  >
                    Clássicos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-12">
              <h4 className="text-white/60 font-medium uppercase tracking-[0.5em] text-[8px]">
                Privacidade
              </h4>
              <ul className="space-y-8 text-white/20 text-[9px] tracking-[0.3em] uppercase font-light">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-500"
                  >
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-500"
                  >
                    Políticas de Dados
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-500"
                  >
                    Suporte Direto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-12">
              <h4 className="text-white/60 font-medium uppercase tracking-[0.5em] text-[8px]">
                Newsletter
              </h4>
              <p className="text-white/20 text-[9px] tracking-widest font-light leading-loose">
                Assine para receber convites exclusivos e prévias editoriais.
              </p>
              <div className="flex gap-4 border-b border-white/10 pb-3 group focus-within:border-white/30 transition-all duration-500">
                <input
                  className="bg-transparent border-none focus:ring-0 text-[10px] text-white placeholder:text-white/10 w-full p-0 tracking-widest outline-none"
                  placeholder="SEU E-MAIL"
                  type="email"
                />
                <button className="text-white/20 hover:text-white transition-colors duration-500">
                  <ArrowRight className="w-5 h-5 font-thin" />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-white/5 text-[7px] tracking-[0.6em] uppercase font-light">
              © 2024 EROTIXXXS LITERATURA PREMIUM. CONTEÚDO PARA MAIORES DE 18
              ANOS.
            </p>
            <div className="flex gap-12">
              <span className="text-[7px] tracking-[0.5em] text-white/5 uppercase">
                Lisboa
              </span>
              <span className="text-[7px] tracking-[0.5em] text-white/5 uppercase">
                Paris
              </span>
              <span className="text-[7px] tracking-[0.5em] text-white/5 uppercase">
                São Paulo
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
