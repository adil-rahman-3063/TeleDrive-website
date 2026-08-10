"use client";

export default function Hero() {
  return (
    <section className="section-container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: "800px" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(255, 255, 255, 0.05)",
          padding: "8px 16px",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.1)",
          marginBottom: "2rem"
        }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0096ff", boxShadow: "0 0 10px #0096ff" }}></div>
          <span style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>Backend Connected</span>
        </div>
        
        <h1 style={{ fontSize: "4rem", lineHeight: 1.1, marginBottom: "1.5rem", background: "linear-gradient(to right, #ffffff, #8c8f99)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Your Telegram-backed<br />library, at a glance.
        </h1>
        
        <p style={{ fontSize: "1.25rem", marginBottom: "3rem", opacity: 0.8, maxWidth: "600px", margin: "0 auto 3rem auto" }}>
          Upload, organize, and stream your photos, videos, and files — backed by Telegram's free, unlimited storage. Self-hosted. Open source. No subscription required.
        </p>
        
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="#download" className="glass-btn glass-btn-primary" style={{ padding: "16px 32px", fontSize: "1.1rem" }}>
            Get Started
          </a>
          <a href="#about" className="glass-btn" style={{ padding: "16px 32px", fontSize: "1.1rem" }}>
            Learn More
          </a>
        </div>
      </div>
      
      {/* Decorative glass elements mimicking the dashboard in the screenshot */}
      <div className="glass-panel" style={{ position: "absolute", top: "15%", left: "5%", width: "250px", padding: "1.5rem", transform: "rotate(-5deg)", opacity: 0.7 }}>
        <h4 style={{ fontSize: "0.75rem", color: "#8c8f99", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Storage Across Channels</h4>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Effectively unlimited</h3>
        <div style={{ display: "flex", gap: "4px", height: "40px", alignItems: "flex-end" }}>
          {[40, 70, 45, 90, 60, 80, 50, 100, 75, 65].map((h, i) => (
            <div key={i} style={{ flex: 1, background: "linear-gradient(to top, rgba(255,100,255,0.2), rgba(0,150,255,0.4))", height: `${h}%`, borderRadius: "2px" }}></div>
          ))}
        </div>
      </div>
      
      <div className="glass-panel" style={{ position: "absolute", bottom: "20%", right: "5%", width: "250px", padding: "1.5rem", transform: "rotate(5deg)", opacity: 0.7 }}>
        <h4 style={{ fontSize: "0.75rem", color: "#8c8f99", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Appearance</h4>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Dark interface</h3>
        <p style={{ fontSize: "0.875rem", marginBottom: "1rem" }}>Matches your system by default, or pin it manually.</p>
        <div style={{ width: "40px", height: "24px", background: "#0096ff", borderRadius: "12px", position: "relative" }}>
          <div style={{ position: "absolute", top: "2px", right: "2px", width: "20px", height: "20px", background: "white", borderRadius: "50%" }}></div>
        </div>
      </div>
    </section>
  );
}
