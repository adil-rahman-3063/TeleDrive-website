"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

export default function GithubActivity() {
  const [commit, setCommit] = useState<Commit | null>(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/adil-rahman-3063/TeleDrive/commits?per_page=1");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setCommit(data[0]);
          }
        }
      } catch (err) {
        console.error("Error fetching commits:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCommits();
  }, []);

  useGSAP(() => {
    if (!loading && commit && visible) {
      gsap.fromTo(
        ".github-notification",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.5)",
          delay: 1 // slight delay so it pops up after page load
        }
      );
    }
  }, [loading, commit, visible]);

  if (loading || !commit || !visible) return null;

  return (
    <div
      className="github-notification"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 1000,
        maxWidth: "350px",
        background: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(12px)",
        borderRadius: "16px",
        padding: "1.25rem",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.2rem" }}>🚀</span>
          <span style={{ fontWeight: 600, color: "#fff", fontSize: "0.95rem" }}>Latest Update</span>
        </div>
        <button
          onClick={() => setVisible(false)}
          style={{
            background: "transparent",
            border: "none",
            color: "#aaa",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            transition: "background 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
        >
          ✕
        </button>
      </div>

      <a
        href={commit.html_url}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          marginTop: "0.25rem",
          display: "block"
        }}
      >
        <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.95rem", color: "#60a5fa", lineHeight: "1.4" }}>
          {commit.commit.message.split("\n")[0]}
        </h4>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#888" }}>
          <span>by {commit.commit.author.name}</span>
          <span>{new Date(commit.commit.author.date).toLocaleDateString()}</span>
        </div>
      </a>
    </div>
  );
}
