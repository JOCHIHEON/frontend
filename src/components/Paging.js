import React from "react";
import { CardBody, PageItem, Pagination, PageLink } from "mdbreact";

class Paging extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(clickBlock) {
    this.props.handlePageChange(clickBlock);
  }
  render() {
    let items = [];
    for (
      let i = this.props.page.startBlock, end = this.props.page.endBlock;
      i <= end;
      i++
    ) {
      items.push(
        <PageItem active={i === this.props.page.clickBlock}>
          <PageLink
            className="page-link"
            onClick={() => this.handlePageChange(i)}
            value={i}
          >
            {i}
          </PageLink>
        </PageItem>
      );
    }
    return (
      <CardBody>
        <Pagination className="pagination-circle">
          <PageItem>
            <PageLink
              className="page-link"
              onClick={() => this.handlePageChange(1)}
            >
              <span>First</span>
            </PageLink>
          </PageItem>
          <PageItem>
            <PageLink
              className="page-link"
              aria-label="Previous"
              onClick={() =>
                this.handlePageChange(this.props.page.clickBlock - 1)
              }
              value={this.props.page.clickBlock - 1}
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only" />
            </PageLink>
          </PageItem>
          {items}
          <PageItem>
            <PageLink
              className="page-link"
              onClick={() =>
                this.handlePageChange(this.props.page.clickBlock + 1)
              }
              value={this.props.page.clickBlock + 1}
            >
              &raquo;
            </PageLink>
          </PageItem>
          <PageItem>
            <PageLink
              className="page-link"
              onClick={() => this.handlePageChange(this.props.page.totalView)}
              value={this.props.page.totalView}
            >
              Last
            </PageLink>
          </PageItem>
        </Pagination>
      </CardBody>
    );
  }
}

export default Paging;
