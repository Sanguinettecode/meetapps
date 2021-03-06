import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import { signOut } from '../../store/modules/Auth/actions';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const user = useSelector(state => state.User.profile);
  const dispatch = useDispatch();
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="submit" onClick={() => dispatch(signOut())}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
