import React from 'react';

const TemplateExpressions = () => {
  const nome = 'João';
  const idade = 17;
  const profissao = 'Desenvolvedor';

  return (
    <div>
      <h1>Bem-vindo, {nome}!</h1>
      <p>Idade: {idade} anos</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
};

export default TemplateExpressions;