import { useEffect } from 'react';
import { useNetwork, useSwitchNetwork } from 'wagmi';

const SwitchNetwork = () => {
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const isGoerli = chain?.id === 5; // El ID de la red Goerli es 5

  useEffect(() => {
    // Este efecto se ejecutará cuando el componente se monte o cuando 'chain' cambie.
    if (chain?.id !== 5 && switchNetwork) {
      // Si no estamos en Goerli, mostramos el botón para cambiar.
      console.log('No estás en la red Goerli.');
    }
  }, [chain, switchNetwork]);

  const changeToGoerli = () => {
    if (switchNetwork) {
      switchNetwork(5); // Intenta cambiar a Goerli
    }
  };
  return (
    <div>
      {!isGoerli && <button onClick={changeToGoerli}>Cambiar a Goerli</button>}
    </div>
  );
};

export default SwitchNetwork;
