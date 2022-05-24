import React, { Suspense } from "react";
import { twitterUsername } from "../../portfolio";
import Loading from "../loading/Loading";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./Twitter.css";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
  setTimeout(function () {
    if (!document.getElementById("twitter").innerHTML.includes("iframe")) {
      document.getElementById("twitter").innerHTML = cantDisplayError;
    }
  }, 10000);
}
var widthScreen = window.screen.width;

const Twitter = () => {
  if (twitterUsername !== "none") {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterUsername}
              options={{ height: 400, width: { widthScreen } }}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key="2"
              theme="light"
              noFooter={true}
              onload={timeOut()}
            />
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
};

export default Twitter;
