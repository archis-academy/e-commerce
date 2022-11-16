import "./top-bar.scss";
export default function TopBar() {
  
  return (
    <div className="topBar">
      <div className="text">TÜM SİPARİŞLERDE ÜCRETSİZ KARGO</div>
      <div className="language">
        TR
        <button>
          <img src="/assets/DownIcon.png" />
        </button>
      </div>
    </div>
  );
}
