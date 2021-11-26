export interface UsuarioModel {
	nome: string;
	userName: string;
	email: string;
	role: Role;
}

export enum Role {
	NoAccess,
	Administrador,
	Diretoria,
	Gerencia,
	Operacional,
}

export interface NovoUsuarioRequest {
	nome: string;
	senha: string;
	userName: string;
	email: string;
	role: Role;
}
