import React from 'react';
import { MdCameraAlt } from 'react-icons/md';
import cover from '../../../assets/cover_banner.svg';
import { Container } from './styles';

export default function BannerInput() {
  return (
    <Container>
      <label htmlFor="banner">
        <div>
          <MdCameraAlt />
          <span>Selecionar imagem</span>
        </div>
        <img src={cover} alt="Selecionar Imagem" />
        <input
          type="file"
          id="banner"
          accept="image/*"
          placeholder="Selecionar imagem"
        />
      </label>
    </Container>
  );
}
