import { NextResponse } from "next/server";

// In-memory store (persists across API calls in development, but resets on server restart)
let store = {
  hero: {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkWYPpnIfCStPaOT1UWjtnfzmtztjhgC-SF4SRMVjnEMoas11_Xbc_pQly0UEntHqXfq9Ew2XU4bP0AwpV-DlRZqGJNSisfIlDUr-o2dqV09zggAHoiOMwXHW8zfBbxHCLOnJ3NY8Jm9oRW_37Sg6gFbBTpEKhf5bfUZs0yX2YBNiinPfSAX-xv57zPENNrFBgUForSCcaUnhXc8-KjDhM_f75etfAIP9DV2TYQtPiKBccBH7a5DdZ6bpFx_pir0UbKPf8L1Dry5w"
  },
  categories: ["Tudo", "Dark Romance", "Contos Eróticos", "Poesia Erótica"],
  books: [
    {
      id: "1",
      title: "Sedução à Meia-Noite",
      author: "Elena Valmont",
      category: "Dark Romance",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNtWZo2PqmSHKPyX9tqNhYsYjs3qznORXtMg0vcBy4kEcl3LUdipPN9rHLGE2S4fkPYNyFKjSs_t5G6RfCouiM3gwdTpBiu68LL0QQ2UPimvCd8X0qaW4V8Lae6Nc-k8c1XWc_z3OmWaZnJtPhH-EbN3AO1MVJPuekpkND9GoHABWRrOLZcDaoZqgnUuKTz2MOGC5FGQH3OANR9DEsw6h541_LrQWYxz0m-N0OG-LdetVBpXocgxRjjfFwr-68yRohqznDJkFU6t0",
    },
    {
      id: "2",
      title: "Sombras do Desejo",
      author: "Lucas Thorne",
      category: "Dark Romance",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoTBomir29GOq6xLTICSwIruabo4r1aQdLHjl8M-0JzRwWBCQlrYuD5DIknj1dDjyevP2nZklC0doSxk82PJnWB2cau5BYZiLuEfliuZXuPx_mbP4-q8mYC0PMIiTiDRXnbk3Q2pMZusFxqR2fZVLkZev4vjs67Tsy3RvmRPiigK5ehMrJ6PcBgv74os46KS_ps--jo1F_g1vx-nHtONsV7W-CdELSq-DfX4QnX8_ySIBKSFLiAic-6JjQJ49WFqWcvppRilAtg4w",
    },
    {
      id: "3",
      title: "O Pacto",
      author: "Sofia Blackwood",
      category: "Contos Eróticos",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkQcFB-2zWXpdM7rgp2VRCyV3QPrZbsL57mq-aRtMCGv7g4ElRaJwD-sGvf0sWoRa_sNgdHKKEp-DS8oFQfD6naotODD-Fjn3wrzvSjuUigwXeu97nlrWI0nuuf55edgoIOpqJt7MOjgxQGdhZivr0tP_DswgFBZOkX98I2BIH_zyVgzfvO1B2xI0f0G13dJgMavb0XyMEWfNDAE1PgiooE3sP5_3F4tkT-DBmmVS-KeV_8kwhDkEBFXAUQu2b7m6Yj3ypzgeg_QI",
    },
    {
      id: "4",
      title: "Encontros Proibidos",
      author: "Marcus Volkov",
      category: "Contos Eróticos",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUQAgWw1ED_wBza_os2-48hs98YDfqGRxroWsnw_sXq7k5R7oltoBV-auZ9m0-eJxcZ8EWMRo7SwYwTmtB1aJCq0uJP1fwYHFLIZFkBdPLXcBAFhoQoBcFNl25DhBwaUHxQx9CSGH5gFUMFPnSH-c5Aa4u66so0-Z36IXXP3qz1Ny3aUMci3qkKxD7M7K9FdJDSiC6O6-j8yZpOy9W1JwvBhu5FCfS32mAiJS8wbDw4Qcnc3ENxii2O_SKrQCcLlQcLYMBzoypS0Y",
    },
    {
      id: "5",
      title: "Versos da Carne",
      author: "Isabella Noir",
      category: "Poesia Erótica",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgVtrm_eOHx_p2qd974xlkVGN1K7_isbTMlnq5NkFJFiupjuDVKDc8BCZH2kcnb_G533aE_i37g7z0GEROO7QNUdup3fzsS1G676zvnl4N3SCdIgz9rDiq2ffcvObWtyAZ_laJjB1dZyfvdKVWrhJwKL6l3ZakUICEeb-lP1-MocCpq1DqcaGJ-xB5JnWsNDbneY1XVODOME4EFFj-vEdUgzBUI0BHxz9ls1zV9DDjYW5p-Q8zgjxiFvabZGySiTjCSliarGdd0po",
    },
    {
      id: "6",
      title: "Pecados Noturnos",
      author: "Marco Silva",
      category: "Contos Eróticos",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9I7Efp6C163sDemrrL15lCaeVbZ9GtFuyM0bpamc3_LAwosgsEr-t5w3rkK8jGjlfQuOcWtUDpcv_x1g_PTt-sf-y9LRo0ByOWuQ0IcNI7Kc0Mjnw2UkJuDHOxtD2tQ4pXewgn3mfH4z9g8muXmee6dJZCPkWPadbmp0M1LjHiEV7YO0GcijP4suM-TOAN_oKbyETk9-ZzHE2Hp7eds_46eFHEY1TK67Lp-S7h_R7qDhruuhbJTmZBXclob1Ygh26aJpvuSSPen4",
    }
  ],
  featuredBook: {
    title: "Desejos Proibidos",
    author: "Elena V. Blackwood",
    description: "Em uma sociedade onde a repressão é a norma, Isabella descobre um clube secreto onde as fantasias mais obscuras ganham vida. Entre bailes de máscaras e encontros clandestinos, ela deve escolher entre a segurança de sua vida monótona e a perigosa atração de um estranho misterioso. Uma história de paixão avassaladora e segredos que podem destruir reputações.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB76PMeCOrsbrAM0v-Wta9vEyEObtaGpw082bEHn_vXL6KvaMD-CRq9tFEtntkXvv06H18UmRmOnjX47ssetYVxw7uXyYYJmJxYlz99Hl1Oe5chXFmn3X-wEMFRlY7Cf95cFHPLz7sUAuP-JNG0TTuLDb8EnqjBrkj6-pU8bOinJ98gJ32QIIwv-tQMz7vQity831RrCmCcqRN1CdFFTgcElcqbZRLXGaJXktMrzDFrAg8EQlLv8jZOy7IL_bzv6GF87kT8spNV_oY",
    category: "Romance Erótico"
  },
  hotListening: {
    title: "Hot Listening",
    description: "Uma experiência sensorial única. Serviço especial onde você pode ouvir os poemas originais da ErotiXXXs narrados com exclusividade. Deixe-se envolver pela sonoridade do desejo.",
    features: ["Áudio Imersivo", "Vozes Exclusivas", "Privacidade Total"],
    price: "20.000 Kz",
    unit: "/ SESSÃO",
    footerText: "Agendamento prévio necessário"
  }
};

export async function GET() {
  return NextResponse.json(store);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    store = { ...store, ...data };
    return NextResponse.json({ success: true, store });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid data" }, { status: 400 });
  }
}
