import { Table, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import sample1 from "../assets/sample1.png";
import sample2 from "../assets/sample2.png";
import sample3 from "../assets/sample3.png";

const samples = [
  { src: sample1, name: "Prickly Acacia" },
  { src: sample2, name: "Chinese Apple" },
  { src: sample3, name: "Siam Weed" },
];

const performanceRows = [
  ["YOLOv8n", "91.1", "90.5", "89.2", "90.8"],
  ["EfficientDet-D0", "89.0", "88.4", "87.3", "87.8"],
  ["MobileNetV3", "88.0", "87.1", "85.9", "86.5"],
  ["Proposed Model", "93.0", "91.9", "91.4", "92.2"],
];

const comparisonRows = [
  ["YOLOv9-tiny", "90.5", "89.3", "88.6", "89.4"],
  ["EfficientNet-lite", "89.2", "88.5", "87.7", "88.1"],
  ["YOLOv7-tiny", "88.6", "87.9", "86.2", "87.1"],
  ["MobileNetV2", "87.3", "86.7", "85.1", "86.0"],
  ["Graph CNN", "86.9", "85.3", "84.7", "85.0"],
  ["U-Net++", "85.8", "84.1", "83.5", "83.8"],
  ["ResNet50+FPN", "87.4", "86.4", "84.9", "85.6"],
  ["Proposed Model", "93.0", "91.9", "91.4", "92.2"],
];

function TableBlock({ title, caption, rows, icon: Icon }) {
  return (
    <article style={{ background: "var(--surface-strong)", borderRadius: "var(--radius-lg)", border: "1px solid var(--line)", padding: "2rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: caption ? "0.5rem" : "1.5rem" }}>
        {Icon && <Icon size={24} color="var(--accent)" />}
        <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.5rem", margin: 0 }}>{title}</h3>
      </div>
      
      {caption && (
        <p style={{ margin: "0 0 1.5rem 0", fontSize: "0.9rem", color: "var(--muted)", fontStyle: "italic" }}>
          {caption}
        </p>
      )}

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr>
              <th style={{ padding: "1rem", borderBottom: "2px solid var(--line)", color: "var(--accent)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.05em" }}>Model</th>
              <th style={{ padding: "1rem", borderBottom: "2px solid var(--line)", color: "var(--accent)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.05em" }}>Accuracy (%)</th>
              <th style={{ padding: "1rem", borderBottom: "2px solid var(--line)", color: "var(--accent)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.05em" }}>Precision (%)</th>
              <th style={{ padding: "1rem", borderBottom: "2px solid var(--line)", color: "var(--accent)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.05em" }}>Recall (%)</th>
              <th style={{ padding: "1rem", borderBottom: "2px solid var(--line)", color: "var(--accent)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.05em" }}>F1-Score (%)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isBest = row[0] === "Proposed Model";
              return (
                <tr key={row[0]} style={{ backgroundColor: isBest ? "var(--accent-soft)" : "transparent", transition: "background-color 0.2s ease" }}>
                  {row.map((cell, i) => (
                    <td key={`${row[0]}-${cell}`} style={{ padding: "1rem", borderBottom: "1px solid var(--line)", color: isBest ? "var(--accent)" : "var(--text)", fontWeight: isBest ? "700" : "400" }}>
                      {i === 0 && isBest ? (
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          {cell} <CheckCircle2 size={16} />
                        </div>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default function Results() {
  return (
    <section className="page-card">
      <div className="section-heading" style={{ textAlign: "left", paddingBottom: "2.5rem", borderBottom: "1px solid var(--line)" }}>
        <h2 className="hero-title" style={{ margin: "0 0 1.5rem 0", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          Experimental Results & Output
        </h2>
        <p className="lead" style={{ maxWidth: "800px", margin: 0, fontSize: "1.15rem", color: "var(--muted)", textAlign: "justify" }}>
          Quantitative evaluation of the proposed multi-stage weed detection framework against standalone architectures, alongside qualitative detection samples from field data.
        </p>
      </div>

      <div style={{ marginTop: "3rem", marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <ImageIcon size={26} color="var(--accent)" />
          <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.8rem", margin: 0 }}>
            Detection Samples
          </h3>
        </div>
        <p style={{ margin: "0 0 2rem 0", fontSize: "1rem", color: "var(--muted)", maxWidth: "800px" }}>
          Real-world outputs demonstrating the model's ability to draw precise bounding boxes, assign species labels, and predict growth stages under challenging field conditions.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem", marginTop: "2rem", maxWidth: "950px", marginRight: "auto", marginLeft: "auto" }}>
          {samples.map((sample, index) => (
            <div 
              key={index} 
              style={{ 
                background: "var(--accent-soft)",
                borderRadius: "28px", 
                padding: "2rem", 
                border: "1px solid var(--line)", 
                boxShadow: "var(--shadow)", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center" 
              }}
            >
              <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                <h4 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text)", fontFamily: "Fraunces, serif", margin: 0 }}>
                  {sample.name}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--accent)", marginTop: "6px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Inference Analysis Result
                </p>
              </div>

              <div style={{ 
                width: "100%", 
                background: "var(--bg-alt)",
                padding: "1.25rem", 
                borderRadius: "20px", 
                display: "flex", 
                justifyContent: "center", 
                border: "1px solid var(--line)" 
              }}>
                <img 
                  src={sample.src} 
                  alt={sample.name} 
                  style={{ 
                    width: "100%", 
                    height: "auto", 
                    maxHeight: "600px", 
                    objectFit: "contain", 
                    borderRadius: "12px", 
                    display: "block", 
                    boxShadow: "0 12px 30px rgba(0,0,0,0.15)" 
                  }} 
                />
              </div>

              <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", fontStyle: "italic", margin: 0 }}>
                  Processed using multi-stage spatial features for precise localization.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <TableBlock title="Pipeline vs. Individual Sub-Models" caption="Table I. Performance ablation showing the necessity of the multi-stage approach." icon={Table} rows={performanceRows} />
        <TableBlock title="Comparison With Standard Lightweight Models" caption="Table II. Benchmarking our proposed framework against state-of-the-art edge architectures." icon={Table} rows={comparisonRows} />
      </div>
    </section>
  );
}