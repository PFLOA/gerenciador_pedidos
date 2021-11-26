import EndPoints from "./endpoints/endpoints";
import { Criar } from "./infra/core/service";
import { NovoUsuarioRequest, UsuarioModel } from "./models/usuario/usuario.model";

export const criarUsuario = async (body: NovoUsuarioRequest): Promise<UsuarioModel> => {
	return await Criar(EndPoints.Usuario, body);
};