import { FlatList } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { Container, Form } from './styles';

export function Players() {
    return (
        <Container>
            <Header />

            <Highlight
                title='Nome da turma'
                subtitle='adicione a galera e separe os times'/>
            <Form>
                <Input placeholder='nome da pessoa'
                    autoCorrect={false}
                />
                <ButtonIcon icon={'home'} type={'PRIMARY'} />
            </Form>

            <FlatList
                data={['Time A', 'Time B']}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Filter
                        title={item}
                    />
                )}
                horizontal
            />



        </Container>
    )
}