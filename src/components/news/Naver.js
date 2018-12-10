import React, { Component, Fragment } from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  Breadcrumb,
  BreadcrumbItem,
  MDBRow,
  MDBCol
} from "mdbreact";
import axios from "axios";
import Pagination from "react-js-pagination";
import Paging from "../Paging";

var paging = {};
class Naver extends Component {
  constructor(props) {
    super(props);
    this.state = { newslist: [] };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(clickBlock) {
    console.log("in");
    this.Naver(clickBlock);
  }

  componentDidMount() {
    this.Naver();
  }
  Naver(clickBlock) {
    if (clickBlock == undefined) {
      clickBlock = 1;
    }
    return axios
      .get("http://rbd.javajs.net:8100/news/" + clickBlock, {})
      .then(res => {
        const newslist = res.data.newsList;
        paging = res.data.paging;
        this.setState({ newslist });
      });
  }

  render() {
    const news = this.state.newslist.map((item, i) => (
      <MDBListGroupItem href={item.uri} target="_blank">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{item.title}</h5>
          <small>{item.date}</small>
        </div>
        <p className="mb-1">{item.text}</p>
        <small>{item.company}</small>
      </MDBListGroupItem>
    ));
    return (
      <Fragment>
        <Breadcrumb>
          <BreadcrumbItem active>
            <a>네이버 농구 최신 뉴스</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <MDBContainer>
          <MDBListGroup>{news}</MDBListGroup>
          <MDBRow center>
            {/* <MDBCol size="5">
                            <Pagination
                                activePage={paging.clickBlock}
                                itemsCountPerPage={15}
                                totalItemsCount={paging.totalData}
                                pageRangeDisplayed={10}
                                onChange={this.handlePageChange}
                            />
                        </MDBCol> */}
            <MDBCol size="7">
              <Paging page={paging} views="news" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Fragment>
    );
  }
}

export default Naver;
