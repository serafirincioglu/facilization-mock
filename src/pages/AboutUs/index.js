import React from 'react'
import banner from '../../assests/about_us_page-banner.jpeg'
import './style.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AboutUsTab from '../../components/AboutUs/AboutUs';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Profile from '../../components/AboutUs/Profile';
import Mission from '../../components/AboutUs/Mission';
import Values from '../../components/AboutUs/Values';
import Policies from '../../components/AboutUs/Policies';
import { styled } from '@mui/material/styles';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#212121',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'uppercase',
        fontSize: '18px',
        fontWeight: '500',
        marginRight: theme.spacing(1),
        color: 'black',
        '&.Mui-selected': {
            color: '#000',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

function AboutUs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className="about_us_page">
            <div className="about_us_page-banner">
                <img src={banner} alt="banner" />
            </div>

            <div className="about_us_page-list">
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <StyledTabs value={value} onChange={handleChange} centered>
                        <StyledTab label="About Us" {...a11yProps(0)} />
                        <StyledTab label="Profile" {...a11yProps(1)} />
                        <StyledTab label="Mission" {...a11yProps(2)} />
                        <StyledTab label="Values" {...a11yProps(3)} />
                        <StyledTab label="Policies" {...a11yProps(4)} />

                    </StyledTabs>

                    <TabPanel value={value} index={0}>
                        <AboutUsTab />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Profile />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Mission />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Values />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Policies />
                    </TabPanel>

                </Box>
            </div>
        </section>
    )
}

export default AboutUs