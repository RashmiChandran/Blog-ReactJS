import { withRouter } from "react-router";
import { Jumbotron, Button } from 'reactstrap';
import CommentsSection from './CommentsSection';
const DetailPage = (props) => {
    const {item} = props.location.state

    return (
       
        <div className="container">
             <img src={ `/assets/${item.image}.jpg`} className="logo"></img>
             <Jumbotron className="text-left">
                <h3 className="display-5 text-left">{item.title}</h3>
                <hr className="my-2" />
                <p className="lead">{item.date}</p>
                <p>{item.content}</p>
                <hr className="my-2" />
            </Jumbotron>
            <CommentsSection id={item.id} key={item.id}/>
        </div>
    )
}

// export default DetailPage;
const DetailPageWithRouter = withRouter(DetailPage);
// const ShowTheLocationWithRouter = withRouter(DetailPage);
export default DetailPageWithRouter;
