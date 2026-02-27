"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  ZoomOut,
  ZoomIn,
  Download,
  Printer,
  Edit2,
  Share2,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

export default function ReaderPage() {
  return (
    <div className="bg-[#0a0505] font-[family-name:var(--font-jakarta)] text-white/90 antialiased overflow-hidden h-screen flex flex-col">
      <header className="h-14 border-b border-white/5 bg-[#0a0505] flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-6">
          <label
            className="cursor-pointer p-2 hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
            htmlFor="toc-toggle"
          >
            <Menu className="w-5 h-5 text-white/60" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">
              Sumário
            </span>
          </label>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-[11px] font-bold text-[#8b1a1a] uppercase tracking-[0.2em] hover:text-white transition-colors"
            >
              EROTIXXXS
            </Link>
            <span className="text-sm font-medium text-white/60 truncate max-w-[300px]">
              The Midnight Rendezvous — Final Edition.pdf
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white/5 rounded-full px-2 py-1">
            <button className="p-1.5 hover:text-[#8b1a1a] transition-colors">
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-[11px] font-bold px-3 text-white/60 min-w-[50px] text-center">
              100%
            </span>
            <button className="p-1.5 hover:text-[#8b1a1a] transition-colors">
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>
          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
          <button
            className="p-2 hover:bg-white/5 rounded-lg text-white/60"
            title="Download PDF"
          >
            <Download className="w-5 h-5" />
          </button>
          <button
            className="p-2 hover:bg-white/5 rounded-lg text-white/60"
            title="Print"
          >
            <Printer className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full border border-[#8b1a1a]/40 ml-2 relative overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB7HZKQKxltVr2H0-qGYfPVBrqmnhk96TOw7DjDPj_qYMbgWYoKs0tXA5Htk8EMMRpI2sgN1uwMWU3vaw7LXytZd4rJh4Jwrz1Jg1yXibFvgtLLFYLIboA2Owcn8_zNhAr75ebOoc7FwiMTWLdL9iAEgMMPBkaNQVXYiXzIzC44_xrIupPwwfRLoU4zzJSqUbek0TEF8JVzoQJiFRSQY-5p9GH3EODcxw7kMY_jtwPAib_tGMvGll5P0f7ryKV1e-NnYwPZYVGrik"
              alt="User"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        <input className="hidden peer" id="toc-toggle" type="checkbox" />

        <aside className="w-72 bg-[#0d0707] border-r border-white/5 h-full fixed left-0 top-14 bottom-14 z-40 -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out custom-scrollbar overflow-y-auto p-6">
          <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 mb-8">
            Conteúdo
          </h3>
          <nav className="space-y-6">
            <div className="space-y-3">
              <Link
                className="block text-xs text-[#8b1a1a] font-bold uppercase tracking-widest"
                href="#"
              >
                Início
              </Link>
              <Link
                className="block text-sm text-white/80 hover:text-white transition-colors"
                href="#"
              >
                Capa
              </Link>
              <Link
                className="block text-sm text-white/80 hover:text-white transition-colors"
                href="#"
              >
                Dedicatória
              </Link>
            </div>
            <div className="space-y-3 pt-4 border-t border-white/5">
              <span className="block text-[10px] text-white/20 uppercase font-bold">
                Capítulos
              </span>
              <Link
                className="flex justify-between items-center group"
                href="#"
              >
                <span className="text-sm text-white/50 group-hover:text-white transition-colors">
                  Capítulo I: O Convite
                </span>
                <span className="text-[10px] text-white/20">04</span>
              </Link>
              <Link
                className="flex justify-between items-center group"
                href="#"
              >
                <span className="text-sm text-white/90 font-medium">
                  Capítulo II: O Encontro
                </span>
                <span className="text-[10px] text-[#8b1a1a]">12</span>
              </Link>
              <Link
                className="flex justify-between items-center group"
                href="#"
              >
                <span className="text-sm text-white/50 group-hover:text-white transition-colors">
                  Capítulo III: Contrato Prateado
                </span>
                <span className="text-[10px] text-white/20">28</span>
              </Link>
              <Link
                className="flex justify-between items-center group"
                href="#"
              >
                <span className="text-sm text-white/50 group-hover:text-white transition-colors">
                  Capítulo IV: Meia-Noite
                </span>
                <span className="text-[10px] text-white/20">45</span>
              </Link>
            </div>
          </nav>
        </aside>

        <main className="flex-1 bg-[#0a0505] overflow-y-auto custom-scrollbar relative z-10 scroll-smooth">
          <div className="max-w-[850px] mx-auto py-12 px-8 flex flex-col gap-12">
            <section className="bg-white text-black min-h-[1100px] w-full p-16 md:p-24 flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="w-full text-center border-b border-black/10 pb-12 mb-16">
                <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold mb-4 block">
                  EROTIXXXS ORIGINAL
                </span>
                <h1 className="font-[family-name:var(--font-crimson)] text-5xl italic mb-4">
                  Capítulo II
                </h1>
                <h2 className="font-[family-name:var(--font-crimson)] text-2xl uppercase tracking-widest font-light">
                  O Encontro da Meia-Noite
                </h2>
              </div>

              <div className="font-[family-name:var(--font-crimson)] text-[1.2rem] leading-[1.8] text-black/90 space-y-8 max-w-[600px] w-full">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:mt-1 first-letter:text-[#8b1a1a]">
                  A chuva batia com um ritmo implacável contra o vidro que ia do
                  chão ao teto da cobertura, espelhando o pulso frenético no
                  peito de Julian. A cidade lá embaixo era um mosaico borrado de
                  neon e sombras, mas seu foco permanecia inteiramente na pesada
                  porta de carvalho ao final do corredor.
                </p>
                <p>
                  Ele esperara meses por este convite específico. No mundo do
                  desejo de alto risco, a paciência não era apenas uma virtude;
                  era a moeda definitiva. Ele ajustou as abotoaduras, o frio da
                  prata contra seus pulsos, e respirou fundo, sentindo o gosto
                  de bourbon caro e escolhas iminentes.
                </p>
                <p>
                  Quando a porta finalmente se abriu, o som foi mais alto do que
                  o trovão rolando sobre a cidade. Uma silhueta estava
                  emoldurada contra o brilho âmbar suave do estúdio. Não houve
                  palavras trocadas — não precisavam ser ditas. O ar entre eles
                  já estava denso, carregado com o tipo de eletricidade que
                  precede uma tempestade de verão.
                </p>

                <div className="flex justify-center py-12">
                  <span className="text-black/20 text-2xl tracking-[1em]">
                    ***
                  </span>
                </div>

                <p>
                  &quot;Você está atrasado,&quot; ela disse, sua voz um sussurro
                  de veludo baixo que enviou um calafrio visível por sua
                  espinha. Ela entrou na luz, a seda de seu vestido esmeralda
                  capturando o brilho da lareira. Era uma cor que prometia
                  perigo e exigia atenção absoluta.
                </p>
                <p>
                  &quot;As melhores coisas sempre valem a espera, Elena,&quot;
                  Julian respondeu, sua voz estabilizando-se enquanto cruzava o
                  limiar. A porta fechou atrás dele com uma finalidade que
                  parecia uma assinatura em um contrato.
                </p>
                <p>
                  Ela caminhou em direção a ele, cada passo medido e deliberado.
                  O perfume de sândalo e algo mais aguçado — cravo, talvez —
                  preencheu o espaço entre eles. Quando ela parou, estava perto
                  o suficiente para que ele pudesse sentir o calor irradiando
                  dela, um forte contraste com a tempestade que rugia do lado de
                  fora das janelas.
                </p>
              </div>

              <div className="mt-auto pt-16 w-full flex justify-between items-center text-[10px] uppercase tracking-widest text-black/30 font-bold border-t border-black/5">
                <span>Página 12</span>
                <span>EROTIXXXS</span>
                <span>2024</span>
              </div>
            </section>

            <section className="bg-white text-black min-h-[1100px] w-full p-16 md:p-24 opacity-40 hover:opacity-100 transition-opacity flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="font-[family-name:var(--font-crimson)] text-[1.2rem] leading-[1.8] text-black/90 space-y-8 max-w-[600px] w-full pt-12">
                <p>
                  &quot;Temos regras para esta noite,&quot; ela sussurrou, seus
                  olhos buscando os dele. &quot;Regras que não podem ser
                  quebradas sob nenhuma circunstância.&quot;
                </p>
                <p>
                  Julian sorriu, uma inclinação lenta e perigosa dos lábios.
                  &quot;Regras foram feitas para serem testadas. Mas por você?
                  Eu poderia considerar segui-las. Por um tempo.&quot;
                </p>
                <p>
                  O silêncio que se seguiu foi pesado com o que não foi dito.
                  Ela estendeu a mão, seus dedos roçando levemente a gola de sua
                  camisa, uma carícia que era tanto um desafio quanto um
                  convite.
                </p>
              </div>

              <div className="mt-auto pt-16 w-full flex justify-between items-center text-[10px] uppercase tracking-widest text-black/30 font-bold border-t border-black/5">
                <span>Página 13</span>
                <span>EROTIXXXS</span>
                <span>2024</span>
              </div>
            </section>
          </div>
        </main>

        <div className="fixed right-8 bottom-24 flex flex-col gap-2 z-30">
          <button className="w-12 h-12 rounded-full bg-[#8b1a1a] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
            <Edit2 className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#140a0a] border border-white/10 text-white/60 shadow-xl flex items-center justify-center hover:text-white transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <footer className="h-14 border-t border-white/5 bg-[#0a0505]/95 backdrop-blur-md z-50 flex items-center px-6">
        <div className="flex items-center gap-4 min-w-[150px]">
          <button className="p-1.5 text-white/40 hover:text-white transition-colors">
            <ChevronsLeft className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 group">
            <ChevronLeft className="w-5 h-5 text-white/40 group-hover:text-[#8b1a1a] transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white">
              Página Anterior
            </span>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center gap-2 px-12">
          <div className="flex justify-between w-full max-w-2xl px-1">
            <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/20">
              Progresso da Leitura
            </span>
            <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#8b1a1a]">
              12 de 156 páginas (8%)
            </span>
          </div>
          <div className="w-full max-w-2xl h-[3px] bg-white/5 rounded-full overflow-hidden relative">
            <div
              className="absolute h-full bg-[#8b1a1a] shadow-[0_0_8px_rgba(139,26,26,0.6)] rounded-full transition-all duration-500"
              style={{ width: "8.5%" }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-4 min-w-[150px] justify-end">
          <button className="flex items-center gap-2 group">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white">
              Próxima Página
            </span>
            <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#8b1a1a] transition-colors" />
          </button>
          <button className="p-1.5 text-white/40 hover:text-white transition-colors">
            <ChevronsRight className="w-5 h-5" />
          </button>
        </div>
      </footer>

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-20"></div>
    </div>
  );
}
