// Gallery component
function GalleryComponent({ quotesList }) {
  return (
    <section>
      <div className="content-box">
        <h2>Famous Quotes</h2>
        <div className="gallery flex gap-20">
          {quotesList.map((quoteItem) => (
            <div key={quoteItem.id} className="quote-card">
              <img src={quoteItem.img} alt={quoteItem.movie} />
              <div className="card-text">
                <p className="quote-text">{quoteItem.quote}</p>
                <p className="quote-author">— {quoteItem.whoSaidIt}</p>
                <p className="flex space-between">
                  <span className="quote-movie">{quoteItem.movie}</span>
                  <span className="quote-year">{quoteItem.year}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryComponent;
