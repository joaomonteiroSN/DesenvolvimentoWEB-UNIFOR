import styles from '../styles/components/Ajuda.module.css';
import Collapsible from 'react-collapsible';

function Ajuda() {
    return (
        <div className={styles.ajuda} >
            <Collapsible trigger="Start here">
                <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                </p>
            </Collapsible>
            <Collapsible trigger="Mais um">
                <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                </p>
            </Collapsible>
            <Collapsible trigger="Mais dois">
                <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                </p>
            </Collapsible>
        </div>
    );
}



export default Ajuda;