export default function History({ snapshots, setSnapshot }) {
  return (
    <nav>
      {!snapshots
        ? "No snapshots"
        : snapshots.map((a) => (
            <p key={a.id} onClick={() => setSnapshot(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  )
}
