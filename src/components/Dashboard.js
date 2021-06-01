import ArticleCard from './ArticleCard';
import logo from '../react-logo.png'
const Dashboard = ({ articlesItems}) => {
    
    return (
        <div className="container">
            <img src={logo} className="logo"></img>
        
        <div>
            {articlesItems.length ? (
            <div className="card-container">
            {articlesItems.map((article)=>[
                    <ArticleCard key={article.id} articleItem= {article} />
            ])}
            </div>)
            
            : <div>No Articles</div>
            }
        </div>
        
        </div>
    )
}

export default Dashboard;
