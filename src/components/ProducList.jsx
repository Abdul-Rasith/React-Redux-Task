import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <Container>
      <Row className="my-4">
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  as={Link}
                  to={`/product/${product.id}`}
                  variant="primary"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
