import { useEffect, useState } from "react";

function TravelGuideSuggestion({
  content
}) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(!!content)
  },
  [
    content
  ])
  return (
    <div className={`modal ${isShow ? 'open' : 'close'}`}>
      <div className={`modal-close`} onClick={() => setIsShow(false)}>&#x2190;Back</div>
      <div className={`modal-content`} dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  );
}

export default TravelGuideSuggestion
