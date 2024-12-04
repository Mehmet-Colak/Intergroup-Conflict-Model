//make this default before submission
//how do I save the values I have
export function Snapshot({ snapshot }){
  return (
    <div>
      {!snapshot ? (
        <p>No snapshot selected</p>
      ) : (
        <section>
          <h2>{snapshot.title}</h2>
          {/* <p className="date"> Date: {article.date}</p>
          <p className="location">Location: {article.location}</p>
          <p className="body">{article.body}</p> */}
        </section>
      )}
    </div>
  )
}
