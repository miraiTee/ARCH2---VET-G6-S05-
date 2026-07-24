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

  const next = () => {
    setCurrent((prev) => (prev + 1) % benchmarks.length);
  };

  const previous = () => {
    setCurrent((prev) =>
      (prev - 1 + benchmarks.length) % benchmarks.length
    );
  };

  return (
    <>
      <style>{`
        .benchmark-gallery {
          width: 100%;
          margin: 30px auto;
          text-align: center;
        }

        .image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .image-container button {
          cursor: pointer;
          padding: 10px 15px;
          font-size: 20px;
        }

        .image-container img {
          width: 300px;
          height: 200px;
          object-fit: contain;
        }

        .info h3 {
          margin-bottom: 5px;
        }

        .info p {
          margin-bottom: 20px;
        }

        .bar-container {
          width: 80%;
          height: 30px;
          margin: auto;
          background: #e0e0e0;
          border-radius: 15px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #4caf50;
          color: white;
          font-weight: bold;
          transition: width 0.4s ease;
        }
      `}</style>

      <div className="benchmark-gallery">

        <div className="image-container">
          <button onClick={previous}>◀</button>

          <img
            src={item.image}
            alt={item.name}
          />

          <button onClick={next}>▶</button>
        </div>

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
    </>
  );
}
