import { Camera, Focus, Network, Sprout, Terminal } from "lucide-react";

export default function Architecture() {
  return (
    <section className="page-card">
      <div className="section-heading" style={{ textAlign: "left", paddingBottom: "2.5rem", borderBottom: "1px solid var(--line)" }}>
        <h2 className="hero-title" style={{ margin: "0 0 1.5rem 0", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          Multi-Stage Edge Architecture
        </h2>
        <p className="lead" style={{ maxWidth: "800px", margin: 0, fontSize: "1.15rem", color: "var(--muted)", textAlign: "justify" }}>
          A lightweight AI pipeline designed specifically for real-time weed detection, classification, and growth-stage estimation in computationally constrained agricultural environments.
        </p>
      </div>

      <div className="arch-flow-modern" style={{ marginTop: "3rem" }}>
        <div className="arch-box input-box" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", padding: "2rem", border: "1px solid var(--accent)" }}>
          <Camera size={32} color="var(--accent)" style={{ margin: "0 auto" }} />
          <span style={{ fontSize: "0.85rem", fontWeight: "700", letterSpacing: "0.1em", color: "var(--muted)" }}>INPUT</span>
          <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.4rem", margin: 0 }}>Field Image</h3>
          <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.6" }}>
            Captured directly from drone or rover cameras in variable real-world farming conditions.
          </p>
        </div>

        <div className="arch-stage-group">
          <div className="arch-stage-card stage1" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "1.75rem", border: "1px solid var(--accent)" }}>
            <div style={{ padding: "10px", background: "var(--surface-strong)", borderRadius: "12px", border: "1px solid var(--line)", flexShrink: 0 }}>
              <Focus size={24} color="var(--accent)" />
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", color: "var(--accent)", textTransform: "uppercase" }}>Stage 1 • Localization</span>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.15rem", margin: "0.4rem 0" }}>EfficientDet-D0</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.6", textAlign: "justify" }}>
                Rapidly scans the frame and localizes vegetation regions using multi-scale features, effectively filtering out barren soil and reducing downstream compute.
              </p>
            </div>
          </div>

          <div className="arch-stage-card stage2" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "1.75rem", border: "1px solid var(--accent)" }}>
            <div style={{ padding: "10px", background: "var(--surface-strong)", borderRadius: "12px", border: "1px solid var(--line)", flexShrink: 0 }}>
              <Network size={24} color="var(--accent)" />
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", color: "var(--accent)", textTransform: "uppercase" }}>Stage 2 • Classification</span>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.15rem", margin: "0.4rem 0" }}>MobileNetV3</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.6", textAlign: "justify" }}>
                Processes the localized bounding boxes utilizing depthwise separable convolutions to identify the exact weed species with a minimal memory footprint.
              </p>
            </div>
          </div>

          <div className="arch-stage-card stage3" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "1.75rem", border: "1px solid var(--accent)" }}>
            <div style={{ padding: "10px", background: "var(--surface-strong)", borderRadius: "12px", border: "1px solid var(--line)", flexShrink: 0 }}>
              <Sprout size={24} color="var(--accent)" />
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", color: "var(--accent)", textTransform: "uppercase" }}>Stage 3 • Phenotyping</span>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.15rem", margin: "0.4rem 0" }}>YOLOv8n</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.6", textAlign: "justify" }}>
                A streamlined prediction head estimates the morphological state (early, mid, or late growth stage) to determine the precise herbicide volume required.
              </p>
            </div>
          </div>
        </div>

        <div className="arch-box output-box" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", padding: "2rem" }}>
          <Terminal size={32} color="var(--accent)" style={{ margin: "0 auto" }} />
          <span style={{ fontSize: "0.85rem", fontWeight: "700", letterSpacing: "0.1em", color: "var(--accent-hover)" }}>OUTPUT</span>
          <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.4rem", margin: 0, color: "var(--text)" }}>Actuator Command</h3>
          <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text)", lineHeight: "1.6" }}>
            Outputs bounding box coordinates, species label, growth stage, and target confidence score to the hardware relay.
          </p>
        </div>
      </div>

      <article className="architecture-figure-card ultra" style={{ marginTop: "4rem", padding: "2.5rem", background: "var(--surface-strong)" }}>
        <div className="plot-copy" style={{ textAlign: "center", marginBottom: "2rem", maxWidth: "100%", marginInline: "auto" }}>
          <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.8rem", margin: "0 0 0.5rem 0" }}>End-to-End Workflow Topology</h3>
          <p className="figure-caption" style={{ fontSize: "1rem", color: "var(--text)" }}>
            Fig 1. Integrated pipeline combining localization, classification, and growth-stage estimation.
          </p>
        </div>

        <div className="plot-frame architecture-frame" style={{ border: "none", background: "transparent", margin: 0 }}>
          <img src="/figures/arch.jpeg" alt="End to End Workflow Architecture" style={{ borderRadius: "var(--radius-md)", border: "3px solid var(--accent)" }} />
        </div>
      </article>
    </section>
  );
}