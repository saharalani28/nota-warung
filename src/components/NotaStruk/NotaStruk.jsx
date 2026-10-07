import { rp } from "../../utils/format";
import "./NotaStruk.css";

export default function NotaStruk({ nama, baris, gula, catatan, total, lunas, noNota, onUlang }) {
  return (
    <aside className="nw-nota" aria-label="Nota pesanan">
      <h3>WARUNG KOPI SORE</h3>
      <p className="c">Nota #{String(noNota).padStart(3, "0")}</p>
      <div className="nw-row"><span>Atas nama</span><span>{nama.trim() || "-"}</span></div>
      <hr />
      {baris.length === 0 ? (
        <div className="nw-empty">Belum ada pesanan.<br />Tambahkan menu di sebelah.</div>
      ) : (
        baris.map((b) => (
          <div className="nw-row" key={b.id}>
            <span>{b.n}x {b.nama}</span>
            <span>{rp(b.n * b.harga)}</span>
          </div>
        ))
      )}
      <hr />
      <div className="nw-row"><span>Manis</span><span>{gula}</span></div>
      {catatan.trim() && <div className="nw-row"><span>Catatan</span><span>{catatan}</span></div>}
      <hr />
      <div className="nw-row nw-tot"><span>TOTAL</span><span>{rp(total)}</span></div>
      {lunas && <div className="nw-stamp">LUNAS</div>}
      {lunas && <button className="nw-again" onClick={onUlang}>Buat pesanan baru</button>}
    </aside>
  );
}
