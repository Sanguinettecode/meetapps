import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import cover from '../../../assets/cover_banner.svg';
import { Container } from './styles';
import api from '../../../services/api';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('banner', e.target.files[0]);

    const response = await api.post('/files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="banner">
        <div>
          {preview ? null : (
            <>
              <MdCameraAlt />
              <span>Selecionar imagem</span>
            </>
          )}
        </div>
        <img src={preview || cover} alt="Selecionar Imagem" />
        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
          placeholder="Selecionar imagem"
        />
      </label>
    </Container>
  );
}
