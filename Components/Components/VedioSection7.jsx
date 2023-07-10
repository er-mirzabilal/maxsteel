import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const MyComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        <Box sx={{ width: '100%', height: { md: '80vh', sm: '60vh', xs: '50vh' }, marginBottom: 2 }}>
          <ReactPlayer width="100%" height="100%" url="https://youtu.be/SvApoH3n9FE" controls={true} />
        </Box>
      )}
    </div>
  );
};

export default MyComponent;
