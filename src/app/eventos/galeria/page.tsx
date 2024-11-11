"use client";

import { Card } from "@mui/material";
import { useState, useEffect } from "react";

interface Galeria {
  id: number;
  nome: string;
  data: string;
  local: string;
}

const GaleriaView = () => {
  const [galerias, setGalerias] = useState<Galeria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalerias = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/galerias', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }); 

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setGalerias(data);

      } catch (err) {
        let errorMessage = 'Erro ao carregar as galerias. Por favor, tente novamente mais tarde.';

        if (err instanceof TypeError && err.message === 'Failed to fetch') {
          errorMessage = 'Não foi possível conectar ao servidor. Verifique sua conexão.';
        }

        setError(errorMessage);
        console.error('Erro detalhado:', err);

      } finally {
        setLoading(false);
      }
    };

    fetchGalerias();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Nossas Galerias</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galerias.map((galeria) => (
          <Card
            key={galeria.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Placeholder para imagem */}
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <span className="text-lg">{galeria.nome}</span>
              </div>
            </div>

            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-xl text-gray-800">{galeria.nome}</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <span className="font-medium">Data: </span>
                  {new Date(galeria.data).toLocaleDateString('pt-BR')}
                </p>
                <p>
                  <span className="font-medium">Local: </span>
                  {galeria.local}
                </p>
              </div>

              <button
                className="mt-4 w-full py-2 text-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                onClick={() => window.location.href = `/galeria/${galeria.id}`}
              >
                Ver Galeria →
              </button>
            </div>
          </Card>
        ))}
      </div>

      {galerias.length === 0 && !loading && !error && (
        <div className="text-center text-gray-500 mt-8">
          Nenhuma galeria encontrada.
        </div>
      )}
    </div>
  );
};

export default GaleriaView;