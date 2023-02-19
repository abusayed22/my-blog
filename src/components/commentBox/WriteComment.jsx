
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Textarea from '@mui/joy/Textarea';
// import IconButton from '@mui/joy/IconButton';
// import Menu from '@mui/joy/Menu';
// import MenuItem from '@mui/joy/MenuItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import FormatBold from '@mui/icons-material/FormatBold';
// import FormatItalic from '@mui/icons-material/FormatItalic';
// import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
// import Check from '@mui/icons-material/Check';
import { FormatBold, FormatItalic, KeyboardArrowDown } from '@mui/icons-material';
import { Box, FormControl, FormLabel, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import commentPost from '../../redux/allBlog/thunk/commentPost/commentPost';

function WriteComment({ id }) {
  // const [italic, setItalic] = useState(false);
  // const [fontWeight, setFontWeight] = useState('normal');
  // const [anchorEl, setAnchorEl] = useState(null);
  const [input,setInput] = useState(null);
  const dispatch = useDispatch();

  // comment submit hadler
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(commentPost({id,input}))
  }
  return (
    <form action=""
    onSubmit={submitHandler}
    >
      <input
        type="text"
        className='w-[100%] rounded-lg outline-none px-6 py-2 mx-auto shadow-inner'
        maxLength={99}
        placeholder={'Type yor comment...'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

    </form>
    // <FormControl className='w-[100%] mx-auto '>
    //   <textarea
    //     onClick={submitHandler}
    //     className='w-[100%] rounded-lg outline-none px-6 py-2 mx-auto shadow-inner'
    //     placeholder="Type your comment..."
    //     minRows={3}
    //     endDecorator={
    //       <Box
    //         sx={{
    //           display: 'flex',
    //           gap: 'var(--Textarea-paddingBlock)',
    //           pt: 'var(--Textarea-paddingBlock)',
    //           borderTop: '1px solid',
    //           borderColor: 'divider',
    //           flex: 'auto',
    //         }}
    //       >
    //         <IconButton
    //           variant="plain"
    //           color="neutral"
    //           onClick={(event) => setAnchorEl(event.currentTarget)}
    //         >
    //           <FormatBold />
    //           <KeyboardArrowDown fontSize="md" />
    //         </IconButton>
    //         <Menu
    //           anchorEl={anchorEl}
    //           open={Boolean(anchorEl)}
    //           onClose={() => setAnchorEl(null)}
    //           size="sm"
    //           placement="bottom-start"
    //           sx={{ '--List-decorator-size': '24px' }}
    //         >
    //           {['200', 'normal', 'bold'].map((weight) => (
    //             <MenuItem
    //               key={weight}
    //               selected={fontWeight === weight}
    //               onClick={() => {
    //                 setFontWeight(weight);
    //                 setAnchorEl(null);
    //               }}
    //               sx={{ fontWeight: weight }}
    //             >
    //               {/* <ListItemDecorator>
    //                 {fontWeight === weight && <Check fontSize="sm" />}
    //               </ListItemDecorator> */}
    //               {weight === '200' ? 'lighter' : weight}
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //         <IconButton
    //           variant={italic ? 'soft' : 'plain'}
    //           color={italic ? 'primary' : 'neutral'}
    //           aria-pressed={italic}
    //           onClick={() => setItalic((bool) => !bool)}
    //         >
    //           <FormatItalic />
    //         </IconButton>
    //         <button sx={{ ml: 'auto' }}>Send</button>
    //       </Box>
    //     }
    //     sx={{
    //       minWidth: 300,
    //       fontWeight,
    //       fontStyle: italic ? 'italic' : 'initial',
    //     }}
    //   />
    // </FormControl>
  );
}


export default WriteComment;