"use client";

export default function Download() {
  return (
    <section id="download" className="section-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h4 style={{ fontSize: "0.875rem", color: "#0096ff", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1rem" }}>Installation</h4>
        <h2 style={{ fontSize: "3rem", lineHeight: 1.2, marginBottom: "1.5rem" }}>
          Ready to get started?
        </h2>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, maxWidth: "600px", margin: "0 auto" }}>
          Setting up TeleDrive is a breeze. Connect your Telegram account and start managing your cloud files instantly.
        </p>
      </div>

      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
        
        {/* Step 1 */}
        <div className="glass-panel" style={{ flex: "1 1 300px", maxWidth: "350px", padding: "2.5rem", position: "relative" }}>
          <div style={{ position: "absolute", top: "-20px", left: "24px", width: "40px", height: "40px", background: "linear-gradient(135deg, #0096ff, #0064ff)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", boxShadow: "0 4px 12px rgba(0, 150, 255, 0.4)" }}>
            1
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", marginTop: "1rem" }}>Download App</h3>
          <p style={{ opacity: 0.8, marginBottom: "2rem" }}>Get the latest release for your operating system.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <button className="glass-btn" style={{ width: "100%" }}>macOS (Intel/Apple Silicon)</button>
            <button className="glass-btn" style={{ width: "100%" }}>Windows (x64)</button>
            <button className="glass-btn" style={{ width: "100%" }}>Linux (AppImage)</button>
          </div>
        </div>

        {/* Step 2 */}
        <div className="glass-panel" style={{ flex: "1 1 300px", maxWidth: "350px", padding: "2.5rem", position: "relative" }}>
          <div style={{ position: "absolute", top: "-20px", left: "24px", width: "40px", height: "40px", background: "linear-gradient(135deg, #0096ff, #0064ff)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", boxShadow: "0 4px 12px rgba(0, 150, 255, 0.4)" }}>
            2
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", marginTop: "1rem" }}>Configure Bot</h3>
          <p style={{ opacity: 0.8, marginBottom: "2rem" }}>Create a new bot via BotFather in Telegram and obtain your API Token.</p>
          <div className="glass-panel" style={{ padding: "1rem", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", fontFamily: "monospace", fontSize: "0.875rem", color: "#8c8f99", wordBreak: "break-all" }}>
            123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
          </div>
        </div>

        {/* Step 3 */}
        <div className="glass-panel" style={{ flex: "1 1 300px", maxWidth: "350px", padding: "2.5rem", position: "relative" }}>
          <div style={{ position: "absolute", top: "-20px", left: "24px", width: "40px", height: "40px", background: "linear-gradient(135deg, #0096ff, #0064ff)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", boxShadow: "0 4px 12px rgba(0, 150, 255, 0.4)" }}>
            3
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", marginTop: "1rem" }}>Connect Channel</h3>
          <p style={{ opacity: 0.8, marginBottom: "2rem" }}>Create a private channel, add your bot as an admin, and link it in the app.</p>
          <div style={{ width: "100%", height: "120px", background: "linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(255,255,255,0.2)" }}>
            <span style={{ fontSize: "2rem" }}>🚀</span>
          </div>
        </div>

      </div>
    </section>
  );
}
