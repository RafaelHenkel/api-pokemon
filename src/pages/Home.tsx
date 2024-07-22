import { useEffect, useState } from 'react';
import ButtonDefault from '../components/button-default/ButtonDefault';
import PageDefault from '../components/PageDefault';
import PokeType from '../types/PokeType';
import { api } from '../api/api';
import PokeStyled from '../components/PokeStyled';
import ButtonContainer from '../components/button-default/ButtonContainer';
import InputDefaultStyled from '../components/InputDefaultStyled';

function Home() {
  const [poke, setPoke] = useState<PokeType[]>([]);
  const [search, setSearch] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    async function getPoke() {
      const response = await api.get('pokemon', { params: { offset: `${offset}` } });
      setPoke(response.data.results);
    }
    getPoke();
  }, [offset]);

  return (
    <>
      <PageDefault>
        <InputDefaultStyled
          type="text"
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Pesquisar pokemons que estão nesta pagina"
        />
        <ul>
          {poke
            .filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            .map(item => (
              <PokeStyled>{item.name}</PokeStyled>
            ))}
        </ul>
        <ButtonContainer>
          <ButtonDefault
            label="Anterior"
            action={() => {
              offset === 0 ? setOffset(0) : setOffset(offset - 20);
            }}
          />
          <ButtonDefault label="Proxima" action={() => setOffset(offset + 20)} />
        </ButtonContainer>
      </PageDefault>
    </>
  );
}

export default Home;
