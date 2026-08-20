export default function BlobBackground() {
  return (
    <>
      <div className="blob-bg" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="cursor-dot" aria-hidden="true"></div>
      <div className="cursor-ring" aria-hidden="true"></div>
    </>
  );
}
