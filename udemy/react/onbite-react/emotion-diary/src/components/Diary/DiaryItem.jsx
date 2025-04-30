import React from "react";
import "./DiaryItem.css";
import { getEmotionImage } from "../../util/getEmotionImage";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function DiaryItem({ id, emotionId, createdDate, content }) {
  const nav = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정 하기"} />
      </div>
    </div>
  );
}
