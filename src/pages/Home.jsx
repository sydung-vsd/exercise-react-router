import { Row, Col, Card } from 'antd';
import { Link } from "react-router-dom";
import { productList } from '../constants/product';

function HomePage(props) {
  console.log('🚀 ~ file: Home.jsx ~ line 6 ~ HomePage ~ props', props);
  function renderProductList() {
    return productList.map((productItem, productIndex) => {
      return (
        <Col span={6} key={productIndex}>
          <Link to={`/product/${productItem.id}`}>
            <Card
              size="small"
              title={productItem.name}
            >
              <div>{productItem.price.toLocaleString()}</div>
            </Card>
          </Link>
        </Col>
      )
    })
  }

  return (
    <div>
      <div>Home Page</div>
      <div style={{ padding: 16 }}>
        <Row gutter={[16, 16]}>
          {renderProductList()}
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
