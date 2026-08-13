import { ImageResponse } from "next/og";

export const alt = "Şahika Öncü Minikler — Denizli Butik Kreş";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(165deg, #2f7a45 0%, #3f9b5a 48%, #1c2a22 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 360,
            height: 360,
            borderRadius: 9999,
            background: "rgba(216, 240, 223, 0.28)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -20,
            width: 280,
            height: 280,
            borderRadius: 9999,
            background: "rgba(240, 194, 75, 0.22)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 64px",
          }}
        >
          <div
            style={{
              width: 72,
              height: 6,
              borderRadius: 9999,
              background: "#f0c24b",
              marginBottom: 36,
            }}
          />
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -1.5,
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            Şahika Öncü Minikler
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 36,
              fontWeight: 500,
              color: "#d8f0df",
              letterSpacing: 0.4,
            }}
          >
            Denizli Butik Kreş
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
