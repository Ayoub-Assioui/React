export default function ProjectCard(props){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className=" h-96">
            <img src={props.img} className="w-full h-full object-contain " alt={props.name}></img>
        </div>
    )
}
