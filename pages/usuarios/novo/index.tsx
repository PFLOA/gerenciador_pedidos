import React from 'react';
import CadastroUsuarios from '../../../components/CadastroUsuarios';
import { UsuarioProvider } from '../../../hooks/novoUsuario';


const CadastroUsuario: React.FC = () => {
	return (
		<UsuarioProvider>
			<CadastroUsuarios/>
		</UsuarioProvider>
	);
};

export default CadastroUsuario;
