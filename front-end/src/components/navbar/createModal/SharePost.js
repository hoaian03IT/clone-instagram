import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, FormCheck, FormControl, FormGroup, Image } from "react-bootstrap";
import personalAvatar from "~/assets/images/personal_avatar.png";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
export const SharePost = ({
    croppedImage,
    caption,
    setCaption,
    hideLikeAndView,
    setHideLikeAndView,
    hideComment,
    setHideComment,
}) => {
    const limitWord = 2200;

    const handleWriteCaption = (e) => {
        if (e.target.value.length <= limitWord) setCaption(e.target.value);
    };
    return (
        <div className="share-post w-100 h-100 position-relative">
            <div className="w-100 text-center">
                <Image className="cropped-image mt-4" src={croppedImage} alt="cropped-image" />
            </div>
            <div className="share-post-body">
                <div className="m-3">
                    <Image roundedCircle className="avatar-smaller" src={personalAvatar} alt="avatar-user" />
                    <span className="nickname fw-semibold">dangan_03</span>
                </div>
                <div>
                    <form className="form-submit">
                        <FormGroup className="position-relative">
                            <FormControl
                                as="textarea"
                                className="caption-input"
                                rows={8}
                                type="text"
                                placeholder="Write a caption..."
                                value={caption}
                                onChange={(e) => handleWriteCaption(e)}
                            />
                            <span className="limit-words position-absolute">
                                {caption.length}/{limitWord}
                            </span>
                        </FormGroup>

                        <FormGroup className="position-relative">
                            <FormControl className="location-input" type="text" placeholder="Add location" />
                            <FontAwesomeIcon className="location-icon position-absolute" icon={faCompass} />
                        </FormGroup>
                        <Accordion>
                            <Accordion.Header>Advance settings</Accordion.Header>
                            <Accordion.Body>
                                <div className="advance-item">
                                    <div className="d-flex align-item-center">
                                        <span className="me-auto">Hide like and view counts on this post</span>
                                        <FormCheck
                                            type="switch"
                                            checked={hideLikeAndView}
                                            onChange={() => setHideLikeAndView(!hideLikeAndView)}
                                        />
                                    </div>
                                    <p className="more-info">
                                        Only you will see the total number of likes and views on this post. You can
                                        change this later by going to the ··· menu at the top of the post. To hide like
                                        counts on other people's posts, go to your account settings.
                                    </p>
                                </div>
                                <div className="advance-item">
                                    <div className="d-flex align-item-center">
                                        <span className="me-auto">Turn off commenting</span>
                                        <FormCheck
                                            type="switch"
                                            checked={hideComment}
                                            onChange={() => setHideComment(!hideComment)}
                                        />
                                    </div>
                                    <p className="more-info">
                                        You can change this later by going to the ··· menu at the top of your post.
                                    </p>
                                </div>
                            </Accordion.Body>
                        </Accordion>
                    </form>
                </div>
            </div>
        </div>
    );
};
