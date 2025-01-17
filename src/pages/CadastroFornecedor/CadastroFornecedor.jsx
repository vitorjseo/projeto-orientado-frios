// IMPORTAÇÃO DE BIBLIOTECAS
import React from 'react';

// IMPORTAÇÃO DE REACT COMPONENTS
import Button from '../../components/Button/Button';

// IMPORTAÇÃO DE ESTILOS CSS
import '../../styles/cadastros.sass'
import '../CadastroFornecedor/cadastroFornecedor.sass'

export default function CadastroFornecedor() {
    return (
        <div className="fornecedor content_container">
            <div className='card'>
                <div className="card_header">
                    <h2>Cadastro de Fornecedor</h2>
                    <i className='bx bxs-truck' ></i>
                </div>
                <div className="card_body">
                    <div className="forms">
                        <label htmlFor="">ID</label>
                        <input type="text" />
                    </div>
                    <div className="forms name">
                        <label htmlFor="">Nome</label>
                        <input type="text" />
                    </div>
                    <div className="forms">
                        <label htmlFor="">CNPJ</label>
                        <input type="text" placeholder="XX.XXX.XXX/0001-XX" />
                    </div>
                    <div className="forms">
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder="(XX)XXXX-XXXX" />
                    </div>
                    <div className="forms">
                        <label htmlFor="">Celular</label>
                        <input type="text" placeholder="(XX)XXXXX-XXXX" />
                    </div>
                    <div className="forms similar">
                        <label htmlFor="">Site</label>
                        <input type="text" />
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
                    <div className="forms bank_info commum">
                        <div className='similar'>
                            <label htmlFor="">Banco</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Tipo de Conta</label>
                            <select name="account_type">
                                <option value="">Selecione</option>
                                <option value="">Conta corrente</option>
                                <option value="">Conta poupança</option>
                                <option value="">Conta pagamento</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Nº da Conta</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Agência</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">PIX</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="action_btn commum">
                        <Button label={'Adicionar'} />
                        <Button label={'Cancelar'} />
                    </div>
                </div>
            </div>
        </div>
    );
}