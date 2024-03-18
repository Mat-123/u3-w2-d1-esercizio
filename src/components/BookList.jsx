import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  handleBookClick = (book) => {
    this.setState({ selectedBook: book });
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row xs={12} className="g-2 mt-3">
          <Col xs={8}>
            <Row>
              {this.props.books
                .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin} onClick={() => this.handleBookClick(b)}>
                    <SingleBook book={b} />
                  </Col>
                ))}
            </Row>
          </Col>

          <Col xs={4}>{this.state.selectedBook && <CommentArea asin={this.state.selectedBook.asin} />}</Col>
        </Row>
      </>
    );
  }
}

export default BookList;
