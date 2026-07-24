import { useState } from "react";

export default function BenchmarkGallery({ benchmarks = [] }) {
  const [current, setCurrent] = useState(0);

  if (!benchmarks.length) {
    return <div>No benchmarks</div>;
  }

  const item = benchmarks[current];

  const maxBenchmark = Math.max(
    ...benchmarks.map((b) => b.benchmark)
  );

  const percentage = (item.benchmark / maxBenchmark) * 100;

  return (
    <div className="benchmark-gallery">

      <div className="info">
        <h3>{item.name}</h3>
        <p>
          {item.metric}: {item.value}
        </p>
      </div>

      <div className="bar-container">
        <div
          className="bar-fill"
          style={{
            width: `${percentage}%`
          }}
        >
          {percentage.toFixed(1)}%
        </div>
      </div>

    </div>
  );
}
