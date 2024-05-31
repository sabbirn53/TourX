import React from "react";
import img from '../assets/img(1).jpg'
import img2 from '../assets/img(2).jpg'
import img3 from '../assets/img(3).jpg'
import img4 from '../assets/img(4).jpg'
import img5 from '../assets/img(5).jpg'
import img6 from '../assets/img(6).jpg'
import img7 from '../assets/img(7).jpg'
import img8 from '../assets/img(8).jpg'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineReadMore } from "react-icons/md";


const Data = [
    {
    id:1,
    imgSrc: img,
    destTitle:'Palm Tree Planted Near Pool',
    location:'Srilanka',
    grade:'Relax',
    fees:'BDT 44000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat dolor itaque molestias, accusantium quisquam, recusandae saepe nostrum cumque explicabo modi, sequi quis unde. Perspiciatis, dignissimos? A rem est iusto aliquid asperiores quibusdam facilis doloribus veniam, veritatis soluta laborum totam, ipsum facere minus distinctio reprehenderit esse perspiciatis, consequuntur nobis sapiente'
},

{
    id:2,
    imgSrc: img2,
    destTitle:' A Famous Temple',
    location:'Bali, Indonesia',
    grade:'Relax',
    fees:'BDT 49000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat dolor itaque molestias, accusantium quisquam, recusandae saepe nostrum cumque explicabo modi, sequi quis unde. Perspiciatis, dignissimos? A rem est iusto aliquid asperiores quibusdam facilis doloribus veniam, veritatis soluta laborum totam, ipsum facere minus distinctio reprehenderit esse perspiciatis, consequuntur nobis sapiente'
},


{
    id:3,
    imgSrc: img3,
    destTitle:'Mountain Sea',
    location:'Bali, Indonesia',
    grade:'Delux',
    fees:'BDT 49000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat dolor itaque molestias, accusantium quisquam, recusandae saepe nostrum cumque explicabo modi, sequi quis unde. Perspiciatis, dignissimos? A rem est iusto aliquid asperiores quibusdam facilis doloribus veniam, veritatis soluta laborum totam, ipsum facere minus distinctio reprehenderit esse perspiciatis, consequuntur nobis sapiente'
},
{
    id:4,
    imgSrc: img4,
    destTitle:'Body of Water',
    location:'Poland',
    grade:'Relax',
    fees:'BDT 44000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat dolor itaque molestias, accusantium quisquam, recusandae saepe nostrum cumque explicabo modi, sequi quis unde. Perspiciatis, dignissimos? A rem est iusto aliquid asperiores quibusdam facilis doloribus veniam, veritatis soluta laborum totam, ipsum facere minus distinctio reprehenderit esse perspiciatis, consequuntur nobis sapiente'
},
{
    id:5,
    imgSrc: img5,
    destTitle:'Gray Rock Formation',
    location:'Thailand',
    grade:'Premium',
    fees:'BDT 47000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat dolor itaque molestias, accusantium quisquam, recusandae saepe nostrum cumque explicabo modi, sequi quis unde. Perspiciatis, dignissimos? A rem est iusto aliquid asperiores quibusdam facilis doloribus veniam, veritatis soluta laborum totam, ipsum facere minus distinctio reprehenderit esse perspiciatis, consequuntur nobis sapiente'
},
{
    id:6,
    imgSrc: img6,
    destTitle:'City of History',
    location:'Italy',
    grade:'Platium',
    fees:'BDT 40000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat dolor itaque molestias, accusantium quisquam, recusandae saepe nostrum cumque explicabo modi, sequi quis unde. Perspiciatis, dignissimos? A rem est iusto aliquid asperiores quibusdam facilis doloribus veniam, veritatis soluta laborum totam, ipsum facere minus distinctio reprehenderit esse perspiciatis, consequuntur nobis sapiente'
},
{
    id:7,
    imgSrc: img7,
    destTitle:'Mountain Hills',
    location:'Maldives',
    grade:'Relax',
    fees:'BDT 50000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat dolor itaque molestias, accusantium quisquam, recusandae saepe nostrum cumque explicabo modi, sequi quis unde. Perspiciatis, dignissimos? A rem est iusto aliquid asperiores quibusdam facilis doloribus veniam, veritatis soluta laborum totam, ipsum facere minus distinctio reprehenderit esse perspiciatis, consequuntur nobis sapiente'
},
{
    id:8,
    imgSrc: img8,
    destTitle:'Walk on Dock',
    location:'Thailand',
    grade:'Delux',
    fees:'BDT 48000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat dolor itaque molestias, accusantium quisquam, recusandae saepe nostrum cumque explicabo modi, sequi quis unde. Perspiciatis, dignissimos? A rem est iusto aliquid asperiores quibusdam facilis doloribus veniam, veritatis soluta laborum totam, ipsum facere minus distinctio reprehenderit esse perspiciatis, consequuntur nobis sapiente'
}

]
const Main = ()=>{
    return(
        <section className="main container section">
            <div className="sectionTitle">
                <h3 className="title">
                    Most Visited Destinations..
                </h3>
            </div>

            <div className="secContent grid">
                {/* using array */}
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
                        return(
                            <div key={id} className="singleDestination">
                                    <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="desTitle">{destTitle}</h4>
                                        <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name"> {location}</span>
                                        </span>

                                        <div className="fees flex">
                                            <div className="grade">
                                                <span>{grade}<small>+1</small></span>
                                             </div>
                                             <div className="price">
                                                <h5>{fees}</h5>
                                             </div>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>

                                        <button className="btn flex">
                                            Details <MdOutlineReadMore className="icon"/>
                                        </button>

                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Main;