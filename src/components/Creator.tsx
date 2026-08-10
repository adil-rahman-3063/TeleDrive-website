"use client";

export default function Creator() {
  return (
    <section id="creator" className="section-container" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: "6rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h4 style={{ fontSize: "0.875rem", color: "#0096ff", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1rem" }}>Creator</h4>
        <h2 style={{ fontSize: "3rem", lineHeight: 1.2, marginBottom: "1.5rem" }}>
          Built with Passion
        </h2>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, maxWidth: "600px", margin: "0 auto" }}>
          TeleDrive was created by Adil Rahiman. If you find this project useful and want to support its ongoing development, consider making a donation!
        </p>
      </div>

      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", width: "100%", maxWidth: "800px" }}>
        
        {/* Creator Info */}
        <div className="glass-panel" style={{ flex: "1 1 300px", padding: "3rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #0096ff, #0064ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", marginBottom: "1.5rem", boxShadow: "0 4px 12px rgba(0, 150, 255, 0.4)" }}>
            👨‍💻
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Adil Rahiman</h3>
          <p style={{ opacity: 0.8, marginBottom: "2rem" }}>Creator & Lead Developer</p>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a href="https://github.com/adil-rahman-3063" target="_blank" rel="noreferrer" className="glass-btn" style={{ padding: "8px 16px", fontSize: "0.875rem", flex: "1 1 calc(50% - 0.5rem)" }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/adil-rahiman-3815b5290/" target="_blank" rel="noreferrer" className="glass-btn" style={{ padding: "8px 16px", fontSize: "0.875rem", flex: "1 1 calc(50% - 0.5rem)" }}>
              LinkedIn
            </a>
            <a href="https://x.com/adilrahmanms" target="_blank" rel="noreferrer" className="glass-btn" style={{ padding: "8px 16px", fontSize: "0.875rem", flex: "1 1 calc(50% - 0.5rem)" }}>
              X (Twitter)
            </a>
            <a href="https://www.instagram.com/adil__rahman_" target="_blank" rel="noreferrer" className="glass-btn" style={{ padding: "8px 16px", fontSize: "0.875rem", flex: "1 1 calc(50% - 0.5rem)" }}>
              Instagram
            </a>
          </div>
        </div>

        {/* Support Options */}
        <div className="glass-panel" style={{ flex: "1 1 300px", padding: "3rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #ff007a, #9900ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", marginBottom: "1.5rem", boxShadow: "0 4px 12px rgba(255, 0, 122, 0.4)" }}>
            💖
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Support the Project</h3>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
            <div style={{ background: "rgba(0,0,0,0.3)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ fontSize: "0.875rem", opacity: 0.8, marginBottom: "0.25rem" }}>PayPal</p>
              <code style={{ color: "#0096ff" }}>adilrahman3063@gmail.com</code>
            </div>
            
            <div style={{ background: "rgba(0,0,0,0.3)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ fontSize: "0.875rem", opacity: 0.8, marginBottom: "0.25rem" }}>Google Pay</p>
              <p style={{ fontSize: "0.875rem" }}>Check GitHub for QR Code</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
