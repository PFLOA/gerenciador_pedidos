import { useEffect, useRef, useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { Button, Image } from 'react-bootstrap'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'

import { isAuthenticated, login } from "../../services/auth";
import { realizarLogin } from "../../services/login.service";
import Input from "../../components/Form/input";
import styles from './style.module.scss'
import logo from '../../assets/img/logo.png'

const LoginForm = () => {

    const [usuario, setUsuario] = useState({
        userName: '',
        senha: ''
    })

    const formRef = useRef<FormHandles>(null)

    let history = useHistory();

    const handleLogin: SubmitHandler = useCallback(async (values) => {
        try {
            formRef.current?.setErrors({})

            const user: { [key: string]: any } = usuario
            const mappingValues = Object.entries(values)

            mappingValues.forEach((i) => {
                var name = i[0]
                var value = i[1]

                if (value === '') value = undefined;

                if (name in user) user[name] = value
            })

            realizarLogin(usuario.userName, usuario.senha).then((response)=>{
                login(response.data.token)
                history.push("/gerenciador_pedidos/app")
            })
        } catch (error) {

        }
    }, [usuario, history])

    useEffect(() => {
        if (isAuthenticated())
            history.push("/gerenciador_pedidos/app")
    });

    return (
        <>
            <div className={`${styles.conteudo}`}>
                <Image src={logo} height={100} width={300} />
                <Form className={`my-2`} onSubmit={handleLogin} ref={formRef}>
                    <div className={`${styles.login_form}`}>
                        <h2 className={`my-5`}>Login</h2>
                        <div className={`form-group`}>
                            <Input label="Usuário" type="text" name="userName" placeholder="Digite o usuario" />
                        </div>
                        <div className={`form-group`}>
                            <Input label="Senha" type="password" name="senha" placeholder="Senha" />
                        </div>
                        <Button className={`${styles.submit_button}`} type="submit">
                            Entrar
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default LoginForm