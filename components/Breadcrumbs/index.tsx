import React, { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { CrumbsList } from '../../service/models/comp-props/breadcrumbs';

import styles from './style.module.scss';

interface BreadCrumbsProps {
	listComponentes: CrumbsList[];
}

const Breadcrumbs: React.FC<BreadCrumbsProps> = ({ listComponentes }) => {

	const [actualComponent, setActualComponent] = useState(listComponentes[0]);

	const retorno = (id: number) => {
		setActualComponent(listComponentes[id - 1]);
	}
	const proximo = () => {
		setActualComponent((comp) => listComponentes[(comp.id - 1) + 1]);
	}
	const anterior = () => {
		setActualComponent((comp) => listComponentes[(comp.id - 1) - 1]);
	}

	return (
		<>
			<Breadcrumb>
				{listComponentes.map((item) => <Breadcrumb.Item key={item.id} onClick={() => retorno(item.id)}>{item.title}</Breadcrumb.Item>)}
			</Breadcrumb>
			<div className="my-4">
				{actualComponent.component}
			</div>
			<div className="d-flex mt-5 justify-content-end">
				<button onClick={anterior} className="btn btn-info mx-3" disabled={actualComponent.id === 1}>Anterior</button>
				<button onClick={proximo} className="btn btn-info" disabled={actualComponent.id === listComponentes.length}>Próximo</button>
			</div>
		</>
	);
};

export default Breadcrumbs;
