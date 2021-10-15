import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import TableContacts from './components/TableContacts';
import { contacts } from './data.js';

describe('Exercício 1', () => {
  it('Verificando se um título, subtítulo e um botão são renderizados', () => {
    render(<App />);
    const titleh1 = screen.getByRole('heading', { level: 1 });
    const subh3 = screen.getByRole('heading', { level: 3 });
    const btn = screen.getByRole('button');

    expect(titleh1.textContent).toBe('Lista de contatos');
    expect(subh3.textContent).toBe('Lista de contatos vazia!');
    expect(btn.textContent).toBe('Novo contato');
  });
});

describe('Exercício 2', () => {
  it('Ao clicar no botão "Novo contato" um form aparece', () => {
    render(<App />);
    const btn = screen.getByText('Novo contato');

    userEvent.click(btn);

    const form = screen.getByTestId('formulario');

    expect(form).toBeInTheDocument();
  });

  it('Verificando se o possui 3 inputs de texto e um botão "Salvar"', () => {
    render(<App />);
    const btn = screen.getByText('Novo contato');

    userEvent.click(btn);

    const inputs = screen.getAllByRole('textbox');
    const btnSave = screen.getByText('Salvar');

    expect(inputs).toHaveLength(3);
    expect(btnSave).toBeInTheDocument();
  });
});

describe('Exercício 3', () => {
  it('Teste se é possível adicionar um novo contatos', () => {
    render(<App />);
    const btn = screen.getByText('Novo contato');

    userEvent.click(btn);

    const inputs = screen.getAllByRole('textbox');
    const btnSave = screen.getByText('Salvar');

    userEvent.type(inputs[0], 'Harry potter');
    userEvent.type(inputs[1], 'harrypotter@hogwarts.com');
    userEvent.type(inputs[3], '(88) 98723-0924');
    userEvent.click(btnSave);
    
    const nameContact = screen.getByText('Harry potter');
    expect(nameContact).toBeInTheDocument();
  });
});

describe('Exercício 4', () => {
  it('Renderize uma tabela de contatos', () => {
    render(<TableContacts contacts={ contacts } />);

    const nameContact1 = screen.getByText('Chaves do Oito');
    const nameContact2 = screen.getByText('Harry Potter');
    const nameContact3 = screen.getByText('Naruto Uzumaki');
    const btnsEdit = screen.getAllByText('Editar');
    const btnsRemove = screen.getAllByText('Remover');

    expect(nameContact1).toBeInTheDocument();
    expect(nameContact2).toBeInTheDocument();
    expect(nameContact3).toBeInTheDocument();
    expect(btnsEdit).toHaveLength(3);
    expect(btnsRemove).toHaveLength(3);
  });

  it('Teste se o botão "Remover" remove o contato', () => {
    render(<App />);
    const btn = screen.getByText('Novo contato');

    userEvent.click(btn);

    const inputs = screen.getAllByRole('textbox');
    const btnSave = screen.getByText('Salvar');

    userEvent.type(inputs[0], 'Naruto Uzumaki');
    userEvent.type(inputs[1], 'narutouzumaki@konoha.com');
    userEvent.type(inputs[3], '(66) 76454-1982');
    userEvent.click(btnSave);

    const nameContact = screen.getByText('Naruto Uzumaki');
    const btnRemove = screen.getByText('Remover');

    userEvent.click(btnRemove);

    expect(nameContact).not.toBeInTheDocument();
  });
});
