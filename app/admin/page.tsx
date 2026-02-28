"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  BookOpen,
  BookOpenText,
  LayoutGrid,
  Star,
  Headphones,
  Image as ImageIcon,
  LogOut,
  Save,
  Plus,
  Trash2,
  ImagePlus,
  FileText,
  Upload,
} from "lucide-react";

export default function AdminPage() {
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("livros");
  const [isSaving, setIsSaving] = useState(false);
  const [newBookForm, setNewBookForm] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    img: "",
    pdf: ""
  });

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      alert("Alterações salvas com sucesso!");
    } catch (error) {
      alert("Erro ao salvar alterações.");
    }
    setIsSaving(false);
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <BookOpen className="w-8 h-8 text-[#800000]" />
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/40">Carregando Painel...</p>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "livros":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Gerenciar Livros</h3>
              <button 
                onClick={() => {
                  const newBook = { id: Date.now().toString(), title: "Novo Livro", author: "Autor", category: data.categories[0] || "Tudo", img: "" };
                  setData({ ...data, books: [newBook, ...data.books] });
                }}
                className="bg-[#800000] hover:bg-[#5a0000] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Adicionar Livro
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.books.map((book: any, index: number) => (
                <div key={book.id || index} className="bg-[#141414] p-4 rounded-xl border border-[#262626] flex gap-4">
                  <div className="w-20 h-28 bg-[#0a0a0a] rounded-md overflow-hidden relative flex-shrink-0">
                    {book.img ? (
                      <Image src={book.img} alt={book.title} fill className="object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600"><ImageIcon className="w-6 h-6" /></div>
                    )}
                  </div>
                  <div className="flex-1 space-y-2">
                    <input 
                      value={book.title} 
                      onChange={(e) => {
                        const newBooks = [...data.books];
                        newBooks[index].title = e.target.value;
                        setData({ ...data, books: newBooks });
                      }}
                      className="w-full bg-[#0a0a0a] border border-[#262626] rounded px-2 py-1 text-white text-sm" placeholder="Título" 
                    />
                    <input 
                      value={book.author} 
                      onChange={(e) => {
                        const newBooks = [...data.books];
                        newBooks[index].author = e.target.value;
                        setData({ ...data, books: newBooks });
                      }}
                      className="w-full bg-[#0a0a0a] border border-[#262626] rounded px-2 py-1 text-slate-400 text-xs" placeholder="Autor" 
                    />
                    <div className="flex items-center gap-2">
                      <label className="cursor-pointer bg-[#262626] hover:bg-[#333] text-xs px-3 py-1.5 rounded transition-colors text-white">
                        Upload Imagem
                        <input 
                          type="file" 
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                const newBooks = [...data.books];
                                newBooks[index].img = reader.result as string;
                                setData({ ...data, books: newBooks });
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </label>
                      {book.img && book.img.startsWith('data:') && <span className="text-[10px] text-green-500">Imagem carregada</span>}
                    </div>
                    <select 
                      value={book.category}
                      onChange={(e) => {
                        const newBooks = [...data.books];
                        newBooks[index].category = e.target.value;
                        setData({ ...data, books: newBooks });
                      }}
                      className="w-full bg-[#0a0a0a] border border-[#262626] rounded px-2 py-1 text-slate-400 text-xs"
                    >
                      {data.categories.map((cat: string) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <button 
                    onClick={() => {
                      const newBooks = data.books.filter((_: any, i: number) => i !== index);
                      setData({ ...data, books: newBooks });
                    }}
                    className="text-red-500 hover:text-red-400 p-2 self-start"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "categorias":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Gerenciar Categorias</h3>
              <button 
                onClick={() => {
                  setData({ ...data, categories: [...data.categories, "Nova Categoria"] });
                }}
                className="bg-[#800000] hover:bg-[#5a0000] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Adicionar Categoria
              </button>
            </div>
            <div className="space-y-3">
              {data.categories.map((cat: string, index: number) => (
                <div key={index} className="flex gap-3 items-center">
                  <input 
                    value={cat} 
                    onChange={(e) => {
                      const newCats = [...data.categories];
                      newCats[index] = e.target.value;
                      setData({ ...data, categories: newCats });
                    }}
                    className="flex-1 bg-[#141414] border border-[#262626] rounded-lg px-4 py-3 text-white" 
                  />
                  <button 
                    onClick={() => {
                      const newCats = data.categories.filter((_: any, i: number) => i !== index);
                      setData({ ...data, categories: newCats });
                    }}
                    className="bg-red-500/10 text-red-500 hover:bg-red-500/20 p-3 rounded-lg"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "destaque":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Livro em Destaque</h3>
            <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626] space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Título</label>
                <input 
                  value={data.featuredBook.title} 
                  onChange={(e) => setData({ ...data, featuredBook: { ...data.featuredBook, title: e.target.value } })}
                  className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Autor</label>
                <input 
                  value={data.featuredBook.author} 
                  onChange={(e) => setData({ ...data, featuredBook: { ...data.featuredBook, author: e.target.value } })}
                  className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Categoria</label>
                <input 
                  value={data.featuredBook.category} 
                  onChange={(e) => setData({ ...data, featuredBook: { ...data.featuredBook, category: e.target.value } })}
                  className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Imagem da Capa</label>
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer bg-[#262626] hover:bg-[#333] px-4 py-2 rounded-lg transition-colors text-white text-sm">
                    Escolher Imagem
                    <input 
                      type="file" 
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setData({ ...data, featuredBook: { ...data.featuredBook, img: reader.result as string } });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  {data.featuredBook.img && (
                    <div className="w-16 h-24 relative rounded overflow-hidden border border-[#262626]">
                      <Image src={data.featuredBook.img} alt="Preview" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Sinopse</label>
                <textarea 
                  value={data.featuredBook.description} 
                  onChange={(e) => setData({ ...data, featuredBook: { ...data.featuredBook, description: e.target.value } })}
                  className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white h-32 resize-none" 
                />
              </div>
            </div>
          </div>
        );
      case "hotlistening":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Serviço Hot Listening</h3>
            <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626] space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Título</label>
                <input 
                  value={data.hotListening.title} 
                  onChange={(e) => setData({ ...data, hotListening: { ...data.hotListening, title: e.target.value } })}
                  className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Descrição</label>
                <textarea 
                  value={data.hotListening.description} 
                  onChange={(e) => setData({ ...data, hotListening: { ...data.hotListening, description: e.target.value } })}
                  className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white h-24 resize-none" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Preço</label>
                  <input 
                    value={data.hotListening.price} 
                    onChange={(e) => setData({ ...data, hotListening: { ...data.hotListening, price: e.target.value } })}
                    className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Unidade (ex: / SESSÃO)</label>
                  <input 
                    value={data.hotListening.unit} 
                    onChange={(e) => setData({ ...data, hotListening: { ...data.hotListening, unit: e.target.value } })}
                    className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Texto de Rodapé</label>
                <input 
                  value={data.hotListening.footerText} 
                  onChange={(e) => setData({ ...data, hotListening: { ...data.hotListening, footerText: e.target.value } })}
                  className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Características (separadas por vírgula)</label>
                <input 
                  value={data.hotListening.features.join(", ")} 
                  onChange={(e) => {
                    const features = e.target.value.split(",").map(f => f.trim());
                    setData({ ...data, hotListening: { ...data.hotListening, features } });
                  }}
                  className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-white" 
                />
              </div>
            </div>
          </div>
        );
      case "hero":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Carrossel da Hero Section</h3>
              <button 
                onClick={() => {
                  const newImages = [...(data.hero.images || []), ""];
                  setData({ ...data, hero: { ...data.hero, images: newImages } });
                }}
                className="bg-[#800000] hover:bg-[#5a0000] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Adicionar Imagem
              </button>
            </div>
            <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626] space-y-6">
              {(data.hero.images || []).map((imgUrl: string, index: number) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-1 space-y-2">
                    <label className="block text-xs font-bold text-slate-400 uppercase">Imagem {index + 1}</label>
                    <div className="flex items-center gap-4">
                      <label className="cursor-pointer bg-[#262626] hover:bg-[#333] px-4 py-2 rounded-lg transition-colors text-white text-sm">
                        Upload Imagem
                        <input 
                          type="file" 
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                const newImages = [...data.hero.images];
                                newImages[index] = reader.result as string;
                                setData({ ...data, hero: { ...data.hero, images: newImages } });
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                  {imgUrl && (
                    <div className="w-32 h-20 relative rounded-lg overflow-hidden border border-[#262626] flex-shrink-0 mt-6">
                      <Image src={imgUrl} alt={`Hero Preview ${index + 1}`} fill className="object-cover grayscale" referrerPolicy="no-referrer" />
                    </div>
                  )}
                  <button 
                    onClick={() => {
                      const newImages = data.hero.images.filter((_: any, i: number) => i !== index);
                      setData({ ...data, hero: { ...data.hero, images: newImages } });
                    }}
                    className="text-red-500 hover:text-red-400 p-3 mt-5 bg-red-500/10 hover:bg-red-500/20 rounded-lg self-start"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              {(!data.hero.images || data.hero.images.length === 0) && (
                <p className="text-slate-500 text-sm italic">Nenhuma imagem no carrossel. Adicione uma para começar.</p>
              )}
            </div>
          </div>
        );
      case "adicionar_livro":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Adicionar Novo Livro</h3>
            <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626]">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Capa do Livro
                  </label>
                  <div className="relative aspect-[3/4] bg-[#0a0a0a] border-2 border-dashed border-[#262626] rounded-xl flex flex-col items-center justify-center text-center group hover:border-[#800000] transition-all cursor-pointer overflow-hidden">
                    {newBookForm.img ? (
                      <Image src={newBookForm.img} alt="Preview" fill className="object-cover" />
                    ) : (
                      <>
                        <ImagePlus className="w-10 h-10 text-slate-600 group-hover:text-[#800000] mb-2" />
                        <p className="text-xs text-slate-500 px-4">
                          Upload da Imagem
                          <br />
                          <span className="opacity-50">(3:4 Recomendado)</span>
                        </p>
                      </>
                    )}
                    <input
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setNewBookForm({ ...newBookForm, img: reader.result as string });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
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
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setNewBookForm({ ...newBookForm, pdf: file.name });
                        }
                      }}
                    />
                  </div>

                  {newBookForm.pdf && (
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-[#800000]">
                          Arquivo Selecionado
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 italic truncate">
                        {newBookForm.pdf}
                      </p>
                    </div>
                  )}
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
                        value={newBookForm.title}
                        onChange={(e) => setNewBookForm({ ...newBookForm, title: e.target.value })}
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
                        value={newBookForm.author}
                        onChange={(e) => setNewBookForm({ ...newBookForm, author: e.target.value })}
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
                      value={newBookForm.description}
                      onChange={(e) => setNewBookForm({ ...newBookForm, description: e.target.value })}
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
                      <select 
                        value={newBookForm.category}
                        onChange={(e) => setNewBookForm({ ...newBookForm, category: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-slate-400 focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all outline-none appearance-none"
                      >
                        <option value="">Selecione uma categoria</option>
                        {data.categories.map((cat: string) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
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
                    onClick={() => setActiveTab("livros")}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-[#800000] hover:bg-[#5a0000] text-white px-10 py-3 rounded-xl font-bold text-sm shadow-xl shadow-[#800000]/20 transition-all flex items-center gap-2"
                    type="button"
                    onClick={() => {
                      if (!newBookForm.title || !newBookForm.author) {
                        alert("Preencha o título e o autor.");
                        return;
                      }
                      const newBook = {
                        id: Date.now().toString(),
                        title: newBookForm.title,
                        author: newBookForm.author,
                        category: newBookForm.category || data.categories[0] || "Tudo",
                        img: newBookForm.img,
                        description: newBookForm.description
                      };
                      setData({ ...data, books: [newBook, ...data.books] });
                      setNewBookForm({ title: "", author: "", description: "", category: "", img: "", pdf: "" });
                      alert("Livro publicado com sucesso!");
                      setActiveTab("livros");
                    }}
                  >
                    <Upload className="w-5 h-5" />
                    Publicar Livro
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

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
            <button
              onClick={() => setActiveTab("livros")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${activeTab === "livros" ? "bg-[#800000] text-white" : "text-slate-400 hover:bg-[#0a0a0a] hover:text-white"}`}
            >
              <BookOpenText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Livros</span>
            </button>
            <button
              onClick={() => setActiveTab("categorias")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${activeTab === "categorias" ? "bg-[#800000] text-white" : "text-slate-400 hover:bg-[#0a0a0a] hover:text-white"}`}
            >
              <LayoutGrid className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Categorias</span>
            </button>
            <button
              onClick={() => setActiveTab("destaque")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${activeTab === "destaque" ? "bg-[#800000] text-white" : "text-slate-400 hover:bg-[#0a0a0a] hover:text-white"}`}
            >
              <Star className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Destaque</span>
            </button>
            <button
              onClick={() => setActiveTab("hotlistening")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${activeTab === "hotlistening" ? "bg-[#800000] text-white" : "text-slate-400 hover:bg-[#0a0a0a] hover:text-white"}`}
            >
              <Headphones className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Hot Listening</span>
            </button>
            <button
              onClick={() => setActiveTab("hero")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${activeTab === "hero" ? "bg-[#800000] text-white" : "text-slate-400 hover:bg-[#0a0a0a] hover:text-white"}`}
            >
              <ImageIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Hero Section</span>
            </button>
            <button
              onClick={() => setActiveTab("adicionar_livro")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${activeTab === "adicionar_livro" ? "bg-[#800000] text-white" : "text-slate-400 hover:bg-[#0a0a0a] hover:text-white"}`}
            >
              <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Adicionar Livro</span>
            </button>
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
              Painel de Controle
            </h2>
            <p className="text-xs text-slate-500">
              Gerencie todo o conteúdo da plataforma EROTIXXXS
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="bg-[#800000] hover:bg-[#5a0000] disabled:opacity-50 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-xl shadow-[#800000]/20 transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {isSaving ? "Salvando..." : "Salvar Alterações"}
            </button>
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
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
