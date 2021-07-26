import React, { useState } from 'react';
import * as S from './styled';

function App() {
  const [ usuario, setUsuario] = useState('');
  const [ senha, setSenha] = useState('');

  const onChangeUser = event => {
    localStorage.setItem('user', event.target.value)
    setUsuario(event.target.value);
  };
  const onChangeSenha = event => {
    localStorage.setItem('password', event.target.value)
    setSenha(event.target.value);
  };

  return (
    <S.Container>
      <S.ContentNav>
          <a href="https://www.evino.com.br/" target="_blank" rel="noreferrer"><img width="160px" src="/image/evino-logo.png" alt="Logo Evino"/></a>
          <S.Input placeholder="Usuário" value={ usuario } type="email" onChange={onChangeUser}/>
          <S.Input placeholder="Senha" value={ senha } type="password" onChange={onChangeSenha}/>
          <S.ButtonLogin type="button">Login</S.ButtonLogin>
      </S.ContentNav>
        <S.ImgDestaque src="/image/destaque-site.jpg"/>
      <S.Content>
        <S.Card>
          <img src="image/alisios-brut.png" alt="Alisios Brut"/>
          <p>Preço R$ 49,90</p>
          <p>Alisios Brut</p>
          <p>Uva: Chenin Blanc, Verdejo</p>
          <p>Tipo: Espumante</p>
          <p>País: Brasil</p>
          <S.ButtonComprar type="button">Adicionar</S.ButtonComprar>
        </S.Card>
        <S.Card>
          <img src="image/baron-des-fontenilles-bordeaux.png" width="21%" alt="Baron Des Fontenilles Bordeaux"/>
          <p>Preço R$ 51,90</p>
          <p>Baron Des Fontenilles Bordeaux</p>
          <p>Uva: Merlot, Cabernet Sauvignon</p>
          <p>Tipo: Tinto</p>
          <p>País: França</p>
          <S.ButtonComprar type="button">Adicionar</S.ButtonComprar>
        </S.Card>
        <S.Card>
          <img src="image/guanaco-west-malbec.png" alt="Guanaco West"/>
          <p>Preço R$ 44,90</p>
          <p>Guanaco West</p>
          <p>Uva: Malbec</p>
          <p>Tipo: Tinto</p>
          <p>País: Argentina</p>
          <S.ButtonComprar type="button">Adicionar</S.ButtonComprar>
        </S.Card>
        <S.Card>
          <img src="image/el-taller-reserva.png" alt="El Taller Reserva"/>
          <p>Preço R$ 54,90</p>
          <p>El Taller Reserva</p>
          <p>Uva: Tannat</p>
          <p>Tipo: Tinto</p>
          <p>País: Uruguai</p>
          <S.ButtonComprar type="button">Adicionar</S.ButtonComprar>
        </S.Card>
        <S.Card>
          <img src="image/lady-victoria-carmenere-reserva-colchagua-valley-DO.png" alt="Lady Victoria Reserva"/>
          <p>Preço R$ 79,90</p>
          <p>Lady Victoria Reserva</p>
          <p>Uva: Carménère</p>
          <p>Tipo: Tinto</p>
          <p>País: Chile</p>
          <S.ButtonComprar type="button">Adicionar</S.ButtonComprar>
        </S.Card>
        <S.Card>
          <img src="image/lagar-vinho-verde-DOC.png" alt="Lagar" width="18%"/>
          <p>Preço R$ 49,90</p>
          <p>Lagar</p>
          <p>Uva: Alvarinho, Trajadura</p>
          <p>Tipo: Branco</p>
          <p>País: Portugal</p>
          <S.ButtonComprar type="button">Adicionar</S.ButtonComprar>
        </S.Card>
        <S.Card>
          <img src="image/maestro-italiano-primitivo-puglia-IGT.png" width="20%" alt="Maestro Italiano Primitivo Puglia IGT"/>
          <p>Preço R$ 84,90</p>
          <p>Maestro Italiano Primitivo Puglia IGT</p>
          <p>Uva: Primitivo</p>
          <p>Tipo: Tinto</p>
          <p>País: Italia</p>
          <S.ButtonComprar type="button">Adicionar</S.ButtonComprar>
        </S.Card>
        <S.Card>
          <img src="image/zagalero-coleccion-syrah.png" width="21%" alt="Zagalero Coleccion"/>
          <p>Preço R$ 28,90</p>
          <p>Zagalero Coleccion</p>
          <p>Uva: Syrah</p>
          <p>Tipo: Tinto</p>
          <p>País: Espanha</p>
          <S.ButtonComprar type="button">Adicionar</S.ButtonComprar>
        </S.Card>
      </S.Content>
      <S.Footer>
        <S.NomeFooter>Lucian Tavares</S.NomeFooter>
        <a href="https://www.linkedin.com/in/lucian-silva/" target="_blank" rel="noreferrer"><img src="/image/linkedin.png" alt="Logo Linkedin" width="30px" /></a>
        <a href="https://www.instagram.com/luciantavaresmartins/" target="_blank" rel="noreferrer"><img src="/image/instagram.png" alt="Logo Instagram" width="30px"/></a>
        <a href="https://github.com/LucianTavares" target="_blank" rel="noreferrer"><img src="/image/github.ico" alt="Logo Instagram" width="30px"/></a>
      </S.Footer>
    </S.Container>
  );
}

export default App;
