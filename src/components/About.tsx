"use client";

export default function About() {
  return (
    <section id="about" className="section-container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "4rem 2rem" }}>
      <div style={{ width: "100%", display: "flex", gap: "4rem", alignItems: "center", flexWrap: "wrap" }}>
        
        <div style={{ flex: "1 1 400px" }}>
          <h4 style={{ fontSize: "0.875rem", color: "#0096ff", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1rem" }}>About TeleDrive</h4>
          <h2 style={{ fontSize: "3rem", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Harness the power of Telegram.
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", opacity: 0.8 }}>
            Telegram offers unparalleled cloud storage capabilities through private channels. TeleDrive bridges the gap, giving you a beautiful, modern interface to interact with your Telegram-backed files as if they were on a local drive.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              "Media Viewer — Full-screen image & video playback",
              "Native Video Streaming — Instant scrubbing via HTTP Range requests",
              "Real-time Progress — WebSockets for instant tracking",
              "Intelligent Local Caching — Loads files instantly once downloaded",
              "Self-hosted — Your data stays on your Telegram account"
            ].map((feature, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(0, 150, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0096ff" }}>✓</div>
                <span style={{ opacity: 0.9 }}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: "1 1 400px", display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(2, 1fr)" }}>
          {/* Dashboard stat cards */}
          <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.5rem" }}>4</div>
            <div style={{ fontSize: "0.875rem", color: "#8c8f99", textTransform: "uppercase", letterSpacing: "1px" }}>Photos</div>
          </div>
          <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.5rem" }}>1</div>
            <div style={{ fontSize: "0.875rem", color: "#8c8f99", textTransform: "uppercase", letterSpacing: "1px" }}>Videos</div>
          </div>
          <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gridColumn: "span 2" }}>
            <div style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.5rem" }}>1</div>
            <div style={{ fontSize: "0.875rem", color: "#8c8f99", textTransform: "uppercase", letterSpacing: "1px" }}>Collections</div>
          </div>
        </div>

      </div>
    </section>
  );
}
