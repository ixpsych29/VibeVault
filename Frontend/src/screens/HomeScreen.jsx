import { Col, Row } from "react-bootstrap";

const products = [
  { name: "Product 1" },
  { name: "Product 2" },
  { name: "Product 3" },
];

const HomeScreen = () => {
  return (
    <>
      <Row>
        <h1>Latest Products</h1>
        {products.map((product, index) => (
          <Col key={product._id || index} sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
