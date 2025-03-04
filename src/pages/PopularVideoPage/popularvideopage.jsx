// import StreamingScreen from "../../component/StartStreaming/startStreaming";
import { Box } from "@mui/material";
import VideoCarousel from "../../component/Popularvideohero/popularvideohero";
import TopTrendingCard from "../../component/TopTrendingCard/toptrendingcard";
import MainLayout from "../../layouts/Mainlayout";
import { Trendingstreamerscard } from "../../component/TrendingSreamersbox/trendingstreamerbox";

const PopularVideo = () => {
    return (
      <>
      <MainLayout>
          
  <VideoCarousel/>
  <Box>
    <Box>
  <TopTrendingCard/>
  {/* <Trendingstreamerscard/> */}
    </Box>

  </Box>
        
        </MainLayout>
      </>
    );
  };
  
  export default PopularVideo;