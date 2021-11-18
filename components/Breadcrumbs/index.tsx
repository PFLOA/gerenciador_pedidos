import React, { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { usePedido } from '../../hooks/novoPedido';
import { CrumbsList } from '../../service/models/comp-props/breadcrumbs';
import { criarPedido } from '../../service/pedido.service';

interface BreadCrumbsProps {
	listComponentes: CrumbsList[];
}

const Breadcrumbs: React.FC<BreadCrumbsProps> = ({ listComponentes }) => {
	
	const { pedido } = usePedido();

	const [actualComponent, setActualComponent] = useState(listComponentes[0]);

	const retorno = (id: number) => {
		setActualComponent(listComponentes[id - 1]);
	};
	const proximo = () => {
		setActualComponent((comp) => listComponentes[comp.id - 1 + 1]);
	};
	const anterior = () => {
		setActualComponent((comp) => listComponentes[comp.id - 1 - 1]);
	};
	const handleCriarPedido = async () => {
		const retorno = await criarPedido(pedido);
	};

	return (
		<>
			<div>
				<Breadcrumb>
					{listComponentes.map((item) => (
						<Breadcrumb.Item key={item.id} onClick={() => retorno(item.id)}>
							{item.title}
						</Breadcrumb.Item>
					))}
				</Breadcrumb>
				<div className="my-4">{actualComponent.component}</div>
			</div>
			<div className="d-flex mt-5 justify-content-end">
				<button onClick={anterior} className="btn btn-info mx-3" disabled={actualComponent.id === 1}>
					Anterior
				</button>
				{actualComponent.id !== listComponentes.length ? (
					<button onClick={proximo} className="btn btn-info">
						Próximo
					</button>
				) : (
					<button onClick={handleCriarPedido} className="btn btn-info">
						Criar Pedido
					</button>
				)}
			</div>
		</>
	);
};

export default Breadcrumbs;
