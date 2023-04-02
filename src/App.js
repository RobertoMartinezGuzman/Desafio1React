import logo from './logo.svg';
import './App.css';
import Cardcomponents from './components/Card';
import Titulo from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    
      <div>
        <Titulo titulo="Galería de Imágenes con React"/>  
      </div>

      <div>
        <Cardcomponents url="https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_1280.jpg" title="Zorro" info="Los vulpinos son una tribu de mamíferos carnívoros incluidos en la familia de los cánidos. Se conocen comúnmente como zorros o raposas.​" button="Ver Más..."/>
        <Cardcomponents url="https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662_1280.jpg" title="Koala" info="El koala es una especie de marsupial diprotodonto de la familia Phascolarctidae, endémico de Australia. Es el único representante existente de la familia Phascolarctidae." button="Ver Más..."/>
        <Cardcomponents url="https://cdn.pixabay.com/photo/2016/05/02/13/17/deer-1367217_1280.jpg" title="Ciervo" info="El ciervo común, también llamado ciervo europeo, ciervo rojo, ciervo colorado o venado, es una especie de cérvido ampliamente distribuida por el hemisferio norte." button="Ver Más..."/>   
        <Cardcomponents url="https://cdn.pixabay.com/photo/2017/04/11/21/34/giraffe-2222908_1280.jpg" title="Jirafa" info="La jirafa es una especie de mamífero artiodáctilo, de la familia Giraffidae propio de África. Es la más alta de todas las especies de animales terrestres existentes, ya que puede alcanzar una altura de 5,8 m y un peso que varía entre 750 y 1600 kg.​" button="Ver Más..."/>   
      </div>

      <div>
        <Footer footer="Todos los Derechos Reservados @2023"/>  
      </div>
   
    </div>
  );
}

export default App;
