// src/app/eventos/galeria/[id]/page.tsx

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
    const ids = ['1', '2']; // IDs dos eventos
    return ids.map(id => ({ id }));
}
