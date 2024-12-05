import { useState } from "react"

export function SnapshotEntry({ addSnapshot, setWriting }) {

  const [title, setTitle] = useState("")

  const [error, setError] = useState(null)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim()) {
      setError("Title must be supplied")
    } else {
      addSnapshot({ title })
    }
  }

  function cancel(){
    setWriting(false);
  }
 // unfinished after
  return (
    <article>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Date
        <input value={date} onChange={(e) => setDate(e.target.value)} />
        <p> 
          <button type="submit">Create</button>
          &nbsp;
          <button onClick={cancel}>Cancel</button>
        </p>
      </form>
    </article>
  )
}
