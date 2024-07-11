import flor from './assets/flor-ch.png'
import Whatsapp from './assets/whatsapp.png'
import fb from './assets/facebook (2).png'
import ig from './assets/logotipo-de-instagram (1).png'
import axolotes from './assets/ajolotes-anfibios.jpg'

function Menu() {

    const clickWsp = () =>{
        window.location.href = "https://wa.me/525529911129?text=Quiero%20ordenar%20algo."
    }

    const clickIg = () =>{
        window.location.href = "https://www.instagram.com/axoloexpresso/"
    }

    const clickFb = () =>{
        window.location.href = "https://www.facebook.com/profile.php?id=61553134692967"
    }




    return (  
<>
    <div className="cuadro">
        
        <div className="columna">
            
            <div className="titulo"> 
                <h1>BEBIDAS</h1> 
            </div>
            
            <div className="subtitulo">
                <img src={flor} alt="Flor" /> <h1>BEBIDAS CALIENTES</h1>
            </div>
            
            <div className="precios">
                <h1>MEDIANO</h1>
                <h1>GRANDE</h1>
            </div>

            <div className="productos">
                <li>
                    <ul>CAFÉ ESPRESSO</ul>
                    <ul>CAFÉ AMERICANO</ul>
                    <ul>CAFÉ LATTE</ul>
                    <ul>CAFÉ CAPUCCINO</ul>
                    <ul>CAFÉ con SABOR *</ul>
                    <ul>CAFÉ MOKACCINO</ul>
                    <ul>CHOCOLATE</ul>
                    <ul>TÉ ARTESANAL</ul>
                </li>
                <li>
                    <ul>$20</ul>
                    <ul>$25</ul>
                    <ul>$35</ul>
                    <ul>$35</ul>
                    <ul>$45</ul>
                    <ul>$45</ul>
                    <ul>$35</ul>
                    <ul>$20</ul>
                </li>
                <li>
                    <ul>----</ul>
                    <ul>$35</ul>
                    <ul>$45</ul>
                    <ul>$45</ul>
                    <ul>$55</ul>
                    <ul>$55</ul>
                    <ul>$45</ul>
                    <ul>$35</ul>
                </li>
                
            </div>

            <div className='anuncio'>
                <span>* SABOR: CREMA IRLANDESA, AMARETO AVELLANA, VAINILLA, ROMPOPE</span>
            </div>

        <br />

        <div className="subtitulo">
            <img src={flor} alt="Flor" /> <h1>BEBIDAS FRÍAS</h1>
        </div>

        <div className="productos2">
            <li>
                    <ul className='tituloUl'>FRAPPÉS DE LECHE</ul>
                    <ul className='subtituloUl'>(CAPUCCINO, GALLETA OREO, FRESA, PIÑA COLADA, MAZAPAN *, CHOCOLATE BLANCO * o TARO * )</ul>

                    <ul className='tituloUl'>FRAPPÉS DE AGUA</ul>
                    <ul className='subtituloUl'>(MANGO, TAMARINDO, FRESA, LIMÓN, PIÑA-MANGO, NARA-MANGO)</ul>
            
                    <ul className='tituloUl'>ESQUIMOS</ul>
                    <ul className='subtituloUl'>(CHOCOLATE, VAINILLA, FRESA, COCO, ROMPOPE)</ul>

                    <ul className='tituloUl'>MALTEADAS</ul>
                    <ul className='subtituloUl'>(CHOCOLATE, VAINILLA, FRESA, GALLETA OREO o MAZAPÁN *)</ul>

                    <ul className='tituloUl'>SODAS ITALIANAS</ul>
                    <ul className='subtituloUl'>(MANGO, FRESA, MORA AZUL, MARACUYÁ, ZARZAMORA o MENTA)</ul>

                    <ul className='tituloUl'>CAFÉ LATTE FRÍO</ul>
                    <ul className='subtituloUl'>(CARAMELO, CHOCOLATE o VAINILLA)</ul>
                    
                    <ul className='tituloUl'>FLOTANTES</ul>
                    <ul className='subtituloUl'>(LIMÓN O VAINILLA)</ul>

            </li>
            <li>
                <ul className='preciosFrio' id='preciosFrio1'><strong>$45</strong></ul>
                <ul className='preciosFrio'><strong>$35</strong></ul>
                <ul className='preciosFrio'><strong>$30</strong></ul>
                <ul className='preciosFrio'><strong>$45</strong></ul>
                <ul className='preciosFrio'><strong>$35</strong></ul>
                <ul className='preciosFrio'><strong>$45</strong></ul>
                <ul className='preciosFrio'><strong>$40</strong></ul>
            </li>

        </div>

            <div className='anuncio' id='anuncioespecial'>
                <span>*COSTO $55</span>
            </div>

        </div>

        
        <div className="columna">

            <div className="titulo"> <h1>ENSALADAS</h1> </div>

            <div className='explicacion'>
                <p>Preparadas sobre una cama de 3 lechugas, espinaca, zanahoria rayada y queso parmesano</p>
            </div>

            <div className='ensaladaCard'>

                <div className='ensaladaTituloCard'>

                    <img src={flor} alt="Flor" />
                    <h1>NUTRIBELLI</h1>
                    <h2>$70</h2>

                </div>

                <div className='explicacion2'>
                    <p>PECHUGA DE POLLO, PASTA Y AGUACATE</p>
                </div>

                <div className='ensaladaTituloCard'>

                    <img src={flor} alt="Flor" />
                    <h1>MARINERA</h1>
                    <h2>$70</h2>

                </div>

                <div className='explicacion2'>
                    <p>ATÚN, MANZANA Y AGUACATE</p>
                </div>

                <div className='ensaladaTituloCard'>

                    <img src={flor} alt="Flor" />
                    <h1>FRUTAL</h1>
                    <h2>$70</h2>

                </div>

                <div className='explicacion2'>
                    <p>QUESO PANELA, MANZANA Y UVAS</p>
                </div>

                <div className='ensaladaTituloCard'>
                    <h1>COMPLEMENTOS</h1>
                </div>

                <div className='explicacion'>
                    <p>Añade hasta 3 complementos</p>
                </div>
                
                <ul className="listaComplementos">
                    <li>- ARÁNDONOS</li>
                    <li>- CRUTONES</li>
                    <li>- NUEZ</li>
                    <li>- ACEITUNAS</li>
                    <li>- JITOMATE CHERRY</li>
                    <li>- CACAHUATE</li>
                </ul>

                <div className='ensaladaTituloCard'>
                    <h1>ADEREZOS</h1>
                </div>
                
                <ul className="listaComplementos2">
                    <li>- MOSTAZA</li>
                    <li>- CILANTRO</li>
                    <li>- RANCH</li>
                </ul>

            </div>

            <div className="titulo"> <h1>SNACKS</h1> </div>
            <div className='productosVarios'>
                <div className='productosVariosPrecio'>
                    <h1>❖ CUERNITOS *</h1>
                    <h1>$40</h1>
                </div>
                
                <div className='productosVariosPrecio'>
                    <h1>❖ NACHOS con QUESO</h1>
                    <h1>$30</h1>
                </div>
                
                <div className='productosVariosPrecio'>
                    <h1>❖ NACHOS con QUESO y CARNE</h1>
                    <h1>$40</h1>
                </div>

                <div className='explicacion'>
                    <p>* PREPARADOS CON JAMÓN O PECHUGA DE PAVO, QUESO MANCHEGO MAYONESA Y LECHUGA</p>
                </div>

            </div>
        </div>


        <div className="columna">

            <div className="titulo"> <h1>BAGUETTES <br /> & CHAPATAS</h1> </div>
           
            <div className='explicacion'>
                <p>Preparadas con mayonesa, mostaza, queso manchego, jitomate, aguacate, lechuga y zanahoria rayada</p>
            </div>

            <div className='productosVarios'>
                <div className='productosVariosPrecio'>
                    <h1>❖ PECHUGA DE POLLO</h1>
                    <h1>$80</h1>
                </div>
                
                <div className='productosVariosPrecio'>
                    <h1>❖ PECHUGA DE PAVO</h1>
                    <h1>$70</h1>
                </div>
                
                <div className='productosVariosPrecio'>
                    <h1>❖ JAMÓN</h1>
                    <h1>$70</h1>
                </div>

                <div className='productosVariosPrecio'>
                    <h1>❖ DOS QUESOS</h1>
                    <h1>$70</h1>
                </div>

            </div>

            <div className="titulo"> <h1>POSTRES</h1> </div>

            <div className='productosVariosPrecio'>
                    <h1>❖ FLAN NAPOLITANO</h1>
                    <h1>$40</h1>
            </div>

            <div className='productosVariosPrecio'>
                    <h1>❖ CARLOTA DE LIMÓN</h1>
                    <h1>$40</h1>
            </div>

            <div className='productosVariosPrecio'>
                    <h1>❖ CHEESECAKE</h1>
                    <h1>$40</h1>
            </div>

            <div className='explicacion'><p>(MAZAPÁN, FRESA o GALLETA OREO)</p></div>
            
            <div className='productosVariosPrecio'>
                    <h1>❖ BISQUET *</h1>
                    <h1>$30</h1>
            </div>

            <div className='cuadros'>
                <div className='tituloCuadros'>
                    <h1>REALIZA <h2>TU</h2> <h3>PEDIDO</h3></h1>
                </div>
                <div className='links'>

                    <img src={Whatsapp} alt="" />
                    <h1 onClick={() => clickWsp()}>55 2991 1129</h1>

                </div>
                <div className='links'>

                    <img src={ig} alt="" />
                    <h1 onClick={() => clickIg()}>AXOLO EXPRESSO</h1>

                </div>
                <div className='links'>

                    <img src={fb} alt="" />
                    <h1 onClick={() => clickFb()}>AXOLO EXPRESSO</h1>

                </div>
            </div>

        </div>

    </div>

    <div>
        <img src={axolotes} alt="" width="100%" className='imagenAjolotes'/>
    </div>
        
</>
    );
}

export default Menu;