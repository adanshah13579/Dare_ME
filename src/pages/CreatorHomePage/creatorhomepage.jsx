// import StreamingScreen from "../../component/StartStreaming/startStreaming";
import { Box } from "@mui/material";
import VideoCarousel from "../../component/Popularvideohero/popularvideohero";
import TopTrendingCard from "../../component/TopTrendingCard/toptrendingcard";
import MainLayout from "../../layouts/Mainlayout";
import StreamSummary from "../../component/CreatorMain/herobox";
// import AnalyticsDashboard from "../../component/CreatorMain/bar";
const CreatorHome = () => {
    return (
        <>
            <MainLayout>

             <StreamSummary/>
             {/* <AnalyticsDashboard/> */}

            </MainLayout>
        </>
    );
};

export default CreatorHome;