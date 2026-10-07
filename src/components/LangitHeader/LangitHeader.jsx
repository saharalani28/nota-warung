import "./LangitHeader.css";

const BINTANG = [[8,20],[18,60],[27,28],[38,75],[52,18],[63,50],[74,24],[85,66],[93,34]];

export default function LangitHeader({ gelap, onGanti }) {
  return (
    <header className="nw-sky">
      {BINTANG.map(([kiri, atas], i) => (
        <i key={i} className="nw-star" style={{ left: kiri + "%", top: atas + "px" }} />
      ))}
      <div className="nw-title">
        Warung Kopi Sore
        <small>{gelap ? "Buka sampai tengah malam" : "Selamat pagi, mau pesan apa?"}</small>
      </div>
      <button
        className="nw-orb"
        onClick={onGanti}
        aria-pressed={gelap}
        aria-label={gelap ? "Ganti ke mode terang (pagi)" : "Ganti ke mode gelap (malam)"}
      />
      <div className="nw-hills" />
    </header>
  );
}
