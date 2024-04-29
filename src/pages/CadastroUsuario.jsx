import HeaderBar from '../components/HeaderBar'
import SideBarMenu from "../components/SideBarMenu"

import '../styles/pages/cadastros.sass'
import '../styles/components/cadastroUsuario.sass'

export default function CadastroUsuario() {
    return (
        <>
            <HeaderBar />
            <div className="page_container">
                <SideBarMenu />
                <div className="content_container">
                    <div className='card'>
                        <div className="card_header">
                            <h2>Cadastro de Usuário</h2>
                        </div>
                        <div className="card_body">
                            <div className="forms">
                                <label htmlFor="">ID</label>
                                <input type="text" />
                            </div>
                            <div className="forms similar">
                                <label htmlFor="">Nome</label>
                                <input type="text" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">CPF</label>
                                <input type="text" placeholder="XXX.XXX.XXX-XX" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Telefone</label>
                                <input type="text" placeholder="(XX)XXXX-XXXX" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Celular</label>
                                <input type="text" placeholder="(XX)XXXXX-XXXX" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Data de Nascimento</label>
                                <input type="date" />
                            </div>
                            <div className="forms similar">
                                <label htmlFor="">E-mail</label>
                                <input type="text" placeholder='exemplo@email.com' />
                            </div>
                            <div className="forms">
                                <label htmlFor="">CEP</label>
                                <input type="text" placeholder="XX.XXX-XXX" />
                            </div>
                            <div className="forms similar">
                                <label htmlFor="">Endereço</label>
                                <input type="text" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Número</label>
                                <input type="text" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Bairro</label>
                                <input type="text" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Cidade</label>
                                <input type="text" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">UF</label>
                                <input type="text" />
                            </div>
                            <div className="forms picture">
                                <label htmlFor="">Foto</label>
                                <input type="file" />
                            </div>
                            <div className="similar"></div>
                            <div className='forms'>
                                <label htmlFor="">Login</label>
                                <input type="text" />
                            </div>
                            <div className='forms'>
                                <label htmlFor="">Senha</label>
                                <input type="text" />
                            </div>
                            <div className='forms'>
                                <label htmlFor="">Repetir Senha</label>
                                <input type="text" />
                            </div>

                            <div className="action_btn commum">
                                <div className="btn">Adicionar</div>
                                <div className="btn">Remover</div>
                                <div className="btn">Editar</div>
                                <div className="btn">Cancelar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}