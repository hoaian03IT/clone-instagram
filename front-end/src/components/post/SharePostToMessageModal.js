import { useContext, useState } from "react";
import { Button, FormControl, FormLabel, Image, Modal } from "react-bootstrap";

import { RoundCheckBox } from "../RoundCheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { PostContext } from "./Post";
import "~/styles/post/share_post_to_message_modal.scss";

const searchResult = [
    {
        id: 0,
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/371188291_1268739043807904_2245933078084026991_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ZIz0iuidEj8AX9QUDXd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfBCaeSY-vCf3c-yXkhG47plze-tG8zy20V3Sj9QIe67BQ&oe=64F74B34",
        username: "Thư Nguyễn",
        nickname: "thu.nguyenx_",
    },
    {
        id: 1,
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/363002461_226964856983453_9027150556892209013_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=cu5bI5CH8A0AX_3MG7q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCVoC1p2INEPr6dJfuYyM9V6PNy2vP_L5_8xggtcqRIuQ&oe=64F79269",
        username: "Nguyễn Tấn Đạt",
        nickname: "nguyentandat_1807",
    },
    {
        id: 2,
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/242608312_587567432677359_5502523775977758831_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=nBlVpqjjk0EAX9cWLWN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfD8Pj353saf6j3OzeKG4NZkTgS3QbtlUaHxGNfy5tW2kQ&oe=64F880E2",
        username: "Võ Ngọc Tiến",
        nickname: "v_ngoctien",
    },
    {
        id: 3,
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/242608312_587567432677359_5502523775977758831_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=nBlVpqjjk0EAX9cWLWN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfD8Pj353saf6j3OzeKG4NZkTgS3QbtlUaHxGNfy5tW2kQ&oe=64F880E2",
        username: "Võ Ngọc Tiến",
        nickname: "v_ngoctiens",
    },
    {
        id: 4,
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/242608312_587567432677359_5502523775977758831_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=nBlVpqjjk0EAX9cWLWN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfD8Pj353saf6j3OzeKG4NZkTgS3QbtlUaHxGNfy5tW2kQ&oe=64F880E2",
        username: "Võ Ngọc Tiến",
        nickname: "v_ngoctiend",
    },
];

export const SharePostToMessageModal = () => {
    const [searchValue, setSearchValue] = useState("");
    const [messageValue, setMessageValue] = useState("");
    const [userSelectedList, setUserSelectedList] = useState([]);

    const { showShareModal, setShowShareModal } = useContext(PostContext);

    const handleSendPost = (e) => {
        e.preventDefault();
        alert("Shared");

        // Clear
        setSearchValue("");
        setMessageValue("");
        setUserSelectedList([]);

        // close modal
        handleHideModal();
    };

    const handleHideModal = () => {
        setShowShareModal(false);
    };

    const handleSelectUser = (nickname) => {
        const indexOfNickname = userSelectedList.indexOf(nickname);
        if (indexOfNickname < 0) {
            setUserSelectedList([...userSelectedList, nickname]);
        } else {
            const newList = [
                ...userSelectedList.slice(0, indexOfNickname),
                ...userSelectedList.slice(indexOfNickname + 1),
            ];
            setUserSelectedList(newList);
        }
    };

    return (
        <Modal className="share-post-to-message" show={showShareModal} onHide={handleHideModal} centered size="md">
            <Modal.Header className="header">
                <span className="mx-auto fw-bold">Share</span>
            </Modal.Header>
            <Modal.Body className="body d-flex flex-column p-0">
                <div className="search-area px-3 d-flex algin-items-start">
                    <FormLabel className="label-search my-auto fw-semibold">To:</FormLabel>
                    <div className="d-flex flex-wrap flex-row w-100">
                        {userSelectedList.map((nickname) => (
                            <div key={nickname} className="tag-name m-1 px-2">
                                {nickname}
                                <FontAwesomeIcon
                                    className="remove-icon ms-2"
                                    icon={faXmark}
                                    onClick={() => handleSelectUser(nickname)}
                                />
                            </div>
                        ))}
                        <FormControl
                            className="search-input ms-2"
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                </div>
                <ul className="search-list">
                    {searchResult.map((item) => (
                        <li
                            key={item.id}
                            className="search-item px-3 py-2 d-flex align-items-center justify-content-between"
                            onMouseDown={() => handleSelectUser(item.nickname)}>
                            <div className="d-flex align-items-center">
                                <Image className="avatar me-2" roundedCircle src={item.avatar} alt={item.nickname} />
                                <div>
                                    <span className="username mb-1 d-block">{item.username}</span>
                                    <span className="nickname d-block">{item.nickname}</span>
                                </div>
                            </div>
                            <div>
                                <RoundCheckBox
                                    className="select-input"
                                    checked={userSelectedList.includes(item.nickname) ? true : false}
                                    readOnly
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <form className="form-send-post px-3 d-flex flex-column" onSubmit={(e) => handleSendPost(e)}>
                    {userSelectedList.length > 0 && (
                        <FormControl
                            className="message-input px-0 pt-3"
                            type="text"
                            placeholder="Write a message..."
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />
                    )}
                    <Button
                        className="send-btn my-3 fw-semibold"
                        type="submit"
                        disabled={userSelectedList.length > 0 ? false : true}>
                        Send
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};
