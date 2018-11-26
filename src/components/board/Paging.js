import React from "react";
import { CardBody, PageItem, Pagination, PageLink } from "mdbreact";

class Paging extends React.Component {
  render() {
    return (
      <CardBody>
        <Pagination className="pagination-circle">
          <PageItem disabled>
            <PageLink className="page-link">
              <span>First</span>
            </PageLink>
          </PageItem>
          <PageItem disabled>
            <PageLink className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </PageLink>
          </PageItem>
          <PageItem active>
            <PageLink className="page-link">
              1 <span className="sr-only">(current)</span>
            </PageLink>
          </PageItem>
          <PageItem>
            <PageLink className="page-link">2</PageLink>
          </PageItem>
          <PageItem>
            <PageLink className="page-link">3</PageLink>
          </PageItem>
          <PageItem>
            <PageLink className="page-link">4</PageLink>
          </PageItem>
          <PageItem>
            <PageLink className="page-link">5</PageLink>
          </PageItem>
          <PageItem>
            <PageLink className="page-link">&raquo;</PageLink>
          </PageItem>
          <PageItem>
            <PageLink className="page-link">Last</PageLink>
          </PageItem>
        </Pagination>
      </CardBody>
    );
  }
}

export default Paging;
