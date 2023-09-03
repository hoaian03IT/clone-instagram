import { createContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { MoreModalPost } from "./MoreModal/MoreModalPost";
import { HeaderPost } from "./HeaderPost";
import { PostModal } from "./PostModal";
import { StatusBarPost } from "./StatusBarPost";
import { Link } from "react-router-dom";
import { FormCommentPost } from "./FormCommentPost";
import { SharePostToMessageModal } from "./SharePostToMessageModal";
import "~/styles/post/post.scss";

const captionPost = `Gia chủ bất lực 🤣 in tư ẻm ở “Tin nổi bật 153” nha 😎 .
Cre: Crush Zones . Follow @thanhxuan.khonghoitiec để xem thêm về nhiều status thú vị khác
nhé ____________________________________ #quotesvn #trichdanhay #vietquote #vietquotes
#quotevn #quotesviet #quoteviet #vnquotes #suutam #tríchdẫn #quoteshay #tinhyeu #thanhxuan
#thanhxuân #buon #yêu #quotestonghop #ngontinh #tamtrang #tuoithanhxuan #quotesvietnam #nhớ
#trichdan #congai #nắng #iamnhn`;

export const PostContext = createContext();

export const Post = ({ className }) => {
    const [showLikes] = useState(false);
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [followed, setFollowed] = useState(true);
    const [likeNumber, setLikeNumber] = useState(1);
    const [caption] = useState(captionPost);
    const [comment, setComment] = useState("");
    const [imagePost] = useState(
        "https://scontent.cdninstagram.com/v/t39.30808-6/364220695_667884602030116_5606720812416253058_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=cd2qPpjMQY0AX_DNcA-&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1ODM5MjkyMDEzOTMzMjMwMw%3D%3D.2-ccb7-5&oh=00_AfDKeJ7MtGoO0EKhcCQiurSoBe7m_BN6hgW87LAIAaL7LA&oe=64E9C90F&_nc_sid=10d13b"
    );
    const [timeLine] = useState("10m");
    const [showMoreCaption, setShowMoreCaption] = useState(true);
    const [showMoreModal, setShowMoreModal] = useState(false);
    const [showPostModal, setShowPostModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);

    useEffect(() => {
        const limitTextWidth = 400;
        caption.length > limitTextWidth ? setShowMoreCaption(false) : setShowMoreCaption(true);
    }, [caption]);

    const handleShowMoreCaption = () => {
        setShowMoreCaption(true);
    };

    const handlePostComment = () => {
        if (comment) {
            setComment("");
            alert(comment);
        }
    };

    const valueContext = {
        showLikes,
        liked,
        likeNumber,
        saved,
        followed,
        caption,
        timeLine,
        imagePost,
        showMoreModal,
        comment,
        setLiked,
        setSaved,
        setFollowed,
        setLikeNumber,
        setShowMoreModal,
        setComment,
        handlePostComment,
        showPostModal,
        setShowPostModal,
        showShareModal,
        setShowShareModal,
    };

    return (
        <PostContext.Provider value={valueContext}>
            <section className={`post ${className} pb-3`}>
                <HeaderPost className="py-2" />
                <Card className="post-body">
                    <Card.Img className="post-img" src={imagePost} alt="post-img" />
                    <Card.Body>
                        <StatusBarPost />
                        <div className="caption">
                            <p className={`text ${!showMoreCaption && "hide"}`}>
                                <Link className="nickname fw-semibold">thanhxuan.nganngui</Link> {caption}
                            </p>
                            {!showMoreCaption && (
                                <span className="view-more fw-semibold" onClick={handleShowMoreCaption}>
                                    View more
                                </span>
                            )}
                        </div>
                        <div className="form-comment">
                            <FormCommentPost className="mt-2" />
                        </div>
                    </Card.Body>
                </Card>

                {/* Modals */}
                <MoreModalPost />
                <PostModal />
                <SharePostToMessageModal />
            </section>
        </PostContext.Provider>
    );
};
