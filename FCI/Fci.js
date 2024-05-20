import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



import "./Fci.css";


const messages = [
  {
    id: 1,
    name: 'د.مصطفى السيد',
    email: "mostafaelsayeed@gmail.com",
    person: '/static/images/avatar/5.jpg',
    facebook: 'https://www.facebook.com/mostafaelsayeed',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://www.linkedin.com/in/mostafaelsayeed',
  },
  {
    id: 2,
    name: 'م.محمد رضا',
    email: "moreda@gmail.com",
    person: '/static/images/avatar/1.jpg',
    facebook: 'https://www.facebook.com/moreda',
    whatsapp: 'https://wa.me/0987654321',
    linkedin: 'https://www.linkedin.com/in/moreda',
  },
  {
    id: 3,
    name: 'م.محمد زاهر طه',
    email: "mozaher@gmail.com",
    person: '/static/images/avatar/2.jpg',
    facebook: 'https://www.facebook.com/mozaher',
    whatsapp: 'https://wa.me/1122334455',
    linkedin: 'https://www.linkedin.com/in/mozaher',
  },
  {
    id: 4,
    name: 'م.محمد خلف سيد',
    email: "mozaher@gmail.com",
    person: '/static/images/avatar/2.jpg',
    facebook: 'https://www.facebook.com/mozaher',
    whatsapp: 'https://wa.me/1122334455',
    linkedin: 'https://www.linkedin.com/in/mozaher',
  },
  {
    id: 5,
    name: 'م.محمد سيد جمعى',
    email: "mozaher@gmail.com",
    person: '/static/images/avatar/2.jpg',
    facebook: 'https://www.facebook.com/mozaher',
    whatsapp: 'https://wa.me/1122334455',
    linkedin: 'https://www.linkedin.com/in/mozaher',
  },
  {
    id: 6,
    name: 'م.محمد جعفر فتحى',
    email: "mozaher@gmail.com",
    person: '/static/images/avatar/2.jpg',
    facebook: 'https://www.facebook.com/mozaher',
    whatsapp: 'https://wa.me/1122334455',
    linkedin: 'https://www.linkedin.com/in/mozaher',
  },
  {
    id: 7,
    name: 'م.محمد احمد محمد',
    email: "mozaher@gmail.com",
    person: '/static/images/avatar/2.jpg',
    facebook: 'https://www.facebook.com/mozaher',
    whatsapp: 'https://wa.me/1122334455',
    linkedin: 'https://www.linkedin.com/in/mozaher',
  },
  {
    id: 8,
    name: 'م.محمد خميس حسن',
    email: "mozaher@gmail.com",
    person: '/static/images/avatar/2.jpg',
    facebook: 'https://www.facebook.com/mozaher',
    whatsapp: 'https://wa.me/1122334455',
    linkedin: 'https://www.linkedin.com/in/mozaher',
  },
  
];

// const StyledFab = styled(Fab)({
//   position: 'absolute',
//   zIndex: 1,
//   top: -30,
//   left: 0,
//   right: 0,
//   margin: '0 auto',
// });

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
          <ListSubheader sx={{ bgcolor: 'background.paper' }} className='header'>
            المشرفين
          </ListSubheader>
        <div className="supervisors">
          <List sx={{ mb: 2 }}>
            {messages.filter(message => message.id <= 2).map(({ id, name, email, person, facebook, whatsapp, linkedin }) => (
              <ListItemButton key={id} className="person">
                <div className='info-card'>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={name} secondary={email} />
                </div>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:"blue"}}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:"green"}}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                  <IconButton
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:"#0a66c2"}}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </ListItemButton>
            ))}
          </List>
        </div>
        <div className="team-members">
          <ListSubheader sx={{ bgcolor: 'background.paper' }} className='header'>
            اعضاء التيم
          </ListSubheader>
          <List sx={{ mb: 2 }} style={{ display: "grid",gridTemplateColumns: "repeat(2,1fr)",gap: "10px"}}>
            {messages.filter(message => message.id >= 2).map(({ id, name, email, person, facebook, whatsapp, linkedin }) => (
              <ListItemButton key={id} className="person">
                <div className='info-card'>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={name} secondary={email} />
                </div>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:"blue"}}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:"green"}}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                  <IconButton
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:"#0a66c2"}}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </ListItemButton>
            ))}
          </List>
        </div>
      </Paper>
    </React.Fragment>
  );
}




//     <React.Fragment>
//       <CssBaseline />
//       <Paper square sx={{ pb: '50px' }}>
//         <List sx={{ mb: 2 }}>
//           {messages.map(({ id, name, email, person, facebook, whatsapp, linkedin }) => (
//             <React.Fragment key={id}>
//               {id === 1 && (
//                 <ListSubheader sx={{ bgcolor: 'background.paper' }} className='header' >
//                   المشرفين
//                 </ListSubheader>
//               )}

//               {id === 3 && (
//                 <ListSubheader sx={{ bgcolor: 'background.paper' }} className='header' >
//                   اعضاء التيم
//                 </ListSubheader>
//               )}
//               <ListItemButton className="person">
//                 <div className='info-card'>
//                     <ListItemAvatar>
//                     <Avatar alt="Profile Picture" src={person} />
//                     </ListItemAvatar>
//                     <ListItemText primary={name} secondary={email} />
//                 </div>
//                 <Box sx={{ display: 'flex', gap: 1 }}>
//                   <IconButton
//                     href={facebook}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{color:"blue"}}
//                   >
//                     <FacebookIcon />
//                   </IconButton>
//                   <IconButton
//                     href={whatsapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{color:"green"}}
//                   >
//                     <WhatsAppIcon />
//                   </IconButton>
//                   <IconButton
//                     href={linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{color:"#0a66c2"}}
//                   >
//                     <LinkedInIcon />
//                   </IconButton>
//                 </Box>
//               </ListItemButton>
//             </React.Fragment>
//           ))}
//         </List>
//       </Paper>
//     </React.Fragment>
//   );
// }
