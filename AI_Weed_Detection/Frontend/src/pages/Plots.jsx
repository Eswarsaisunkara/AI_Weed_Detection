import { LineChart, BarChart2, Grid3X3 } from "lucide-react";

const figures = [
  {
    icon: LineChart,
    title: "Training & Validation Convergence",
    caption: "Fig. 1. Accuracy trends over 5-fold cross-validation.",
    detail: "The multi-stage model demonstrates stable convergence without overfitting. Despite the aggressive downsampling required for edge deployment, it reliably reaches ~93.5% training accuracy and ~92.8% validation accuracy, indicating highly robust feature extraction.",
    src: "/figures/accuracy.jpeg",
  },
  {
    icon: BarChart2,
    title: "F1-Score Architecture Comparison",
    caption: "Fig. 2. Comparative evaluation of lightweight detection models.",
    detail: "The proposed framework significantly outperforms standalone lightweight architectures (like standard MobileNetV2 and YOLOv7-tiny). By isolating localization from classification, it achieves the highest F1-score (~92.2%), securing a superior precision-recall balance critical for avoiding crop damage.",
    src: "/figures/f1.jpeg",
  },
  {
    icon: Grid3X3,
    title: "Class-wise Confusion Matrix",
    caption: "Fig. 3. Heatmap for the 8 DeepWeeds species + negative class.",
    detail: "The confusion matrix highlights exceptional class-wise predictions. Misclassifications are strictly limited to morphologically identical weed species during their early cotyledon stages, proving the pipeline's reliability in dense, real-world pastoral environments.",
    src: "/figures/confusion.jpeg",
  },
];

export default function Plots() {
  return (
    <section className="page-card">
      
      <div className="section-heading" style={{ textAlign: "left", paddingBottom: "2.5rem", borderBottom: "1px solid var(--line)" }}>
        <h2 className="hero-title" style={{ margin: "0 0 1.5rem 0", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          Visual Analytics & Performance
        </h2>
        <p className="lead" style={{ maxWidth: "800px", margin: 0, fontSize: "1.15rem", color: "var(--muted)", textAlign: "justify" }}>
          Quantitative evaluation of the proposed edge-optimized pipeline, highlighting convergence stability, precision-recall balance, and class-wise detection accuracy on the DeepWeeds corpus.
        </p>
      </div>

      <div className="plot-stack-modern" style={{ marginTop: "3rem" }}>
        {figures.map((figure, index) => {
          const Icon = figure.icon;
          
          return (
            <article key={figure.title} className="plot-row" style={{ padding: "2.5rem", gap: "3rem" }}>
              
              <div className="plot-text" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ padding: "8px", background: "var(--accent-soft)", borderRadius: "10px", display: "inline-flex" }}>
                    <Icon size={20} color="var(--accent)" />
                  </div>
                  <p className="eyebrow small" style={{ margin: 0, color: "var(--accent)", letterSpacing: "0.15em", fontWeight: "700" }}>
                    Figure {index + 1}
                  </p>
                </div>

                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.6rem", margin: 0, color: "var(--text)" }}>
                  {figure.title}
                </h3>

                <p className="figure-caption" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--text)", fontWeight: "600", margin: 0 }}>
                  {figure.caption}
                </p>

                <p className="figure-detail" style={{ margin: 0, fontSize: "1rem", color: "var(--muted)", lineHeight: "1.7", textAlign: "justify" }}>
                  {figure.detail}
                </p>
              </div>

              <div className="plot-image" style={{ background: "var(--bg-alt)", padding: "1rem", borderRadius: "var(--radius-md)", border: "10px groove var(--accent)" }}>
                <img 
                  src={figure.src} 
                  alt={figure.title} 
                  style={{ width: "100%", height: "auto", borderRadius: "8px", display: "block" }} 
                />
              </div>

            </article>
          );
        })}
      </div>

    </section>
  );
}

