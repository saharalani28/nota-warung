import { useState, useMemo } from "react";
import useTema from "./hooks/useTema";
import { MENU } from "./data/menu";
import LangitHeader from "./components/LangitHeader/LangitHeader";
import FormPesan from "./components/FormPesan/FormPesan";
import NotaStruk from "./components/NotaStruk/NotaStruk";
import "./styles/tema.css";

export default function App() {
  const { gelap, ganti } = useTema();
  const [nama, setNama] = useState("");
  const [qty, setQty] = useState({});
  const [gula, setGula] = useState("Normal");
  const [catatan, setCatatan] = useState("");
  const [err, setErr] = useState("");
  const [lunas, setLunas] = useState(false);
  const [noNota, setNoNota] = useState(1);

  const baris = useMemo(
    () => MENU.filter((m) => qty[m.id] > 0).map((m) => ({ ...m, n: qty[m.id] })),
    [qty]
  );
  const total = baris.reduce((s, b) => s + b.n * b.harga, 0);

  const ubahJumlah = (id, delta) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, (q[id] || 0) + delta) }));

  const kirim = (e) => {
    e.preventDefault();
    if (!nama.trim()) return setErr("Nama belum diisi, supaya barista bisa memanggil Anda.");
    if (!baris.length) return setErr("Pilih minimal satu menu.");
    setErr("");
    setLunas(true);
  };

  const pesanLagi = () => {
    setQty({});
    setCatatan("");
    setLunas(false);
    setNoNota((n) => n + 1);
  };

  return (
    <div className={`nw ${gelap ? "dark" : ""}`}>
      <LangitHeader gelap={gelap} onGanti={ganti} />
      <main className="nw-main">
        <FormPesan
          nama={nama} setNama={setNama} qty={qty} onUbah={ubahJumlah}
          gula={gula} setGula={setGula} catatan={catatan} setCatatan={setCatatan}
          err={err} lunas={lunas} onKirim={kirim}
        />
        <NotaStruk
          nama={nama} baris={baris} gula={gula} catatan={catatan}
          total={total} lunas={lunas} noNota={noNota} onUlang={pesanLagi}
        />
      </main>
    </div>
  );
}
