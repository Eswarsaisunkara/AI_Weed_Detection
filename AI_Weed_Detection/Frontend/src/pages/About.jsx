import { Database, Settings, Image as ImageIcon, Maximize, Cpu, Grid } from "lucide-react";

export default function About() {
  return (
    <section className="page-card">
      
      <div className="section-heading" style={{ textAlign: "left", paddingBottom: "2.5rem", borderBottom: "1px solid var(--line)" }}>
        <h2 className="hero-title" style={{ margin: "0 0 1.5rem 0", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          Dataset & System Preparation
        </h2>
        <p className="lead" style={{ maxWidth: "800px", margin: 0, fontSize: "1.15rem", color: "var(--muted)", textAlign: "justify" }}>
          To achieve robust real-time inference on agricultural rovers, our models undergo rigorous training on diverse field data followed by a strict edge-optimization pipeline.
        </p>
      </div>

      <div className="about-block" style={{ marginTop: "3rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <Database size={28} color="var(--accent)" />
          <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.8rem", margin: 0 }}>
            The DeepWeeds Data Corpus
          </h3>
        </div>
        
        <div className="advanced-hero" style={{ alignItems: "stretch", gap: "2rem" }}>
          <div className="hero-copy" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p className="lead secondary-copy" style={{ margin: 0, textAlign: "justify", lineHeight: "1.8" }}>
              The multi-stage framework is validated against the DeepWeeds dataset. Unlike synthetic datasets, these images were captured in situ across multiple pastoral environments. The presence of harsh lighting variations, heavy occlusion, and dense background clutter makes it the ideal benchmark for testing real-world edge deployment.
            </p>
            <a 
              href="https://www.kaggle.com/datasets/imsparsh/deepweeds" 
              target="_blank" 
              rel="noreferrer"
              style={{ display: "inline-block", marginTop: "1.5rem", color: "var(--accent)", fontWeight: "600", textDecoration: "none", borderBottom: "2px solid var(--accent-soft)", width: "fit-content", paddingBottom: "2px" }}
            >
              View Dataset on Kaggle →
            </a>
          </div>

          <ul className="detail-list" style={{ margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", padding: 0 }}>
            <li style={{ background: "var(--surface-strong)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <ImageIcon size={20} color="var(--accent)" />
              <strong style={{ color: "var(--text)", fontSize: "1.2rem" }}>17,509</strong>
              <span>High-Res RGB Images</span>
            </li>
            <li style={{ background: "var(--surface-strong)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Grid size={20} color="var(--accent)" />
              <strong style={{ color: "var(--text)", fontSize: "1.2rem" }}>8 + 1</strong>
              <span>Weed Species + Negative Class</span>
            </li>
            <li style={{ background: "var(--surface-strong)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Maximize size={20} color="var(--accent)" />
              <strong style={{ color: "var(--text)", fontSize: "1.2rem" }}>70 / 15 / 15</strong>
              <span>Train / Val / Test Split</span>
            </li>
            <li style={{ background: "var(--surface-strong)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Cpu size={20} color="var(--accent)" />
              <strong style={{ color: "var(--text)", fontSize: "1.2rem" }}>In Situ</strong>
              <span>Real-world pastoral capture</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-block" style={{ marginTop: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <Settings size={28} color="var(--accent)" />
          <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.8rem", margin: 0 }}>
            Edge Optimization Pipeline
          </h3>
        </div>
        
        <p className="lead secondary-copy" style={{ textAlign: "justify", maxWidth: "800px", marginBottom: "2rem" }}>
          Raw data cannot be fed directly into lightweight microprocessors. The dataset undergoes a strict preprocessing regime to counter field variables and ensure hardware compatibility.
        </p>

        <div className="prep-grid-modern">
          <div className="prep-step" style={{ borderColor: "var(--accent)" }}>
            <span style={{ fontSize: "2.5rem", color: "var(--accent)", fontWeight: "800", display: "block", marginBottom: "0.5rem" }}>01</span>
            <h4 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", marginBottom: "0.5rem" }}>CLAHE Enhancement</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.6", textAlign: "justify" }}>
              Contrast Limited Adaptive Histogram Equalization is applied to normalize harsh field lighting and deep shadows, exposing critical leaf textures.
            </p>
          </div>

          <div className="prep-step" style={{ borderColor: "var(--accent)" }}>
            <span style={{ fontSize: "2.5rem", color: "var(--accent)", fontWeight: "800", display: "block", marginBottom: "0.5rem" }}>02</span>
            <h4 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Advanced Augmentation</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.6", textAlign: "justify" }}>
              Mosaic and MixUp augmentation techniques are utilized to artificially expand the dataset and counter severe class imbalance among rare weed species.
            </p>
          </div>

          <div className="prep-step" style={{ borderColor: "var(--accent)" }}>
            <span style={{ fontSize: "2.5rem", color: "var(--accent)", fontWeight: "800", display: "block", marginBottom: "0.5rem" }}>03</span>
            <h4 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Spatial Downsampling</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.6", textAlign: "justify" }}>
              Tensors are uniformly downsampled to target resolutions (e.g., 416x416), drastically reducing the required Multiply-Accumulate (MAC) operations for inference.
            </p>
          </div>

          <div className="prep-step" style={{ borderColor: "var(--accent)" }}>
            <span style={{ fontSize: "2.5rem", color: "var(--accent)", fontWeight: "800", display: "block", marginBottom: "0.5rem" }}>04</span>
            <h4 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text)" }}>Calibration Extraction</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.6", textAlign: "justify" }}>
              A highly representative subset of images is isolated to map activation ranges, enabling zero-loss INT8 Post-Training Quantization (PTQ).
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}