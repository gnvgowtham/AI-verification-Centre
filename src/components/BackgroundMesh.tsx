export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050B16]">
      {/* Background SVG */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur stdDeviation="120" />
          </filter>

          <radialGradient id="blueGlow">
            <stop offset="0%" stopColor="#2D7CFF" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#2D7CFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2D7CFF" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="indigoGlow">
            <stop offset="0%" stopColor="#6D5DF6" stopOpacity="0.30" />
            <stop offset="70%" stopColor="#6D5DF6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cyanGlow">
            <stop offset="0%" stopColor="#18C8FF" stopOpacity="0.10" />
            <stop offset="70%" stopColor="#18C8FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g filter="url(#blur)">
          {/* Blue Light */}
          <ellipse
            cx="320"
            cy="180"
            rx="380"
            ry="250"
            fill="url(#blueGlow)"
          >
            <animate
              attributeName="cx"
              values="320;420;320"
              dur="95s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="180;140;180"
              dur="110s"
              repeatCount="indefinite"
            />
          </ellipse>

          {/* Indigo Light */}
          <ellipse
            cx="1350"
            cy="330"
            rx="420"
            ry="280"
            fill="url(#indigoGlow)"
          >
            <animate
              attributeName="cx"
              values="1350;1260;1350"
              dur="105s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="330;390;330"
              dur="120s"
              repeatCount="indefinite"
            />
          </ellipse>

          {/* Cyan Accent */}
          <ellipse
            cx="820"
            cy="860"
            rx="330"
            ry="200"
            fill="url(#cyanGlow)"
          >
            <animate
              attributeName="cy"
              values="860;790;860"
              dur="130s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
      </svg>

      {/* Soft center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.025), transparent 60%)",
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at center,
            transparent 45%,
            rgba(5,11,22,0.18) 75%,
            rgba(5,11,22,0.55) 100%
          )`,
        }}
      />
    </div>
  );
}