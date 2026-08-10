"use client";

export default function Improvize() {
  return (
    <section className="section-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <div className="glass-panel" style={{ padding: "4rem", maxWidth: "800px", width: "100%", background: "linear-gradient(135deg, rgba(20,21,26,0.8), rgba(0,20,40,0.6))", border: "1px solid rgba(0, 150, 255, 0.2)", position: "relative", overflow: "hidden" }}>
        
        <div style={{ position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(circle at 50% 50%, rgba(0, 150, 255, 0.1) 0%, transparent 50%)", zIndex: 0, animation: "spin 20s linear infinite" }}></div>
        
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "3.5rem", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Ready to <span style={{ color: "#0096ff" }}>Improvize</span>?
          </h2>
          <p style={{ fontSize: "1.25rem", opacity: 0.8, marginBottom: "3rem", maxWidth: "500px", margin: "0 auto 3rem auto" }}>
            Join the community, contribute to the open-source project, or just enjoy your new unlimited cloud storage.
          </p>
          
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://github.com/adil-rahman-3063/TeleDrive" target="_blank" rel="noreferrer" className="glass-btn glass-btn-primary" style={{ padding: "16px 40px", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "12px" }}>
              <svg height="24" width="24" viewBox="0 0 16 16" fill="white">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              Star on GitHub
            </a>
            <a href="#" className="glass-btn" style={{ padding: "16px 40px", fontSize: "1.1rem" }}>
              Documentation
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
