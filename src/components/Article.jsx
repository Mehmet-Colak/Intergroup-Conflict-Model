export function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date"> Date: {article.date}</p>
          <p className="location">Location: {article.location}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  )
}

//make this default before submission
//how do I save the values I have
export function Snapshot({ snapshot }){
  return (
    <snapshot>
      {!snapshot ? (
        <p>No snapshot selected</p>
      ) : (
        <section>
          <h2>{snapshot.title}</h2>
          <p className="date"> Date: {article.date}</p>
          <p className="location">Location: {article.location}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </snapshot>
  )
}
