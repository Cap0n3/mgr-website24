import HeroHeader from '../components/headers/HeroHeader';
import Typography from '@mui/material/Typography';
import C2A_Banner1 from '../components/c2a/c2a_banner1/C2A_Banner1';

const HomePages = () => {
    return (
        <>
            <HeroHeader />
            <C2A_Banner1 offset_trigger={300} transition_duration={1000} transition_delay={0} />
        </>
    );
}

export default HomePages;
