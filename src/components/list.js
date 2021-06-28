import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';
import {icons} from "react-icons";

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: "none",
        padding: 0,
        margin: 0,
        ...parentStyle
      }}
    >
        {items.map((item, index)=>(
            <Flex
                className={item.isAvailable?'open':'close'}
                as='li'
                sx={{...childStyle}}
                key={index}
            >
                <IconButton sx={styles.listIcon} aria-label="list icon" >
                    {item.icon}
                </IconButton>
                {item.text}
            </Flex>
        ))}
    </Box>
  );
}

const styles = {
  listIcon: {
    width: ['25px', '35px'],
    height: 'auto',
    color: 'primary',
    padding: 0,
    fontSize: [3, 5],
    ml: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    mt: '2px',
  },
};


/*

npm i css-loader dotenv file-loader framer-motion globby isomorphic-unfetch next-compose-plugins next-optimized-images prettier rc-drawer react-custom-scrollbars react-ga react-icons react-modal-video react-multi-carousel react-scroll react-stickynode style-loader theme-ui typeface-dm-sans url-loader

 */