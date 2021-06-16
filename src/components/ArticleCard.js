import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import {Link} from 'react-router-dom';
const ArticleCard = ({articleItem}) => {

    return (
        <Card className="card-item">
          <CardImg top width="100%" className="thumbnail-image" src={`${process.env.PUBLIC_URL}/assets/${articleItem.image}.jpg`} alt="Card image cap" />
          <CardBody className="text-left">
            <CardTitle tag="h5">{articleItem.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{articleItem.date}</CardSubtitle>
            <CardText>{articleItem.content}</CardText>
            <Link to={{pathname:"/details",state: { item: articleItem }}}>Continue reading...</Link>
          </CardBody>
        </Card>
    )
}

export default ArticleCard;
