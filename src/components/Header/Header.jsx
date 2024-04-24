import React, {useState, useEffect} from 'react'
import * as S from './header_styled'
import logo from '../../assets/logo.png'

export default function Header() {
    
    const [menu, setMenu] = useState (null)

    useEffect (() => {
        function redimensionamentoManual () {
            if (window.innerWidth >= 1000) {
                setMenu(true)
            } else {
                setMenu(false);
            }
        }
        
        window.addEventListener('resize', redimensionamentoManual);

        redimensionamentoManual();

        return () => {
            window.removeEventListener('resize', redimensionamentoManual)
        }
    }, [])

    return (
        <S.Header>
            <a href="#">
                <img className='logo' src={logo} alt="Logo" />
            </a>

            {menu && (
                <nav>
                    <a href="#">Início</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#habilidades">Habilidades</a>
                    <a href="#projetos">Projetos</a>
                </nav>
            )}

            <button onClick={() => setMenu(!menu)}>{menu ? "X" : "☰"}</button>
        </S.Header>
    )
}
