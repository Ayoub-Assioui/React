import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import Button from '@mui/material/Button';
import Slider from 'react-slick';
import ProjectCard from "./projectsCard.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub } from "@fortawesome/free-brands-svg-icons";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function CertCard(props){
    const [open, setOpen] = React.useState(false);
    const [closer, setclose] = React.useState(false);

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    const dialogStyle = {
        height: '600px', // Set the height to 500 pixels
      };
    
    React.useEffect(() => {
        console.log('open: ', open);
        if(closer) setOpen(false);
        if(closer) setclose(false)
      }, [open,closer]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setclose(true);
    };

    const onclosing = () => {
        setclose(false);
    };


    return (
        <div data-aos="fade-up" id="project_div" onClick={handleClickOpen} data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
            <img src={props.img} className="w-full h-56 mx-auto object-cover" alt={props.name}></img>
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>

            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                PaperProps={{ style: dialogStyle }}
                maxWidth='lg'
                onClose={onclosing}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    {props.name+" "}  
                    <a href={props.github} rel="noreferrer" target="_blank"><FontAwesomeIcon size='xl' icon={faGithub} /></a>
                    </DialogTitle>
                <DialogContent>
                    
                <Slider {...settings}>
                {props.interfaces.map(image => (
                    <ProjectCard name=" " img={image} />         
                ))}   
                
                </Slider> 
                <br></br>  
                
                <DialogContentText id="alert-dialog-slide-description">
                {props.desc}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
        
    )
}
