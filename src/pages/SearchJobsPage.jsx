function SearchJobsPage() {
  return (
    <section className="container section-gap">
      <div className="section-head">
        <h1>Search Jobs</h1>
        <p>Browse available openings directly from the embedded jobs portal.</p>
      </div>

      <iframe
        id="jobFrame"
        src="http://20.41.121.191/embed/public-jobs?tenant=showtimebro"
        width="100%"
        height="640"
        style={{ border: 'none', borderRadius: '12px' }}
        title="Public Jobs"
      ></iframe>
    </section>
  );
}

export default SearchJobsPage;
