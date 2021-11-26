import Head from 'next/head';
import React from 'react';
import FormCadastro from '../../components/Form/FormCadastro';
import Input from '../../components/Form/Input';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import { useNovoUsuario } from '../../hooks/novoUsuario';

import styles from './style.module.scss';

const CadastroUsuarios: React.FC = () => {
	const { gravarNovoUsuario, setUsuario, isLoading } = useNovoUsuario();

	return (
		<>
			<Head>
				<title>Clientes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout active={'usuario/novo'}>
				<div>
					<div className={`mb-4 py-2 ${styles.titulo}`}>
						<h2>Novo Produto</h2>
					</div>
					{!isLoading ? (
						<FormCadastro onSubmit={gravarNovoUsuario}>
							<div className="row">
								<div className="col-3">
									<Input
										type="text"
										name="nome"
										label="Nome Usuario"
										onChange={(e) =>
											setUsuario((usuario) => {
												return { ...usuario, nome: e.target.value };
											})
										}
									/>
								</div>
								<div className="col-2">
									<Input
										type="text"
										name="userName"
										label="Login"
										onChange={(e) =>
											setUsuario((usuario) => {
												return { ...usuario, userName: e.target.value };
											})
										}
									/>
								</div>
								<div className="col-2">
									<Input
										type="password"
										name="senha"
										label="Password"
										onChange={(e) =>
											setUsuario((usuario) => {
												return { ...usuario, senha: e.target.value };
											})
										}
									/>
								</div>
								<div className="col-2">
									<Input
										type="text"
										name="email"
										label="Email"
										onChange={(e) =>
											setUsuario((usuario) => {
												return { ...usuario, email: e.target.value };
											})
										}
									/>
								</div>
								<div className="col-3">
									<label className="mb-1">Nivel de Acesso</label>
									<select
										name="role"
										className="form-control"
										onChange={(e) =>
											setUsuario((usuario) => {
												return { ...usuario, role: ~~e.target.value };
											})
										}
									>
										<option value="4" className="dropdown-item">
											Operacional
										</option>
										<option value="1" className="dropdown-item">
											Administrador
										</option>
										<option value="2" className="dropdown-item">
											Diretoria
										</option>
										<option value="3" className="dropdown-item">
											Gerencia
										</option>
									</select>
								</div>
							</div>
						</FormCadastro>
					) : (
						<Loader />
					)}
				</div>
			</Layout>
		</>
	);
};

export default CadastroUsuarios;
