export default function AdminFooter() {
  return (
    <footer className="n-panel">
      <section className="">
        <h1 className="d:none">푸터</h1>
        <p className="d:flex jc:center color:base-3">
          ⓒ {new Date().getFullYear()} Rland. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
