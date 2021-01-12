import styles from './Post.module.css'
import {Post as PostInterface} from "../../api/users";
import {kStringMaxLength} from "buffer";

const Post = (props: PostInterface) => {
    return <div className={`card ${styles.post}`}>
        <div className="card-body">
            <div className={styles['user-info']}>
                <div>
                    <img src={props.owner.picture} className="img-fluid"/>
                </div>
                <div>
                    <div><b>{props.owner.firstName} {props.owner.lastName}</b></div>
                    <div>{props.owner.email}</div>
                </div>
            </div>
            <img className="card-img-top img-fluid" style={{
                height: '300px',
                objectFit: 'cover'
            }} src={props.image}/>
            <div className="p-1">
                {props.tags.map((tag, key) => {
                    return <span key={key} className="badge badge-danger mr-1">{tag}</span>
                })}
            </div>
            <p>
                {props.text}
            </p>
            <a target="_blank" href={props.link}>{props.link}</a>
            <hr/>
            <div className={styles['post-info']}>
                <div>
                   <span><i className="fas fa-heart"/></span> <span> {props.likes} Likes</span>
                </div>
                <div className={styles.date}>
                    {props.publishDate}
                </div>
            </div>
        </div>
    </div>

};


export default Post;
