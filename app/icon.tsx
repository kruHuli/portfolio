import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "#EA580C",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          color: "white",
          fontWeight: 900,
          fontSize: 28,
          lineHeight: 1,
          letterSpacing: "-0.01em",
          fontFamily: "sans-serif",
        }}
      >
        <span>B</span>
        <span style={{ fontSize: 8, marginBottom: 4, marginLeft: 1, marginRight: 2 }}>•</span>
        <span>S</span>
        <span style={{ fontSize: 8, marginBottom: 4, marginLeft: 1 }}>•</span>
      </div>
    </div>,
    { ...size }
  )
}
