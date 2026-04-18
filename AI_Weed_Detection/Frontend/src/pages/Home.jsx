import { ArrowRight, Cpu, Target, HardDrive, WifiOff } from "lucide-react";

export default function Home({ onNavigate }) {
  return (
    <section className="page-card">

      <div className="section-heading" style={{ textAlign: "left", paddingBottom: "2.5rem", borderBottom: "1px solid var(--line)" }}>
        <h2 className="hero-title" style={{ maxWidth: "1000px", margin: "0 0 1.5rem 0", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          Smart Weed Detection for Precision Agriculture Using Lightweight Machine Learning Models
        </h2>
        <p className="lead" style={{ maxWidth: "1000px", margin: 0, fontSize: "1.15rem", color: "var(--muted)", textAlign: "justify"}}>
          A highly optimized deep learning pipeline is designed for real-time deployment on edge devices such as agricultural drones and rovers. It combines lightweight models to achieve high accuracy with low computational cost, enabling fast and efficient on-device weed detection. The system is built for minimal latency, energy efficiency, and reliable performance in real-world farming environments, supporting scalable and practical precision agriculture solutions.
        </p>
      </div>

      <div className="advanced-hero" style={{ marginTop: "3rem", alignItems: "flex-start" }}>

        <div className="hero-copy" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

          <div>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "1rem" }}>
              Research Abstract
            </h3>
            <p className="lead secondary-copy" style={{ fontSize: "1.05rem", lineHeight: "1.8", margin: 0 }}>
              Traditional weed control methods rely on manual inspection or blanket herbicide spraying, which are highly inefficient and environmentally damaging.
            </p>
          </div>

          <div className="highlight-text" style={{ padding: "1.5rem", background: "var(--surface-strong)", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent)", marginTop: 0 }}>
            <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text)" }}>
              We propose a highly optimized, lightweight deep learning pipeline explicitly designed for real-time edge deployment. By utilizing multi-stage classification and model quantization, our framework achieves real-time inference on edge hardware without sacrificing precision.
            </p>
          </div>

          <div className="hero-actions" style={{ marginTop: "0.5rem" }}>
            <button className="btn primary" onClick={() => onNavigate("architecture")}>
              <ArrowRight size={18} />
              Explore Architecture
            </button>
            <button className="btn ghost" onClick={() => onNavigate("demo")}>
              <Cpu size={18} />
              Run Local Demo
            </button>
          </div>
        </div>

        <div className="hero-side" style={{ display: "grid", gap: "1.5rem", background: "transparent", border: "none", padding: 0 }}>

          <div className="feature-card" style={{ background: "var(--surface-strong)", padding: "1.75rem", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <div style={{ padding: "12px", background: "var(--accent-soft)", borderRadius: "14px", display: "inline-flex" }}>
              <HardDrive size={24} color="var(--accent)" />
            </div>
            <div>
              <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "1.3rem", marginBottom: "0.5rem", color: "var(--text)" }}>Edge Bottleneck Solved</h4>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.6" }}>
                Standard heavy CNNs fail on field-deployed hardware due to latency constraints. We overcome this using heavily pruned, quantized architectures.
              </p>
            </div>
          </div>

          <div className="feature-card" style={{ background: "var(--surface-strong)", padding: "1.75rem", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <div style={{ padding: "12px", background: "var(--accent-soft)", borderRadius: "14px", display: "inline-flex" }}>
              <Target size={24} color="var(--accent)" />
            </div>
            <div>
              <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "1.3rem", marginBottom: "0.5rem", color: "var(--text)" }}>Targeted Eradication</h4>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.6" }}>
                Significantly reduces chemical runoff by accurately localizing and identifying weed species at their absolute earliest growth stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}