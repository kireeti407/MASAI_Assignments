import { useEffect, useRef, useState } from "react";

export default function Pagination() {
  const page = useRef(1);
  const [item, setItems] = useState({
    data: null,
    loading: false,
    error: null,
  });

  async function fetchData() {
    try {
      setItems((prev) => ({ ...prev, loading: true, error: null }));
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page.current}`
      );
      const d = await res.json();
      setItems({ data: d.results, loading: false, error: null });
      console.log(item.data);
    } catch (err) {
      setItems((prev) => ({
        ...prev,
        loading: false,
        error: "Failed to fetch data",
      }));
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  function handleNext() {
    page.current++;
    fetchData();
  }

  function handlePrev() {
    if (page.current > 1) {
      page.current--;
      fetchData();
    }
  }

  return (
    <>
      <h1>Page: {page.current}</h1>

      {item.loading && <h2>Loading...</h2>}
      {item.error && <h2>{item.error}</h2>}

      {item.data && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {item.data.map((char) => (
            <div key={char.id}>
              <p>{char.name}</p>
              <img src={char.image} alt={char.name} width={100} />
            </div>
          ))}
        </div>
      )}

      <button onClick={handlePrev} disabled={page.current === 1}>
        Prev
      </button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
