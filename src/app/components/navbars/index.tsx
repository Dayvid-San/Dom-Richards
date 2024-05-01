import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import Styles from './styles.module.scss';
import Button from '../button';


const Navbars = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.logoContainer}>
                <Image
                className={Styles.logo}
                    src={Logo}
                    alt='Logotipo'
                />
            </div>
            <>
                <menu className={Styles.menu}>
                    <button className={Styles.btn}>
                        Home
                    </button>
                    <button className={Styles.btn}>
                        Sobre
                    </button>
                    <button className={Styles.btn}>
                        Serviços
                    </button>
                    <button className={Styles.btn}>
                        Contato
                    </button>
                </menu>
            </>
            <>
                <Button label='Agendamento online' />
            </>
        </div>
    );
};

export default Navbars;