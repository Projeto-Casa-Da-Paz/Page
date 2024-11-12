import EventoDetalhe from './EventoDetalhe';

interface EventoDetalhePageProps {
    params: {
        id: string;
    };
}

const EventoDetalhePage = ({ params }: EventoDetalhePageProps) => {
    return <EventoDetalhe id={params.id} />;
};

export default EventoDetalhePage;

export async function generateStaticParams() {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/galerias');
        const galerias = await res.json();

        return galerias.map((galeria: { id: number }) => ({
            id: galeria.id.toString(),
        }));
    } catch (error) {
        console.error('Erro ao gerar parâmetros estáticos:', error);
        return []; // Retorna array vazio em caso de erro
    }
}