import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';



class Resume extends Component {
    render(){
        return(
            <div>
                <Grid className="justify-content-center text-center">
                    <Cell col={8}>
                        <div style={{textAlign:'center' }}>
                            <img
                                src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_blonde_curl_people_woman_teenager_avatar-2-512.png"
                                alt="avatar"
                                style={{height:'200px'}}
                            />
                        </div>
                        <h1 className="all-titles display-2" style={{paddingTop:'2em'}}>Bibbo Claudia Alejandra</h1>
                        <h4 className="all-titles subtitulo-slogan" style={{color:'grey'}}>Diseñadora y Fundadora de Baby Soul</h4>
                        <hr style={{borderTop:'3px dotted #87CEEB', width:'100%'}}/>
                        <p className="paragraph">Hace unos años empece a soñar… hacer prendas únicas, para bebes y niños, distintas de la ropita tradicional que podemos encontrar en cualquier local, después pensé que si la hacia yo, además, tendría un valor agregado, asique decidi poner manos a la obra y comenzar a trabajar mi sueño.
   Me embarque, de a poco, en esta aventura hermosa, me deje llevar por mis ideas, por lo que me gusta, aprendi que todos los colores son lindos y que cualquier tela puede ser suave. Me encanta hacer hincapié en los detalles mas pequeños para lograr diseños exclusivos que hacen la diferencia.
   Entiendo que esta es mi forma mas linda de acompañar, ser parte y disfrutar el crecimiento de los mas pequeños</p>
                        <hr style={{borderTop:'3px dotted #87CEEB', width:'100%'}}/>
                        <h2 className="all-titles">Ciudad</h2>
                        <p className="paragraph ">Balcarce - Buenos Aires - Argentina</p>
                        <h2 className="all-titles mt-5">Celular</h2>
                        <p className="paragraph ">(2266)-15678710</p>
                        <h2 className="all-titles mt-5">Email</h2>
                        <p className="paragraph">babysoulcb@gmail.com</p>
                        
                        <hr style={{borderTop:'3px dotted #87CEEB', width:'100%'}}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;