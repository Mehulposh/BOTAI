import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline, Grid } from "@mui/material";
import SideMenu  from './components/SideMenu/SideMenu';

function App() {
 
  const [chat,setChat] = useState([]);
  const [menuOpen,setMenuOpen] = useState(false);


  return (
    <div>
      <CssBaseline/>

      <Grid 
        container 
        sx={{ 
          background: "linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))" 
          }}
        >
          <Grid
            size={{sm: 12 , md:3}}
            height={'100vh'}
          >
            <SideMenu 
              setChat={setChat}
              closeMenu={() => setMenuOpen(false)}
            />
          </Grid>

          <Grid
            size={{sm: 12 , md: 9}}
          >
            <Outlet context={{chat: chat, setChat: setChat , handleMobileMenu: setMenuOpen }} />
          </Grid>
        </Grid>
    </div>
  )
}

export default App;