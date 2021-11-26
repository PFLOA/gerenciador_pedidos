import { createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';
import { NovoUsuarioRequest } from '../service/models/usuario/usuario.model';
import { criarUsuario } from '../service/usuario.service';
import { useToast } from './toast';

type UsuarioContextData = {
	setUsuario(usuario: SetStateAction<NovoUsuarioRequest>): void;
	gravarNovoUsuario(): void;
	usuario: NovoUsuarioRequest;
  isLoading: boolean;
};

const UsuarioContext = createContext<UsuarioContextData>({} as UsuarioContextData);

export const UsuarioProvider: React.FC = ({ children }) => {
	const [usuario, setUsuarios] = useState<NovoUsuarioRequest>({} as NovoUsuarioRequest);
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast()

	const setUsuario = useCallback((usuario: SetStateAction<NovoUsuarioRequest>) => {
		setUsuarios(usuario);
	}, []);

	const gravarNovoUsuario = useCallback(async () => {
		try {
      setIsLoading(true)
			var result = await criarUsuario(usuario);
      addToast({
        title: 'Gravado',
        type: 'success',
        description: `Usuario ${result.nome} criado com sucesso, necessário setar o banco de dados.`
      })  
      setIsLoading(false)
		} catch (error) {
      addToast({
        title: 'Erro',
        type: 'danger',
        description: 'Erro interno do servidor, tente novamente'
      })  
      setIsLoading(false)
    }
	}, [addToast, usuario]);

	return <UsuarioContext.Provider value={{ setUsuario, gravarNovoUsuario, usuario, isLoading }}>{children}</UsuarioContext.Provider>;
};

export const useNovoUsuario = (): UsuarioContextData => {
	const context = useContext(UsuarioContext);

	if (!context) {
		throw new Error('useForm must be used within an CartProvider');
	}

	return context;
};
