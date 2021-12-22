import React, {useState, useEffect} from 'react';
import { IAsideProps } from './types';
import axios from 'axios';
import Loader from '../Loader';

const Aside:React.FC<IAsideProps> = ({ profileImage, sprites, setAppSeed }) => {

    const [selectedSprite, setSelectedSprite] = useState("");
    const [seed, setSeed] = useState('');
    const [svg, setSvg] = useState('');
    const [svgLoader, setSvgLoader] = useState(false);

    useEffect(() => {
        if(seed !== ''){
            setSvgLoader(true);
            setTimeout(() => {
                axios.get(`https://avatars.dicebear.com/api/${selectedSprite === "" ? sprites[0] : selectedSprite}/${seed}.svg`).then(resp => {
                    setSvg(resp.data);
                    setSvgLoader(false);
                })
            }, 2000);
        }
    }, [seed, selectedSprite])

    const handleSubmit = (e: any) => {
        setAppSeed({ seed, svg })
        e.preventDefault();
    }

    return (
        <aside className='aside'>
            <form>
                <a href="/" className='aside-avatar'>
                    {
                        seed !== "" ?
                        <>
                            <div className='image' dangerouslySetInnerHTML={{ __html: svg }}/>
                            {svgLoader && <div className='lds-spinner-wrapper '><Loader /></div> }
                        </> : 
                        <img src="https://nhsscotlandevents.com/sites/default/files/default_images/person.jpeg" alt="Avatar" className="avatar" />    
                    }
                </a>
                <select className='aside-select' onChange={val => setSelectedSprite(val.target.value)}>
                    {
                        sprites?.map((sprite, index) => (
                            <option key={index}>
                                {sprite}
                            </option>
                        ))
                    }
                </select>
                <input className='aside-input' value={seed} placeholder={"Add your Name"} autoComplete="off" onChange={(e) => setSeed(e.target.value)} />
                <button className={'aside-btn' + (svgLoader ? " btn-disable" : "")} onClick={(e) => handleSubmit(e)}>Create User</button>
            </form>
        </aside>
    )
}

export default Aside;