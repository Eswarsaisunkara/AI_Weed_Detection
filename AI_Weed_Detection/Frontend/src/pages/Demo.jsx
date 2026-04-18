import { useRef, useState } from "react";
import { Upload, Play, Image as ImageIcon, Loader, Activity, Zap, Target, Search, Sprout, ShieldAlert } from "lucide-react";
import { predictImage } from "./api";

export default function Demo() {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const drawBaseImage = () => {
    const canvas = canvasRef.current;
    const image = imageRef.current;
    if (!canvas || !image) return null;

    const ctx = canvas.getContext("2d");
    const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
    const drawWidth = image.width * scale;
    const drawHeight = image.height * scale;
    const offsetX = (canvas.width - drawWidth) / 2;
    const offsetY = (canvas.height - drawHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);

    return { drawWidth, drawHeight, offsetX, offsetY };
  };

  const drawModelBoundingBox = (prediction) => {
    const frame = drawBaseImage();
    if (!frame || !prediction?.box || !prediction?.image_size) return;

    const ctx = canvasRef.current.getContext("2d");

    const scaleX = frame.drawWidth / prediction.image_size.width;
    const scaleY = frame.drawHeight / prediction.image_size.height;

    const x = frame.offsetX + prediction.box.x1 * scaleX;
    const y = frame.offsetY + prediction.box.y1 * scaleY;
    const w = (prediction.box.x2 - prediction.box.x1) * scaleX;
    const h = (prediction.box.y2 - prediction.box.y1) * scaleY;

    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 4;
    ctx.lineJoin = "round";

    ctx.strokeRect(x + 2, y + 2, w - 4, h - 4);

    const label = `${prediction.species} • ${prediction.confidence}%`;
    ctx.font = "bold 16px Inter, sans-serif";
    const textWidth = ctx.measureText(label).width;
    const badgeWidth = textWidth + 20;
    const badgeHeight = 32;

    const labelY = (y - badgeHeight < 0) ? y + badgeHeight : y;

    ctx.fillStyle = "#10b981";
    ctx.fillRect(x, labelY - badgeHeight, badgeWidth, badgeHeight);

    ctx.fillStyle = "#ffffff";
    ctx.fillText(label, x + 10, labelY - 10);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file));
    setResult(null);
    setError("");
  };

  const runInference = async () => {
    if (!selectedFile) {
      setError("Please select an image first.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const prediction = await predictImage(selectedFile);
      setResult(prediction);

      if (prediction.detected) {
        drawModelBoundingBox(prediction);
      } else {
        drawBaseImage();
      }
    } catch {
      setError("Inference failed.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-card">
      <div className="section-heading" style={{ textAlign: "left", paddingBottom: "2rem", borderBottom: "1px solid var(--line)" }}>
        <h2 className="hero-title" style={{ fontSize: "2.5rem", margin: 0 }}>Smart Weed Detector</h2>
        <p
          className="lead"
          style={{ color: "var(--muted)", marginTop: "0.5rem", maxWidth: "1100px" }}
        >
          Advanced 3-stage AI pipeline extracting high-fidelity spatial features for precise weed detection.
          Optimized through sequential model processing and feature refinement for improved accuracy.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "400px 1fr", gap: "2.5rem", marginTop: "2.5rem" }}>

        {/* LEFT PANEL */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ background: "var(--surface-strong)", border: "1px solid var(--line)", borderRadius: "24px", padding: "1.5rem" }}>
            <h4 style={{ margin: "0 0 1rem 0", fontSize: "0.8rem", color: "var(--muted)", letterSpacing: "0.05em" }}>CONTROL UNIT</h4>
            <label className="upload-dropzone" style={{ border: "2px dashed var(--line)", borderRadius: "16px", padding: "2rem 1.5rem", textAlign: "center", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", background: "var(--bg-alt)" }}>
              <Upload size={24} color="var(--accent)" />
              <span style={{ fontSize: "0.9rem", fontWeight: "600" }}>Upload Image</span>
              <input type="file" accept="image/*" onChange={handleFileChange} hidden />
            </label>
            <button className="btn primary wide" onClick={runInference} disabled={loading} style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center", padding: "1rem" }}>
              {loading ? <Loader className="spin" /> : <Play size={18} />} {loading ? "Analyzing..." : "Run Detection"}
            </button>
          </div>


          <div style={{
            flex: 1,
            background: "var(--surface-strong)",
            border: "1px solid var(--line)",
            borderRadius: "24px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            position: "relative"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h4 style={{ margin: "0", fontSize: "0.8rem", color: "var(--muted)", letterSpacing: "0.05em", fontWeight: "700" }}>
                MODEL RESULTS
              </h4>
              {result?.detected && (
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }}></span>
                  <span style={{ fontSize: "0.65rem", fontWeight: "bold", color: "var(--accent)" }}>SIGNAL ACQUIRED</span>
                </div>
              )}
            </div>

            {result?.detected ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", position: "relative" }}>
                <div style={{ position: "absolute", left: "6px", top: "10px", bottom: "10px", width: "2px", background: "var(--line)", zIndex: 0 }}></div>
                <div style={{ position: "relative", zIndex: 1, paddingLeft: "1.5rem" }}>
                  <div style={{ position: "absolute", left: "0", top: "4px", width: "14px", height: "14px", borderRadius: "50%", background: "var(--accent)", border: "3px solid var(--surface-strong)" }}></div>
                  <p style={{ fontSize: " 0.85 rem", color: "var(--accent)", fontWeight: "800", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Search size={12} /> STAGE 1: DETECTION
                  </p>
                  <div style={{ background: "var(--bg-alt)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--line)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "1rem", color: "var(--text)" }}>Detection Confidence</span>
                      <strong style={{ fontSize: "1rem" }}>{result.detection_confidence}%</strong>
                    </div>
                  </div>
                </div>

                <div style={{ position: "relative", zIndex: 1, paddingLeft: "1.5rem" }}>
                  <div style={{ position: "absolute", left: "0", top: "4px", width: "14px", height: "14px", borderRadius: "50%", background: "var(--accent)", border: "3px solid var(--surface-strong)" }}></div>
                  <p style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: "800", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Target size={12} /> STAGE 2: CLASSIFICATION
                  </p>
                  <div style={{ background: "var(--bg-alt)", padding: "14px", borderRadius: "12px", border: "1px solid var(--line)" }}>
                    <h3 style={{ margin: "0 0 10px 0", fontSize: "1.4rem", fontFamily: "Fraunces, serif", color: "var(--text)" }}>{result.species}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ flex: 1, height: "6px", background: "var(--line)", borderRadius: "3px", overflow: "hidden" }}>
                        <div style={{ width: `${result.confidence}%`, height: "100%", background: "var(--accent)" }}></div>
                      </div>
                      <span style={{ fontSize: "1rem", fontWeight: "700", color: "var(--accent)" }}>{result.confidence}%</span>
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "var(--text)", marginTop: "6px" }}>Weed Classification Confidence</p>
                  </div>
                </div>

                <div style={{ position: "relative", zIndex: 1, paddingLeft: "1.5rem" }}>
                  <div style={{ position: "absolute", left: "0", top: "4px", width: "14px", height: "14px", borderRadius: "50%", background: "var(--accent)", border: "3px solid var(--surface-strong)" }}></div>
                  <p style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: "800", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Sprout size={12} /> STAGE 3: GROWTH STAGE
                  </p>
                  <div style={{ background: "var(--bg-alt)", padding: "12px 14px", borderRadius: "12px", border: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.95rem", fontWeight: "700" }}>{result.growth_stage} Stage</span>
                    <Zap size={16} color="var(--accent)" />
                  </div>
                </div>

                <div style={{
                  marginTop: "1rem",
                  background: "linear-gradient(135deg, var(--accent) 0%, #059669 100%)",
                  padding: "1rem",
                  borderRadius: "16px",
                  color: "white",
                  boxShadow: "0 10px 20px rgba(16, 185, 129, 0.2)",
                  margin: "15px 10px 20px 25px"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.8rem", opacity: "0.9", fontWeight: "600", textTransform: "uppercase" }}>Weed Coverage</span>
                    <strong style={{ fontSize: "1.4rem", letterSpacing: "-0.02em" }}>{result.weed_percentage}%</strong>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", opacity: 0.3 }}>
                <Activity size={48} />
                <p style={{ fontSize: "0.9rem", marginTop: "1rem", fontWeight: "500" }}>Awaiting Sensor Stream</p>
              </div>
            )}
          </div>
        </div>


        <div className="viewport-container">
          <div style={{ background: "#0a0c10", borderRadius: "32px", border: "1px solid var(--line)", position: "relative", minHeight: "700px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)" }}>
            {!imageUrl ? (
              <div style={{ textAlign: "center", color: "rgba(255,255,255,0.15)" }}>
                <ImageIcon size={80} strokeWidth={1} style={{ marginBottom: "1rem" }} />
                <p style={{ letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem" }}>Sensor Idle</p>
              </div>
            ) : (
              <div style={{ position: "relative" }}>
                <canvas ref={canvasRef} width="860" height="640" style={{ maxWidth: "100%", height: "auto", display: "block" }} />
              </div>
            )}
          </div>
          {imageUrl && <img ref={imageRef} src={imageUrl} alt="source" style={{ display: "none" }} onLoad={drawBaseImage} />}
        </div>

      </div>
    </section>
  );
}