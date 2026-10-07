import { rp } from "../../utils/format";
import "./ItemMenu.css";

export default function ItemMenu({ item, jumlah, onUbah, terkunci }) {
  return (
    <div className="nw-item">
      <div>
        <b>{item.nama}</b>
        <span>{rp(item.harga)}</span>
      </div>
      <div className="nw-step">
        <button type="button" onClick={() => onUbah(item.id, -1)} aria-label={`Kurangi ${item.nama}`} disabled={terkunci}>-</button>
        <output aria-live="polite">{jumlah}</output>
        <button type="button" onClick={() => onUbah(item.id, 1)} aria-label={`Tambah ${item.nama}`} disabled={terkunci}>+</button>
      </div>
    </div>
  );
}
