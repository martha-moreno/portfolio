import { Container } from 'react-bootstrap';

const Blog = () =>{
    return (
        <div className="text-center">
            <h4 className="title"><strong>Posts</strong></h4>
            <Container className="container"> 
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="card shadow border-2">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                                <a href="#!">
                                <div className="mask"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Post title</h5>
                                <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                                </p>
                                <a href="#!" className="btn btn-custom">Read</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card shadow border-2">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                 <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
                                 <a href="#!">
                                <div className="mask"></div>
                                </a>
                            </div>
                        <div className="card-body">
                            <h5 className="card-title">Post title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                            </p>
                            <a href="#!" className="btn btn-custom">Read</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card shadow border-2">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
                        <a href="#!">
                        <div class="mask"></div>
                        </a>
                    </div>
                <div className="card-body">
                    <h5 className="card-title">Post title</h5>
                    <p className="card-text">
                     Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>
                    <a href="#!" className="btn btn-custom">Read</a>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card shadow border-2">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#!" className="btn btn-custom">Read</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow border-2">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" className="img-fluid" />
              <a href="#!">
                <div class="mask" ></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#!" className="btn btn-custom">Read</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow border-2">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/035.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#!" className="btn btn-custom">Read</a>
            </div>
          </div>
        </div>
      </div>
      </Container>
      </div>
        
    );
}

export default Blog;