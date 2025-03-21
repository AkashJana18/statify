export const getPing = async () => {
  const start = performance.now();
  await fetch("https://www.google.com", { mode: "no-cors" });
  const end = performance.now();
  return (end - start).toFixed(2);
};

export const getDownloadSpeed = async () => {
  const fileUrl = "/testfile.bin";
  const start = performance.now();
  const response = await fetch(fileUrl);
  const blob = await response.blob();
  const end = performance.now();
  const duration = (end - start) / 1000;
  const speedMbps = ((blob.size * 8) / (duration * 1024 * 1024)).toFixed(2);
  return speedMbps;
};

export const getUploadSpeed = async () => {
  const payload = new Blob([new Array(5 * 1024 * 1024).fill("a").join("")]); // 5MB payload
  const start = performance.now();

  await fetch("https://speed.cloudflare.com/__up", {
    method: "POST",
    body: payload,
  });

  const end = performance.now();
  const duration = (end - start) / 1000;
  const speedMbps = ((payload.size * 8) / (duration * 1024 * 1024)).toFixed(2);
  return speedMbps;
};
