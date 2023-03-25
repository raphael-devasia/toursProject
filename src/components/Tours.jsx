import Tour from "./Tour";
function Tours({ tour ,deleteTour}) {
  return (
    <section>
      <div className="title">
        <h1>Tours</h1>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tour.map((tourdata) => {
          console.log(tourdata);
          return <Tour key={tourdata.id} {...tourdata} deleteTour={deleteTour} />;
        })}
      </div>
    </section>
  );
}
export default Tours;
