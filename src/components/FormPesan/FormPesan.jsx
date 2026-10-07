import ItemMenu from "../ItemMenu/ItemMenu";
import { MENU, GULA } from "../../data/menu";
import "./FormPesan.css";

export default function FormPesan({
  nama, setNama, qty, onUbah, gula, setGula, catatan, setCatatan, err, lunas, onKirim,
}) {
  return (
    <form className="nw-form" onSubmit={onKirim} noValidate>
      <h2>Pesan di sini</h2>

      <label className="nw-lab" htmlFor="nama" style={{ marginTop: 0 }}>Nama pemesan</label>
      <input id="nama" className="nw-in" value={nama} onChange={(e) => setNama(e.target.value)}
        placeholder="Contoh: Sahara" disabled={lunas} />

      <div className="nw-lab">Menu</div>
      {MENU.map((m) => (
        <ItemMenu key={m.id} item={m} jumlah={qty[m.id] || 0} onUbah={onUbah} terkunci={lunas} />
      ))}

      <div className="nw-lab">Tingkat manis</div>
      <div className="nw-gula" role="radiogroup">
        {GULA.map((g) => (
          <label key={g}>
            <input type="radio" name="gula" checked={gula === g} onChange={() => setGula(g)} disabled={lunas} />
            <span>{g}</span>
          </label>
        ))}
      </div>

      <label className="nw-lab" htmlFor="cat">Catatan</label>
      <textarea id="cat" className="nw-ta" rows={2} value={catatan} onChange={(e) => setCatatan(e.target.value)}
        placeholder="Misal: es batunya sedikit" disabled={lunas} />

      <p className="nw-err" role="alert">{err}</p>
      {!lunas && <button className="nw-btn" type="submit">Pesan sekarang</button>}
    </form>
  );
}
