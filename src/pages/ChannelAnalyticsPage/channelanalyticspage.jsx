import { Box } from "@mui/material";
import MainLayout from "../../layouts/Mainlayout";
import SearchNavbar from "../../component/ChannelAnalyticsNav/channelanalyticsnav";
import DashboardLayout from "../../component/ChannelAnalyticsNav/channelanalyticshero";

const ChannelAnalytics = () => {
    return (
        <>
            <MainLayout>

             <DashboardLayout/>

            </MainLayout>
        </>
    );
};

export default ChannelAnalytics;