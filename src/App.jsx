import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct import
import HomePage from "./pages/Homepage/homepage";
import ModernCard from "./component/Maincard/maincard";
import LiveDares from "./component/LiveDares/Livedares";
import Stories from "./component/Stories/Stories";
import RectangleCard from "./component/Rectanglecard/reactanglecard";
import SquareCard from "./component/Squrecard/sqaurecard";
import PopularCategories from "./component/Popularcategories/popularcategories";
import RecommendedVideos from "./component/Recommendedvideos/recommendedvideos";
import VideoSlider from "./component/VideoSlider/videoslider";
import FollowingPage from "./pages/FollowingPage/followingpage";
import StartStreaming from "./pages/StartStreamingPage/startstreaming";
import MyVideosPage from "./pages/MyVideosPage/myvideospage";
import Login from "./pages/Authentication/Login";
import SignupPage from "./pages/Authentication/Signup";
import PublicDarePage from "./pages/PublicDarePage/publicdareindex";
import LiveVideoPage from "./pages/LiveVideoPage/Livevideopage";
import Normalvideopage from "./pages/NormalVideoPage/normalvideo";
import ChannelProfilePage from "./pages/ChannelProfileChange/channelprofilePage";
import ChatsystemPage from "./pages/ChatSystemPage/Chatsystempage";
import Saveclips from "./pages/SaveClipPage/saveclip";
import LeaderboardPage from "./pages/Leaderboardpage/Leaderboardpage";
import Browse from "./pages/Browse/Browse";
import UploadVideo from "./pages/Uploadvideo/uploadvideo";
import TrendingNFT from "./pages/TrendingNft/TrendingNft";
import NFTView from "./pages/NftViewPage/Nftview";
import CreatorStream from "./pages/CreaterStreamPage/CreaterStreamPage";
import CommunityPage from "./pages/Communityforum/Communityforum";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/following" element={<FollowingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/publicdare" element={<PublicDarePage />}></Route>
        <Route path="/startstreaming" element={<StartStreaming />}></Route>
        <Route path="/MyVideoPage" element={<MyVideosPage />}></Route>

        <Route path="/livevideo" element={<LiveVideoPage />}></Route>
        <Route path="/normalvideos" element={<Normalvideopage />}></Route>
        <Route path="/channel_profile" element={<ChannelProfilePage />}></Route>
        <Route path="/chatsystem" element={<ChatsystemPage />}></Route>

        <Route path="/Saveclips" element={<Saveclips />}></Route>
        <Route path="/LeaderboardPage" element={<LeaderboardPage />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/uploadvideo" element={<UploadVideo />}></Route>
        <Route path="/trendingnft" element={<TrendingNFT />}></Route>
        <Route path="/nftview" element={<NFTView />}></Route>
        <Route path="/creatstream" element={<CreatorStream />}></Route>
        <Route path="/" element={<CommunityPage />}></Route>

        



        

      </Routes>
    </Router>
  );
};

export default App;
