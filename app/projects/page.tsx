export default function Projects() {
  return (
     <section className="text-base/loose p-1">
      <h2>Projects</h2>
      <ul>
        {["a","b"].map((val) => {
          return (
            // FIX ME: removing mb-5 causes shift
            <li className="mb-5" key={val}>
              Coming soon...
            </li>
          );
        })}
      </ul>
    </section>
  );
}
