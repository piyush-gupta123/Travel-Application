import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const DiaryUpdate = () => {
  const id = useParams().id;
  console.log(id);
  useEffect(() => {}, []);
  return <div>DiaryUpdate</div>;
};

export default DiaryUpdate;
