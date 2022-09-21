export async function fetchData() {
  try {
    const res = await fetch("http://localhost:8000/questionAnswer");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`You got error!`, error);
  }
}
