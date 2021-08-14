import { useEffect, useRef, useCallback, useState } from "react"
import { realizarLogin } from "../../services/login.service";
import { useHistory } from "react-router-dom";
import { isAuthenticated, login } from "../../services/auth";
import { Button, Image } from 'react-bootstrap'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'

import logo from '../../assets/LOGO.png'
import Input from "../../components/Form/input";

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
    }, [usuario])

    useEffect(() => {
        if (isAuthenticated())
            history.push("/gerenciador_pedidos/app")
    });

    return (
        <>
            <div className="conteudo">
                <Image src={logo} height={200} width={500} />
                <Form className="my-2" onSubmit={handleLogin} ref={formRef}>
                    <div className="d-flex flex-column login-form">
                        <h2 className="my-5">Login</h2>
                        <div className="form-group">
                            <Input label="Usuário" type="text" name="userName" placeholder="Digite o usuario" />
                        </div>
                        <div className="form-group">
                            <Input label="Senha" type="password" name="senha" placeholder="Senha" />
                        </div>
                        <Button variant="primary" className="my-5" type="submit">
                            Entrar
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default LoginForm