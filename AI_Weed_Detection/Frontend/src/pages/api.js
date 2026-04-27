const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://ai-weed-detection.onrender.com";

export const predictImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/predict`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Prediction request failed");
  }

  return res.json();
};
