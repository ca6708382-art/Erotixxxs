import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  BookOpenText,
  LayoutGrid,
  GalleryHorizontal,
  Users,
  Settings,
  LogOut,
  ImagePlus,
  FileText,
  Upload,
} from "lucide-react";

export default function AdminPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0a] font-[family-name:var(--font-jakarta)] text-slate-300">
      <aside className="w-72 bg-[#141414] border-r border-[#262626] flex flex-col justify-between">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-10 h-10 bg-[#800000] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#800000]/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tighter text-white uppercase">
                EROTIXXXS
              </h1>
              <p className="text-[10px] font-bold text-[#800000] tracking-widest uppercase">
                BACKOFFICE PREMIUM
              </p>
            </div>
          </div>
          <nav className="space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#800000] text-white transition-all group"
            >
              <BookOpenText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Livros</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-[#0a0a0a] hover:text-white transition-all group"
            >
              <LayoutGrid className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Categorias</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-[#0a0a0a] hover:text-white transition-all group"
            >
              <GalleryHorizontal className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Gerenciar Carrossel</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-[#0a0a0a] hover:text-white transition-all group"
            >
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Usuários</span>
            </Link>

            <div className="pt-6 mt-6 border-t border-[#262626]">
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-[#0a0a0a] hover:text-white transition-all group"
              >
                <Settings className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">Configurações</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-6">
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#262626] text-slate-400 font-bold text-sm hover:bg-[#800000] hover:text-white hover:border-[#800000] transition-all"
          >
            <LogOut className="w-5 h-5" />
            Sair do Painel
          </Link>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-[#141414] border-b border-[#262626] px-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Adicionar Novo Livro
            </h2>
            <p className="text-xs text-slate-500">
              Cadastre uma nova obra literária na plataforma premium
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPjYPy1I082cNDPhokHFl4wqyRRTpV7aAF2l_qSufkONn-k8DhXcarrRhTuUpwHZAdd-TH1DOzFYCZCgAqSI9zYmsVU-ukijOi_9MZHVyMuLibSXNt5b39W1O6haSCDok7P-BB5tvkt3z85jszuyAehFh4T0D_EOncxPJwRGKE52LTPZiXbWCKaA7ZCzJ9kRfPwDF6jx03XpAWVbNzhiEfC_P2BuYskRrUtN0Y4ENgwx5YTLsNQTGNLSawAPU0-jjRKC3yueP70qQ"
                alt="Profile"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626]">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Capa do Livro
                  </label>
                  <div className="relative aspect-[3/4] bg-[#0a0a0a] border-2 border-dashed border-[#262626] rounded-xl flex flex-col items-center justify-center text-center group hover:border-[#800000] transition-all cursor-pointer">
                    <ImagePlus className="w-10 h-10 text-slate-600 group-hover:text-[#800000] mb-2" />
                    <p className="text-xs text-slate-500 px-4">
                      Upload da Imagem
                      <br />
                      <span className="opacity-50">(3:4 Recomendado)</span>
                    </p>
                    <input
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      type="file"
                    />
                  </div>
                </div>

                <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626]">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Arquivo Digital (PDF)
                  </label>
                  <div className="bg-[#800000]/5 border-2 border-dashed border-[#800000]/40 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-[#800000]/10 hover:border-[#800000] transition-all cursor-pointer group relative">
                    <div className="w-12 h-12 bg-[#800000]/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-[#800000]" />
                    </div>
                    <p className="text-sm font-bold text-white mb-1">
                      Upload PDF
                    </p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-tighter">
                      Arraste ou clique para selecionar
                    </p>
                    <input
                      accept=".pdf"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      type="file"
                    />
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-[#800000]">
                        Enviando Arquivo...
                      </span>
                      <span className="text-white">65%</span>
                    </div>
                    <div className="w-full bg-[#0a0a0a] h-1.5 rounded-full overflow-hidden border border-[#262626]">
                      <div className="bg-[#800000] h-full w-[65%] rounded-full shadow-[0_0_10px_rgba(128,0,0,0.5)]"></div>
                    </div>
                    <p className="text-[10px] text-slate-500 italic">
                      5.4MB de 8.2MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-[#141414] p-8 rounded-2xl border border-[#262626] space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Título do Livro
                      </label>
                      <input
                        className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all outline-none"
                        placeholder="Ex: Noites de Paixão em Veneza"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Autor
                      </label>
                      <input
                        className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all outline-none"
                        placeholder="Nome do autor ou pseudônimo"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Sinopse
                    </label>
                    <textarea
                      className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all outline-none resize-none"
                      placeholder="Escreva aqui o resumo sedutor da obra..."
                      rows={8}
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Categoria
                      </label>
                      <select className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-slate-400 focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all outline-none appearance-none">
                        <option>Selecione uma categoria</option>
                        <option>Romance Erótico</option>
                        <option>Contos Proibidos</option>
                        <option>Literatura Dark</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Classificação
                      </label>
                      <select className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-slate-400 focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all outline-none appearance-none">
                        <option>18+ (Padrão)</option>
                        <option>21+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4">
                  <button
                    className="px-8 py-3 rounded-xl border border-[#262626] text-slate-400 font-bold text-sm hover:bg-white/5 transition-all"
                    type="button"
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-[#800000] hover:bg-[#5a0000] text-white px-10 py-3 rounded-xl font-bold text-sm shadow-xl shadow-[#800000]/20 transition-all flex items-center gap-2"
                    type="submit"
                  >
                    <Upload className="w-5 h-5" />
                    Publicar Livro
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <div className="fixed bottom-8 right-8 pointer-events-none opacity-0 lg:opacity-100">
        <div className="bg-[#141414] border border-[#800000]/30 backdrop-blur-md p-4 rounded-xl shadow-2xl max-w-xs pointer-events-auto">
          <h4 className="text-xs font-black text-[#800000] uppercase tracking-tighter mb-2">
            Dica de Upload
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Certifique-se de que o PDF não contenha senhas e que a capa esteja
            em alta resolução (mínimo 1200x1600px) para garantir a melhor
            experiência no Backoffice Premium.
          </p>
        </div>
      </div>
    </div>
  );
}
